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
        Vue.http.get('meetings.json').then(response => {
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