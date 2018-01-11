const state = {
    organizationInfo: {}
};

const getters = {
    organizationInfo: state => {
        return state.organizationInfo;
    }
};

const mutations = {
    setOrganizationInfo: (state, data) => {
        state.organizationInfo = data;
    }
}

const actions = {
    setOrganizationInfo: ({ commit }, data) => {
        commit('setOrganizationInfo', data);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}