<template>
  <section id="map-container-1" class="scrolly-overlay">
    <div
      class="scrolly-sticky"
      :class="{ interactive: step === '2-7' || step === '2-8' }"
    >
      <MapFirst :yearLabel="switchYear" />
      <div id="slideContainer" v-show="currentPage === 8 ? true : false">
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
            <h2 class="h5 mb-lg-3">北约扩张之路</h2>
            <p class="body-2"></p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-2" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">创始成员国</h2>
            <p class="body-2">
              ·1949年4月4日，美国、加拿大、比利时、法国、卢森堡、荷兰、英国、丹麦、挪威、冰岛、葡萄牙和意大利在华盛顿签署了北大西洋公约，决定成立北大西洋公约组织。
              ·同年8月24日各国完成批准手续，该组织正式成立以针对苏联为首的东欧集团国成员。
              ·苏联解体以致华沙条约组织宣告解散后，北约成为一个地区性防卫协作组织。
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-3" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">冷战期间</h2>
            <p class="body-2">
              1952年-土耳其、希腊加入 1955年-西德加入 1982年-西班牙加入
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-4" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">冷战结束</h2>
            <p class="body-2">1989年-东德西德合并，东德自动加入北约</p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-5" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">第一次东扩</h2>
            <p class="body-2">
              1999年-科索沃战争中，波兰、捷克、匈牙利加入北约
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
            <h2 class="h5 mb-lg-3">第二次东扩</h2>
            <p class="body-2">
              2004年-北约开始了大规模东扩计划，立陶宛、爱沙尼亚、拉脱维亚、斯洛伐克、斯洛文尼亚、罗马尼亚、保加利亚等7国集体加入北约，自此北约共有26个成员国。
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-7" class="text-block">
          <v-container>
            <h2 class="h5 mb-lg-3">第三、四、五次东扩</h2>
            <p class="body-2">
              2009年-阿尔巴尼亚、克罗地亚加入北约 2017年-黑山加入北约
              2020年-北马其顿成为北约第30个成员国
            </p>
          </v-container>
        </div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-8" class="text-block"></div>
      </v-row>
      <v-row class="wrap justify-center align-start step">
        <div data-step="2-9" class="text-block"></div>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import MapFirst from "./controller/MapFirst.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { mapGetters } from "vuex";
import { EventBus } from "@/lib/bus";
export default {
  name: "MapStoryFirst",
  data: () => {
    return {
      value: "",
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
      switchLabel: [
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
      isPlay: false,
      timeId: null,
    };
  },
  watch: {},
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
    switchYear() {
      EventBus.$emit("hideSymbol");
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
    EventBus.$off();
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
      } else if (currentStep == "2-8") {
        this.$store.dispatch("mapView/updatePage", 8);
      }
    },
    pause() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.timeId = setTimeout(this.expansionAnimate, 2000);
        EventBus.$emit("showSymbol");
        EventBus.$emit("setFillImage");
      } else {
        //EventBus.$emit("hideFillImage");
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
      this.timeId = setTimeout(this.expansionAnimate, 2000);
    },
    changeYear() {
      let index = this.$refs.slide.getIndex();
      this.$store.dispatch("mapView/updateYear", this.data[index]);
    },
    switchStyle(time) {
      switch (time) {
        case "1949":
          return "background-color: #008c99";
        case "1952":
          return "background-color: #0087b8";
        case "1955":
          return "background-color: #1652a2";
        case "1982":
          return "background-color: #0087b8";
        case "1999":
          return "background-color: #6941aa";
        case "2004":
          return "background-color: #c15c83";
        case "2009":
          return "background-color: #d74242";
        case "2017":
          return "background-color: #d74242";
        case "2020":
          return "background-color: #d74242";
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
