export default {
    addEncounter(context, newID) {
        var currentdate = new Date().toDateString();

        const encounter = {
            id: 'encounter_' + newID,
            dateAndTime: currentdate,
            mode: '',
            membersTeamOne: [],
            membersTeamTwo: []
        }

        context.commit('addEncounter', encounter);
    },
    saveEncounter(context, encounterData) {
        let encounterToSave = context.getters['getEncounters'].findIndex(
            (encouter) => encouter.id === encounterData.id
        );

        const data = {
            encounterToSave: encounterToSave,
            encounterDetails: encounterData
        }

        context.commit('saveEncounter', data);
    },
    addGame(context, data) {
        const game = {
            id: 'game_' + data.newId,
            encounterId: data.encounterId,
            winnerOutcome: '',
        }

        context.commit('addGame', game);
    },
    saveGame(context, gameData) {
        let gameToSave = context.getters.getGames.findIndex(
            (game) => game.id === gameData.id
        );

        let nrPos = context.getters.nrPos;

        let data = {
            encounterId: gameData.encounterId,
            id: gameData.id,
            winnerOutcome: gameData.winnerOutcome,
            front: gameData.front,
            back: gameData.back,
            gameToSave: gameToSave,
            nrPos: nrPos
        }

        context.commit('saveGame', data);
    }
}