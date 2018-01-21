import Vue from 'vue';

const state = {
    services: []
};

const getters = {
    services: state => {
        return state.services;
    }
};

const mutations = {
    setServices: (state, data) => {
        state.services = data;
    }
}

const actions = {
    getServices: ({ commit }) => {
        Vue.http.get('services.json').then(response => {
            commit('setServices', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}