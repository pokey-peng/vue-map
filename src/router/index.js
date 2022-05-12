import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView.vue";
import AppContent from "../views/AppContent.vue";
import MapScroll from "@/components/MapScroll.vue";
import MapScroll2 from "@/components/MapScroll2.vue";
import EchartsScroll from "@/components/EchartsScroll.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mapContent",
    component: AppContent,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/mapScroll", name: "mapScroll", component: MapScroll },
  { path: "/mapScroll2", name: "mapScroll2", component: MapScroll2 },
  { path: "/echartsScroll", name: "echartsScroll", component: EchartsScroll },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
