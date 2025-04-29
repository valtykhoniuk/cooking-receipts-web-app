import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Main from "../views/Main.vue";
import Receipts from "../views/Receipts.vue";
import AboutUs from "../views/AboutUs.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Main,
  },

  {
    path: "/receipts",
    component: Receipts,
  },

  {
    path: "/about-us",
    component: AboutUs,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
