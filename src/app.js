import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import yaMaps from 'vue-yandex-maps';

import App from './App.vue';

import { router } from './router/router';
import { store } from './store/store';

import directives from './system/directives.js';
import filters from './system/filters.js';

Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(yaMaps);

Vue.config.productionTip = false;
Vue.http.options.root = 'api/';

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});