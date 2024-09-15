import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackPrefetch: true */ "../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackPrefetch: true */ "../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackPrefetch: true */ "../views/ContactView.vue"),
    },
    {
      path: "/404",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

export default router;
