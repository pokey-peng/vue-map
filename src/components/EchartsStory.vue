<template>
  <section id="EchartsContainer">
    <v-container fluid py-0 pr-0>
      <v-row class="scrolly-side">
        <v-col class="scrolly-text pa-0" cols="3">
          <v-row class="wrap justify-center align-start step">
            <div data-step="3-0" class="text-block"></div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="3-1" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">军事实力</h2>
                <p class="body-2">
                  北约各国的军事实力，无论是从军费开支的角度还是从军队人数的角度，美国一直是独占鳌头，也反映了其在北约中的绝对领导地位；同时，英法两国由于其也是联合国五大常任理事国的成员，其军费开支与军事实力分列2、3两位，在北约中的地位仅次于美国。北约挑起或者参与的每一场战争都与美英法三国脱不了关系，同时也说明了其他国家在北约国家中的配角地位。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="3-1" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">军事实力</h2>
                <p class="body-2">
                  从军费开支占GDP的比重看，美国也几乎一直是在北约国家中军费开支占比最高的国家，反映了其嗜战如命、侵略成性的本质。其他的战乱风险较高的国家（如靠近叙利亚的土耳其、地处东欧的罗马尼亚、保加利亚等）军事开支占比也较高。
                </p>
              </v-container>
            </div>
          </v-row>

          <v-row class="wrap justify-center align-start step">
            <div data-step="3-2" class="text-block"></div>
          </v-row>
        </v-col>
        <v-col class="scrolly-sticky pa-0" cols="9">
          <!-- <component :is="renderEchart"></component> -->
          <D3Chart />>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import EchartsBar from "./controller/EchartsBar";
import EchartsGeo from "./controller/EchartsGeo";
import D3Chart from "./controller/D3Chart";
import { mapGetters } from "vuex";
export default {
  name: "EchatsStory",
  components: {
    D3Chart,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
    renderEchart() {
      switch (this.step) {
        case "3-0":
          return "D3Chart";
        case "3-1":
          return "D3Chart";
        case "3-2":
          return "D3Chart";
        case "3-3":
          return "EchartsGeo";
        case "3-4":
          return "EchartsGeo";
        case "3-5":
          return "EchartsGeo";
        case "3-6":
          return "EchartsGeo";
        case "3-7":
          return "EchartsGeo";
        case "3-8":
          return "EchartsGeo";
        case "3-9":
          return "EchartsGeo";
        case "3-10":
          return "EchartsGeo";
        case "3-11":
          return "EchartsGeo";
        case "3-12":
          return "EchartsGeo";
        case "3-13":
          return "EchartsGeo";
        default:
          return "D3Chart";
      }
    },
  },
  mounted() {
    this.initScrollama();
  },
  methods: {
    initScrollama() {
      const ScrollamaMapSecond = this.$scrollama();
      ScrollamaMapSecond.setup({
        step: "#EchartsContainer .scrolly-text .step",
        offset: 64 / window.innerHeight,
      })
        .onStepEnter(this.handleStepEnter)
        .onStepExit((response) => {
          //console.log(response);
        });
    },
    handleStepEnter(response) {
      const currentStep = response.element.children[0].dataset["step"];
      this.$store.dispatch("mapView/updateStep", currentStep);
      //console.log("this enter " + currentStep);
    },
  },
};
</script>
<style scoped>
#EchartsContainer {
  position: relative;
  background-color: rgb(186, 200, 207);
}
</style>
