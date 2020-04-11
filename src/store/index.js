import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {}
  },
  mutations: {
    DELETE_CURRENT_USER(state) {
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
  },
  actions: {
    loadCurrentUser({commit}) {
      let user = JSON.parse(window.localStorage.currentUser);
      commit('SET_CURRENT_USER', user);
    },
    removeCurrentUser({commit}) {
      commit('DELETE_CURRENT_USER');
    },
    setCurrentUser({commit}, user) {
      commit('SET_CURRENT_USER', user);
    }
  },
  modules: {},
  getters: {
    
  }
});
