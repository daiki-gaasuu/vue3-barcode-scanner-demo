import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("vue3-barcode-scanner-demo"),
  routes,
});
export default router;
