import { createStore } from "vuex";

interface State {
  user: {
    id: string;
    name: string;
    image: string;
  } | null;
}

const state: State = {
  user: null,
};

export default createStore({
  state,
  getters: {
    isLogged: state => !!state.user,
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
          name: "Núria",
          image: "/users/nuria.jpg",
        };
        commit("SET_USER", user);
        resolve(user);
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        const user = null;
        commit("SET_USER", user);
        resolve(user);
      });
    },
  },
  modules: {},
});
