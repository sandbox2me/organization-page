import Vue from 'vue';
import VueRouter from 'vue-router';
import pageGuard from '../system/pageGuard';
import { routes } from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach(pageGuard);