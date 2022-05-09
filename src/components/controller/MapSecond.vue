<template>
  <div id="map" class="map-container"></div>
</template>

<script>
let map;
export default {
  name: "MapSecond",
  data: () => {
    return {};
  },
  async mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      this.$mapboxgl.accessToken =
        "pk.eyJ1IjoicG9rZXljbiIsImEiOiJjbDJrNmVoOG8wMG82M2Rubm9qeGdxdTZuIn0.l37o005heOdClDI8RY__eg";
      // eslint-disable-next-line
      map = new this.$mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/navigation-night-v1",
        center: [32, 49],
        boxZoom: true,
        dragRotate: true,
        zoom: 3,
        scrollZoom: false,
      });
    },
  },
};
</script>

<style scoped></style>
