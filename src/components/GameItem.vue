<template>
  <div>
    <p>
      <b>Spiel {{ gameNr + 1 }} </b>
      <button @click="changeData" v-if="disabledForChange">
        Spieldaten ändern</button
      ><button type="submit" @click="saveGame(id)" v-else>Speichern</button>
    </p>
    <i>Positionen der Spieler:</i><br />
    Vorne:
    <input
      type="text"
      id="frontPos1"
      v-model.trim="frontPlayer[0]"
      :disabled="disabledForChange"
    />
    <input
      type="text"
      id="frontPos2"
      v-model.trim="frontPlayer[1]"
      :disabled="disabledForChange"
    /><br />
    Hinten:
    <input
      type="text"
      id="backPos1"
      v-model.trim="backPlayer[0]"
      :disabled="disabledForChange"
    />
    <input
      type="text"
      id="backPos2"
      v-model.trim="backPlayer[1]"
      :disabled="disabledForChange"
    />
    <br /><br />
    <i>Gewinner:</i><br />
    <input
      type="text"
      id="winner"
      v-model.trim="gameWinner"
      :disabled="disabledForChange"
    />
    <br /><br />
  </div>
</template>

<script>
export default {
  props: ['id', 'winner', 'gameNr', 'encounterID'],
  data() {
    return {
      gameWinner: this.winner,
      disabledForChange: true,
    };
  },
  computed: {
    frontPlayer() {
      let frontplayer = [];
      let front = this.$store.getters
        .getPlayerByGameId(this.id)
        .filter((p) => p.position === 'vorne');
      for (var i = 0; i < front.length; i++) {
        frontplayer.push(front[i].player);
      }
      return frontplayer;
    },
    backPlayer() {
      let backplayer = [];
      let back = this.$store.getters
        .getPlayerByGameId(this.id)
        .filter((p) => p.position === 'hinten');
      for (var i = 0; i < back.length; i++) {
        backplayer.push(back[i].player);
      }
      return backplayer;
    },
  },
  methods: {
    changeData() {
      this.disabledForChange = false;
    },
    saveGame(gameId) {
      console.log(gameId);
      const gameData = {
        encounterId: this.encounterID,
        id: gameId,
        winnerOutcome: this.gameWinner,
        front: this.frontPlayer,
        back: this.backPlayer,
      };

      this.$store.dispatch('saveGame', gameData);

      this.disabledForChange = true;
    },
  },
};
</script>