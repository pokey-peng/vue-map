<template>
  <section id="map-container-1" class="scrolly-overlay">
    <div class="scrolly-sticky" :class="{ interactive: step === '2-7' }">
      <MapFirst :yearLabel="switchYear" />
      <div id="slideContainer" v-show="currentPage === 7 ? true : false">
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
          ref="slide"
          v-model="value"
          :data="data"
          :marks="true"
          @change="changeYear"
        >
          <template v-slot:tooltip="{ value, focus }">
            <div :class="['custom-tooltip', { focus }]">{{ value }}</div>
          </template>
        </vue-slider>
      </div>
      <div class="legendCard" v-show="currentPage === 7 ? true : false">
        <v-card flat light class="legendText">
          <v-card-text>
            <v-row wrap>
              <div class="flex xs12">
                <h4 class="body-2 font-weight-bold">扩张之路</h4>
                <v-switch
                  v-for="time in data"
                  :key="time"
                  v-model="switchLabel"
                  color="primary"
                  :value="time"
                >
                  <template v-slot:label>
                    <div class="legend-block" :style="switchStyle(time)"></div>
                    {{ time }}
                  </template>
                </v-switch>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
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
            <h2 class="h5 mb-lg-3">创始成员国</h2>
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
            <h2 class="h5 mb-lg-3">第一次和第二次东扩</h2>
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
            <h2 class="h5 mb-lg-3">第三次东扩</h2>
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
            <h2 class="h5 mb-lg-3">第四次东扩</h2>
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
        <div data-step="2-6-0" class="text-block"></div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-6" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">第五次东扩</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-7" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">最后三次</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-8" class="text-block">
          <!-- <v-container>
            <h2 class="h5 mb-lg-3">移动</h2>
            <p class="body-2">
              我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
              无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
            </p>
          </v-container> -->
        </div>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import MapFirst from "./controller/MapFirst.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { mapGetters } from "vuex";
export default {
  name: "MapStoryFirst",
  data: () => {
    return {
      value: "1949",
      data: [
        "1949",
        "1952",
        "1955",
        "1982",
        "1999",
        "2004",
        "2009",
        "2017",
        "2020",
      ],
      switchLabel: [],
      isPlay: false,
      timeId: null,
    };
  },
  watch: {},
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
    switchYear() {
      return this.switchLabel.map((item) => {
        return Number(item);
      });
    },
  },
  components: {
    MapFirst,
    VueSlider,
  },
  mounted() {
    this.initScrollama();
  },
  beforeDestroy() {
    if (this.timeId) {
      clearTimeout(this.timeId);
    }
  },
  methods: {
    initScrollama() {
      const ScrollamaMapSecond = this.$scrollama();
      ScrollamaMapSecond.setup({
        step: "#map-container-1 .scrolly-text .step",
        offset: 64 / window.innerHeight,
      })
        .onStepEnter(this.handleStepEnter)
        .onStepExit(this.handleStepExit);
    },
    handleStepEnter(response) {
      //console.log(response);
      const currentStep = response.element.children[0].dataset["step"];
      //console.log(currentStep);
      // update view state
      if (response.direction === "up" && currentStep == "2-0") {
        this.$store.dispatch("mapView/updateStep", currentStep);
      } else {
        this.$store.dispatch("mapView/updateStep", currentStep);
      }
      // handle page state
      this.handlePageState(response.direction, currentStep);
    },
    handleStepExit(response) {
      const currentStep = response.element.children[0].dataset["step"];
      if (currentStep == "2-7") {
        this.$store.dispatch("mapView/updatePage", 1);
      }
    },
    handlePageState(direction, currentStep) {
      if (currentStep == "2-7") {
        this.$store.dispatch("mapView/updatePage", 7);
      }
    },
    pause() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.timeId = setTimeout(this.expansionAnimate, 1000);
      } else {
        clearTimeout(this.timeId);
      }
    },
    expansionAnimate() {
      let index = this.$refs.slide.getIndex();
      //console.log(index);
      index = index === this.data.length - 1 ? 0 : index + 1;
      this.$refs.slide.setValue(this.data[index]);
      //this.filterBy(this.data[index], "single");
      this.$store.dispatch("mapView/updateYear", this.data[index]);
      this.timeId = setTimeout(this.expansionAnimate, 1000);
    },
    changeYear() {
      let index = this.$refs.slide.getIndex();
      this.$store.dispatch("mapView/updateYear", this.data[index]);
    },
    switchStyle(time) {
      switch (time) {
        case "1949":
          return "background-color: rgba(22,44,77,0.8)";
        default:
          return "background-color: rgba(221,76,90,0.8)";
      }
    },
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
  background-color: rgba(117, 117, 117, 0.6);
  position: absolute;
  width: 80%;
  left: 10%;
  right: 10%;
  height: 100px;
  bottom: 10%;
  padding: 40px 40px 40px 120px;
  z-index: 2;
  border-radius: 2rem;
}

.legendCard {
  position: absolute;
  left: 1rem;
  top: 1rem;
  height: 20%;
  width: 10%;
  z-index: 3;
}
</style>
