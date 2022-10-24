import { createStore } from 'vuex';

import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
    state() {
        return {
            encounters: [
                {
                    id: 'encounter_1',
                    dateAndTime: '24-10-2022 15:00',
                    mode: 'BestOf 3',
                    location: 'Würzburg',
                    membersTeamOne: ['Jessi', 'Jenny'],
                    membersTeamTwo: ['Nik', 'Sebo']
                },
                {
                    id: 'encounter_2',
                    dateAndTime: '20-10-2022 14:00',
                    mode: 'BestOf 5',
                    location: 'Berlin',
                    membersTeamOne: ['Jenny', 'Selina'],
                    membersTeamTwo: ['Marius', 'Nik']
                }
            ],
            games: [
                {
                    id: 'game_1',
                    encounterId: 'encounter_1',
                    winnerOutcome: 'Team 1',
                },
                {
                    id: 'game_2',
                    encounterId: 'encounter_1',
                    winnerOutcome: 'Team 2',
                },
                {
                    id: 'game_3',
                    encounterId: 'encounter_2',
                    winnerOutcome: 'Team 1',
                }
            ],
            playerPositions: [
                {
                    id: 'pos_1',
                    gameId: 'game_1',
                    player: 'Jessi',
                    position: 'hinten'
                },
                {
                    id: 'pos_2',
                    gameId: 'game_1',
                    player: 'Jenny',
                    position: 'vorne'
                },
                {
                    id: 'pos_3',
                    gameId: 'game_1',
                    player: 'Nik',
                    position: 'vorne'
                },
                {
                    id: 'pos_4',
                    gameId: 'game_1',
                    player: 'Sebo',
                    position: 'hinten'
                },
                {
                    id: 'pos_5',
                    gameId: 'game_2',
                    player: 'Jenny',
                    position: 'hinten'
                },
                {
                    id: 'pos_6',
                    gameId: 'game_2',
                    player: 'Jessi',
                    position: 'vorne'
                },
                {
                    id: 'pos_7',
                    gameId: 'game_2',
                    player: 'Sebo',
                    position: 'vorne'
                },
                {
                    id: 'pos_8',
                    gameId: 'game_2',
                    player: 'Nik',
                    position: 'hinten'
                },
            ]
        };
    },
    getters,
    actions,
    mutations,
});

export default store;