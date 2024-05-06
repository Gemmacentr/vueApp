const childrenRoutes = [
  {
    path: "",
    name: "home",
    component: () => import("./components/Home.vue"),
  },

  {
    path: "about",
    name: "about",
    component: () => import("./components/About.vue"),
  },
  {
    path: "notes",
    name: "notes",
    component: () => import("./components/Comment.vue"),
  },
];

export default childrenRoutes;
