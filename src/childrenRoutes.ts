const childrenRoutes = [
  {
    path: "",
    name: "home",
    component: () => import("./components/Home.vue"),
  },

  {
    path: "comment",
    name: "comment",
    component: () => import("./components/Comment.vue"),
  },
  {
    path: "about",
    name: "about",
    component: () => import("./components/About.vue"),
  },
];

export default childrenRoutes;
