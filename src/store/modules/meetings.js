import Vue from 'vue';

const state = {
    meetings: []
};

const getters = {
    meetings: state => {
        return state.meetings;
    }
};

const mutations = {
    setMeetings: (state, data) => {
        state.meetings = data;
    }
}

const actions = {
    getMeetings: ({ commit }) => {
        Vue.http.get('getMeetings').then(response => {
            commit('setMeetings', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}