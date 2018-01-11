import Vue from 'vue';

const state = {
    eventsList: {}
};

const getters = {
    eventsList: state => {
        return state.eventsList;
    }
};

const mutations = {
    setEventsList: (state, data) => {
        state.eventsList = data;
    }
}

const actions = {
    getEventsList: ({ commit }) => {
        Vue.http.get('getEventsList').then(response => {
            commit('setEventsList', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}