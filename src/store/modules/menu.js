const state = {
    menuVisible: false
};

const getters = {
    menuVisible: state => {
        return state.menuVisible;
    }
};

const mutations = {
    toggleMenuVisible: state => {
        state.menuVisible =! state.menuVisible;
    }
}

const actions = {
    toggleMenuVisible: ({ commit }) => {
        commit('toggleMenuVisible');
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}