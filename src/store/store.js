import { createStore } from "vuex";

import { auth } from "@/firebase/firebse";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const store = createStore({
  state: {
    users: null,
  },

  mutations: {
    setUser(state, payload) {
      state.users = payload;
      console.log("state is changed ,user : ", payload);
    },
  },

  actions: {
    async singUp(context, { email, password }) {
      console.log("Sing Up .....");

      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response) context.commit("setUser", response.user);
      else throw new Error("try again");
    },

    async login(context, { email, password }) {
      console.log("Loge In  .....");

      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response) context.commit("setUser", response.user);
      else throw new Error("try again");
    },

    async logout(context) {
      console.log("Loge Out  .....");

      const response = await signOut(auth);

      context.commit("setUser", null);
    },
  },
});

export default store;
