import Vue from 'vue';

const state = {
    managementContent: {}
};

const getters = {
    managementPageContent: state => {
        return state.managementContent;
    }
};

const mutations = {
    setManagementContent: (state, data) => {
        state.managementContent = data;
    }
}

const actions = {
    getManagementContent: ({ commit }) => {
        Vue.http.get('managementList.json').then(response => {
            commit('setManagementContent', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}