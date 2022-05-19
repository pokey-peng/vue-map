import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView.vue";
import AppContent from "../views/AppContent.vue";
import Welcome from "@/components/Welcome.vue";
import MapScroll2 from "@/components/MapStoryFirst.vue";
import EchartsScroll from "@/components/EchartsStory.vue";

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
  { path: "/welcome", name: "welcomePage", component: Welcome },
  { path: "/mapScroll2", name: "mapScroll2", component: MapScroll2 },
  { path: "/echartsScroll", name: "echartsScroll", component: EchartsScroll },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
