<template>
  <div id="echarts-main">
    <div id="echart"></div>
    <v-btn
      id="switch-map"
      absolute
      left
      top
      @click="changeOption"
      color="#e06c5e"
      >切换</v-btn
    >
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { getInitBarOption, getMapOption } from "../../lib/OptionSource";
import axios from "axios";

let myChart = null;
export default {
  name: "EchartsBar",
  data: () => {
    return { mapView: false };
  },
  mounted() {
    this.initEcharts();
  },
  beforeDestroy() {
    if (myChart) {
      this.$echarts.dispose(myChart);
    }
  },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  methods: {
    async initEcharts() {
      const response = await axios.get("/GeoData/newEurope.geojson");
      this.$echarts.registerMap("NOTA", response.data);
      //this.getUser();
      myChart = this.$echarts.init(document.getElementById("echart"));
      let option = getInitBarOption();
      //let option = getMapOption();
      //console.log(option);
      myChart.setOption(option);

      option && myChart.setOption(option);
      window.addEventListener("resize", myChart.resize());
    },
    changeOption() {
      this.mapView = !this.mapView;
      let option = this.mapView ? getMapOption() : getInitBarOption();
      option && myChart.setOption(option, true);
    },
  },
};
</script>
<style scoped>
#echarts-main {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
#echart {
  width: 100%;
  height: 80%;
  margin-top: 5%;
}
#switch-map {
  /* right: 1rem;
  top: 2rem; */
  z-index: 2;
}
</style>
