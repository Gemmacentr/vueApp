const childrenRoutes = [
  {
    path: "",
    name: "home",
    component: () => import('./components/Home.vue'),
  },

  {
    path: "data",
    name: "data",
    component: () => import('./components/Data.vue'),
  },
  {
    path: "user",
    name: "user",
    component: () => import('./components/User.vue'),
  },
];

export default childrenRoutes;
