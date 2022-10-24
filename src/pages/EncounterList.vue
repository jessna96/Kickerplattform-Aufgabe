<template>
    <h1>Begegnungen</h1>
    <ul>
        <li v-for="(encounter, index) in encounters" :key="encounter.id"><router-link :to="encounterLink(encounter.id)">Begegnung {{index + 1}}</router-link></li>
    </ul>
    <button @click="createEncounter">Neue Begegnung</button>

</template>

<script>
export default {
    computed: {
        encounters() {
            return this.$store.getters['getEncounters'];
        },
    },
    methods: {
        encounterLink(encouterID) {
            return this.$route.path + '/' + encouterID;
        },
        createEncounter() {
            let encounterNr = this.$store.getters['nrEncounters'];
            let nextEncounterID = encounterNr + 1;

            this.$store.dispatch('addEncounter', nextEncounterID);

            this.$router.push('encounters/encounter_' + nextEncounterID);
        }
    }
}
</script>