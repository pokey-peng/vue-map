<template>
  <section id="map-container-2" class="scrolly-overlay">
    <div class="scrolly-sticky">
      <MapSecond />
      <div id="slideContainer" v-show="currentPage === 1 ? true : false">
        <v-btn
          class="player-btn rounded-circle"
          elevation="3"
          absolute
          left
          color="brown darken-1"
          @click="pause"
          style="height: 64px"
        >
          <v-icon>{{ isPlay ? "mdi-pause" : "mdi-play" }}</v-icon>
        </v-btn>
        <vue-slider
          ref="slideM"
          v-model="value"
          :data="data"
          :marks="true"
          @change="getTime"
        >
          <template v-slot:tooltip="{ value, focus }">
            <div :class="['custom-tooltip', { focus }]">{{ value }}</div>
          </template>
        </vue-slider>
      </div>
    </div>

    <v-container class="scrolly-text py-0">
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-0" class="text-block"></div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-1" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-2" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-3" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-4" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-5" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
    </v-container>
    <v-container class="scrolly-text scrolly-text-side-bar py-0">
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-5-0" class="text-block"></div>
      </v-row>
      <v-row class="wrap justify-center align-center step">
        <div data-step="2-6" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起-侧栏</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-center step">
        <div data-step="2-7" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起-侧栏</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-center step">
        <div data-step="2-8" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">北约源起-侧栏</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import MapSecond from "./controller/MapSecond.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { mapGetters } from "vuex";
export default {
  name: "MapScroll2",
  data: () => {
    return {
      value: "2018-01-01",
      data: ["2018-01", "2018-02", "2018-03", "2018-04"],
      isPlay: false,
    };
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  components: {
    MapSecond,
    VueSlider,
  },
  mounted() {
    this.initScrollama();
  },
  methods: {
    initScrollama() {
      const ScrollamaMapSecond = this.$scrollama();
      ScrollamaMapSecond.setup({
        step: "#map-container-2 .scrolly-text .step",
        offset: 64 / window.innerHeight,
      })
        .onStepEnter(this.handleStepEnter)
        .onStepExit((response) => {
          //console.log(response);
        });
    },
    handleStepEnter(response) {
      //console.log(response);
      const currentStep = response.element.children[0].dataset["step"];
      //console.log(currentStep);
      // update view state
      this.$store.dispatch("mapView/updateStep", currentStep);

      // handle page state
      this.handlePageState(response.direction, currentStep);
    },
    handlePageState(direction, currentStep) {
      console.log(direction);
    },
    pause() {
      this.isPlay = !this.isPlay;
    },
    getTime() {},
  },
};
</script>

<style scoped>
.player-btn {
  /* left: 5px;
  bottom: 10px;
  top: 10px; */
  top: 17px;
}
.custom-tooltip {
  transform: translateY(5px);
}
.custom-tooltip {
  font-weight: bold;
  font-size: 0.5em;
}
#slideContainer {
  background-color: #757575;
  position: absolute;
  width: 80%;
  left: 10%;
  right: 10%;
  height: 100px;
  /* top: calc(100%-100px); */
  bottom: 10%;
  padding: 40px 40px 40px 120px;
  z-index: 99;
}
</style>
