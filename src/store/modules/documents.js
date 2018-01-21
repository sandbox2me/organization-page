import Vue from 'vue';

const state = {
    documentsList: []
};

const getters = {
    documentsList: state => {
        return state.documentsList;
    }
};

const mutations = {
    setDocumentsList: (state, data) => {
        state.documentsList = data;
    }
}

const actions = {
    getDocumentsList: ({ commit }) => {
        Vue.http.get('documentsList.json').then(response => {
            commit('setDocumentsList', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}