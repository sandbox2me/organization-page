import Vue from 'vue';

const state = {
    newsList: {}
};

const getters = {
    newsList: state => {
        return state.newsList;
    }
};

const mutations = {
    setNewsList: (state, data) => {
        state.newsList = data;
    }
}

const actions = {
    getNewsList: ({ commit }, limit) => {
        let params = { limit };

        Vue.http.get('newsList.json', { params } ).then(response => {
            commit('setNewsList', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}