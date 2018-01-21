import Vue from 'vue';

const state = {
    debtors: []
};

const getters = {
    debtors: state => {
        return state.debtors;
    }
};

const mutations = {
    setDebtors: (state, data) => {
        state.debtors = data;
    }
}

const actions = {
    getDebtors: ({ commit }) => {
        Vue.http.get('debtors.json').then(response => {
            commit('setDebtors', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}