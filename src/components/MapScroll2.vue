<template>
  <section id="map-container-2" class="scrolly-overlay">
    <div class="scrolly-sticky">
      <MapSecond />
    </div>
    <v-container class="scrolly-text py-0">
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
    <!-- <v-container class="scrolly-text py-0">
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
    </v-container> -->
  </section>
</template>
<script>
import MapSecond from "./controller/MapSecond.vue";
import { mapGetters } from "vuex";
export default {
  name: "MapScroll2",
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  components: {
    MapSecond,
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
  },
};
</script>

<style scoped></style>
