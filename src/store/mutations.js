export default {
    addEncounter(state, payload) {
        state.encounters.push(payload);
    },
    saveEncounter(state, payload) {
        let encounterIndex = payload.encounterToSave;

        state.encounters[encounterIndex].dateAndTime = payload.encounterDetails.dateAndTime;
        state.encounters[encounterIndex].location = payload.encounterDetails.location;
        state.encounters[encounterIndex].mode = payload.encounterDetails.mode;
        state.encounters[encounterIndex].membersTeamOne = payload.encounterDetails.membersTeamOne;
        state.encounters[encounterIndex].membersTeamTwo = payload.encounterDetails.membersTeamTwo;
    },
    addGame(state, payload) {
        state.games.push(payload);
    },
    saveGame(state, payload) {
        let gameIndex = payload.gameToSave;

        state.games[gameIndex].encounterId = payload.encounterId;
        state.games[gameIndex].winnerOutcome = payload.winnerOutcome;

        let ids = [];
        for (let k = payload.nrPos; k < payload.nrPos + 4; k++) {
            ids.push('pos_' + k);
        }

        state.playerPositions.push(
            {
                id: ids[0],
                gameId: payload.id,
                player: payload.front[0],
                position: 'vorne'
            },
            {
                id: ids[1],
                gameId: payload.id,
                player: payload.front[1],
                position: 'vorne'
            },
            {
                id: ids[2],
                gameId: payload.id,
                player: payload.back[0],
                position: 'hinten'
            },
            {
                id: ids[3],
                gameId: payload.id,
                player: payload.back[1],
                position: 'hinten'
            },
        )

        console.log(state.playerPositions);

    }
}