import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id: "123",
    },
  },
  getters: {
    userId: state => state.user.id,
  },
  mutations: {},
  actions: {},
  modules: {},
});
