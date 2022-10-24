import { createRouter, createWebHistory } from "vue-router";

import EncounterList from './pages/EncounterList.vue';
import EncounterDetails from './pages/EncounterDetails.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/encounters' },
        { path: '/encounters', component: EncounterList },
        { path: '/encounters/:id', component: EncounterDetails, props: true },
        { path: '/:notFound(.*)', component: NotFound },
    ]
});

export default router;