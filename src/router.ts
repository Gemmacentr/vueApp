import { createRouter, createWebHistory } from "vue-router";
import childrenRoutes from "./childrenRoutes.ts";
import MainRoute from "../src/components/MainRoute/Main.vue";

const mainRoute = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "main",
      component: () => MainRoute,
      children: [...childrenRoutes],
    },
  ],
});

export default mainRoute;
