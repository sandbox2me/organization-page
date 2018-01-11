import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import menu from './modules/menu';
import news from './modules/news';
import events from './modules/events';
import houses from './modules/houses';
import usefull from './modules/usefull';
import debtors from './modules/debtors';
import meetings from './modules/meetings';
import services from './modules/services';
import startPage from './modules/startPage';
import documents from './modules/documents';
import management from './modules/management';
import responsibility from './modules/responsibility';
import organizationInfo from './modules/organizationInfo';

export const store = new Vuex.Store({
    modules: {
        menu,
        news,
        events,
        houses,
        usefull,
        debtors,
        meetings,
        services,
        documents,
        startPage,
        management,
        responsibility,
        organizationInfo
    }
});