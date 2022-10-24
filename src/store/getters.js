export default {
    getEncounters(state) {
        return state.encounters;
    },
    nrEncounters(state) {
        return state.encounters.length;
    },
    nrGames(state) {
        return state.games.length;
    },
    nrPos(state) {
        return state.playerPositions.length;
    },
    getGames(state) {
        return state.games;
    },
    getGamesByEncounterId: (state) => (id) => {
        return state.games.filter(e => e.encounterId === id)
    },
    getGameByGameId: (state) => (id) => {
        return state.games.filter(e => e.id === id)
    },
    getPlayerByGameId: (state) => (id) => {
        return state.playerPositions.filter(g => g.gameId === id)
    }
};
