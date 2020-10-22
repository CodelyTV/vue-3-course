import { createStore } from "vuex";

interface State {
  user: {
    id: string;
  } | null;
}

const state: State = {
  user: null,
};

export default createStore({
  state,
  getters: {
    userId: state => state.user?.id,
    isLogged: state => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }) {
      return new Promise(resolve => {
        const user = {
          id: "123",
        };
        commit("SET_USER", user);
        resolve(user);
      });
    },
  },
  modules: {},
});
