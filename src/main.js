import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import scrollama from "scrollama";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import "./styles/main.css";

Vue.config.productionTip = false;
Vue.prototype.$scrollama = scrollama;
Vue.prototype.$mapboxgl = mapboxgl;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
