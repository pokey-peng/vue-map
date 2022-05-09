import Vue from "vue";
import Vuex from "vuex";
import mapState from "./modules/mapState";
import mapView from "./modules/mapView";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    mapState,
    mapView,
  },
  strict: process.env.NODE_ENV !== "production",
});
