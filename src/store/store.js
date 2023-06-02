import { createStore } from "vuex";

const store = createStore({
  state: {
    users: null,
  },
  mutations: {
    addUsers(state, user) {
      state.users = user;
    },
  },
});

export default store;
