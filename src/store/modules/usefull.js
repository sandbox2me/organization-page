import Vue from 'vue';

const state = {
    usefull: []
};

const getters = {
    usefull: state => {
        return state.usefull;
    }
};

const mutations = {
    setUsefull: (state, data) => {
        state.usefull = data;
    }
}

const actions = {
    getUsefull: ({ commit }) => {
        Vue.http.get('usefull.json').then(response => {
            commit('setUsefull', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
