import Vue from 'vue';

const state = {
    responsibility: []
};

const getters = {
    responsibility: state => {
        return state.responsibility;
    }
};

const mutations = {
    setResponsibility: (state, data) => {
        state.responsibility = data;
    }
}

const actions = {
    getResponsibility: ({ commit }) => {
        Vue.http.get('responsibility.json').then(response => {
            commit('setResponsibility', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}