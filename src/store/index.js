import Vue from "vue";
import Vuex from "vuex";
import mapState from "./modules/mapState";
import mapView from "./modules/mapView";
import warState from "./modules/warState";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    mapState,
    mapView,
    warState,
  },
  strict: process.env.NODE_ENV !== "production",
});
