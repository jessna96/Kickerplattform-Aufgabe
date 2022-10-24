<template>
    <button><router-link to="/encounters">Zurück</router-link></button>
  <h1>Begegnung {{ selectedEncounter.id.split('_')[1] }}</h1>
  <form @submit.prevent="saveEncouter">
    <label for="date">Datum und Zeit: </label>
    <input
      type="text"
      name="date"
      id="date"
      v-model.trim="date"
      :disabled="disabledForChange"
    />
    <br /><br />
    <label for="mode">Modus: </label>
    <input
      type="text"
      name="mode"
      id="mode"
      v-model.trim="mode"
      :disabled="disabledForChange"
    />
    <br /><br />
    <label for="location">Standort: </label>
    <input
      type="text"
      name="location"
      id="location"
      v-model.trim="location"
      :disabled="disabledForChange"
    />
    <br /><br />
    <label for="team1">Team 1: </label>
    <input
      type="text"
      name="team1"
      id="team1"
      v-model.trim="membersTeamOne"
      :disabled="disabledForChange"
    />
    <br /><br />
    <label for="team2">Team 2: </label>
    <input
      type="text"
      name="team2"
      id="team2"
      v-model.trim="membersTeamTwo"
      :disabled="disabledForChange"
    />
  </form>
  <br />
  <button type="submit" @click="saveEncounter" v-if="!disabledForChange">
    Speichern
  </button>
  <button type="submit" @click="changeData" v-else>Daten ändern</button>
  <br />
  <h2>Spiele dieser Begegnung</h2>
  <game-item
    v-for="(game, index) in games"
    :key="game.id"
    :id="game.id"
    :winner="game.winnerOutcome"
    :gameNr="index"
    :encounterID="id"
  ></game-item>
  <button @click="createGame">Neues Spiel</button>
</template>

<script>
import GameItem from '../components/GameItem.vue';
export default {
  components: { GameItem },
  props: ['id'],
  data() {
    return {
      selectedEncounter: null,
      date: '',
      mode: '',
      location: '',
      membersTeamOne: [],
      membersTeamTwo: [],
      disabledForChange: true,
    };
  },
  computed: {
    games() {
      return this.$store.getters.getGamesByEncounterId(
        this.selectedEncounter.id
      );
    },
  },
  methods: {
    changeData() {
      this.disabledForChange = false;
    },
    saveEncounter() {
      let membersOne;
      let membersTwo;
      if (typeof this.membersTeamOne == 'string') {
        membersOne = this.membersTeamOne.split(',');
      } else {
        membersOne = this.membersTeamOne;
      }
      if (typeof this.membersTeamTwo == 'string') {
        membersTwo = this.membersTeamTwo.split(',');
      } else {
        membersTwo = this.membersTeamTwo;
      }
      const encounter = {
        id: this.selectedEncounter.id,
        dateAndTime: this.date,
        location: this.location,
        mode: this.mode,
        membersTeamOne: membersOne,
        membersTeamTwo: membersTwo,
      };

      this.$store.dispatch('saveEncounter', encounter);

      this.disabledForChange = true;
    },
    createGame() {
      let gameNr = this.$store.getters['nrGames'];
      let nextGameID = gameNr + 1;

      let data = {
        newId: nextGameID,
        encounterId: this.selectedEncounter.id,
      }

      console.log(data);

      this.$store.dispatch('addGame', data);
    },
  },
  created() {
    this.selectedEncounter = this.$store.getters['getEncounters'].find(
      (encouter) => encouter.id === this.id
    );
    this.date = this.selectedEncounter.dateAndTime;
    this.mode = this.selectedEncounter.mode;
    this.location = this.selectedEncounter.location;
    this.membersTeamOne = this.selectedEncounter.membersTeamOne;
    this.membersTeamTwo = this.selectedEncounter.membersTeamTwo;
  },
};
</script>