import Vue from 'vue';

const state = {
    startPageContent: {}
};

const getters = {
    startPageContent: state => {
        return state.startPageContent;
    }
};

const mutations = {
    setStartPageContent: (state, data) => {
        state.startPageContent = data;
    }
}

const actions = {
    getStartPageContent: ({ commit }) => {
        Vue.http.get('getStartPageContent').then(response => {
            commit('setStartPageContent', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}