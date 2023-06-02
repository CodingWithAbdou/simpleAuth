import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Singup",
      name: "sing up",
      component: SingupView,
    },

    {
      path: "/Logein",
      name: "loge in",
      component: LoginView,
    },
  ],
});

export default router;
