import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Data from "./components/Data.vue";
import User from "./components/User.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => Home,
    },

    {
      path: "/data",
      name: "data",
      component: () => Data,
    },
    {
      path: "/user",
      name: "user",
      component: () => User,
    },
  ],
});

export default router;
