import Vue from 'vue';

const state = {
    houseInfo: {},
    underServiceHouses: [],
    stopedServiceHouses: []
};

const getters = {
    houseInfo: state => {
        return state.houseInfo;
    },
    underServiceHouses: state => {
        return state.underServiceHouses;
    },
    stopedServiceHouses: state => {
        return state.stopedServiceHouses;
    }
};

const mutations = {
    setHouseInfo: (state, data) => {
        state.houseInfo = data;
    },
    setUnderServiceHouses: (state, data) => {
        state.underServiceHouses = data;
    },
    setStopedServiceHouses: (state, data) => {
        state.stopedServiceHouses = data;
    }
}

const actions = {
    getHouseInfo: ({ commit }, hoiuseId) => {

        let params = { hoiuseId };

        Vue.http.get('houseInfo.json', { params } ).then(response => {
            commit('setHouseInfo', response.data);
        }, () => {
            commit('setHouseInfo', false);
        });
    },
    clearHouseInfo: ({ commit }) => {
        commit('setHouseInfo', {});
    },
    getUnderServiceHouses: ({ commit }) => {
        Vue.http.get('underServiceHouseList.json').then(response => {
            commit('setUnderServiceHouses', response.data);
        });
    },
    getStopedServiceHouses: ({ commit }) => {
        Vue.http.get('stopServiceHouseList.json').then(response => {
            commit('setStopedServiceHouses', response.data);
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}