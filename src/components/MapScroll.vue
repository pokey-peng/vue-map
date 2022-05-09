<template>
  <section id="landing" class="scrolly-overlay">
    <div class="scrolly-sticky">
      <div class="video-wrapper">
        <video
          preload="none"
          poster="@/assets/img/mapscroll.png"
          ref="mapVideo"
          autoplay
          loop
          muted
        >
          <source src="@/assets/video/video2.mp4" type="video/mp4" />
          Your browser doesn't support HTML5 video.
        </video>
      </div>
    </div>
    <v-container inner class="scrolly-text py-0">
      <div class="step" data-step="1">
        <v-row
          class="wrap fill-height justify-center align-content-center"
          style="position: relative"
        >
          <div class="text-block text-center white--text">
            <p class="font-secondary">People & Society / Asia-wide</p>

            <h1 class="display-4 font-secondary white--text my-3">
              “冷战余孽” <br />
              北约编年史
            </h1>

            <address class="font-secondary mb-2">by Peiying Loh</address>

            <time class="font-secondary">
              <strong class="mr-1">Published</strong> 11 November 2018
            </time>

            <p class="body-1 font-weight-bold font-italic mt-5">
              <v-icon small color="grey lighten-4">mdi-allergy</v-icon>
              Interactions become available in the map when you see the hand
              pointer icon. You will also be able to click, hold and drag to
              move the map around.
            </p>
          </div>

          <!-- mouse scroller icon -->
          <div class="mousey-scroller">
            <div class="mousey">
              <div class="mousey__wheel" />
            </div>
          </div>
        </v-row>
      </div>

      <div class="step" data-step="2">
        <v-row class="wrap fill-height align-center" style="position: relative">
          <div class="text-block text-center">
            <p class="headline white--text mb-3 mt-3">
              Back in September 2013, President Xi Jinping first introduced the
              Silk Road Economic Belt during his visit to Kazakhstan. Just a
              month later, he gave another speech to the Indonesian parliament
              and proposed the 21st Century Maritime Silk Road. Together, these
              two features are now dubbed the Belt, Road Initiative (or
              sometimes, One Belt, One Road).
            </p>
          </div>
        </v-row>
      </div>

      <div class="step" data-step="3">
        <v-row class="wrap fill-height align-center" style="position: relative">
          <div class="text-block text-center">
            <p class="headline white--text mb-5">
              Both initiatives aim at creating trade habitats across the globe
              that will cultivate multilateral economic cooperation and
              connectivity. In order to do so, infrastructure is key. To this,
              China is investing all across the globe mainly in transport and
              energy.
            </p>
          </div>
        </v-row>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "MapScroll",
  data: () => {
    return {};
  },
  mounted() {
    this.initScrollama();
  },
  methods: {
    initScrollama() {
      const scroller = this.$scrollama();
      scroller.setup({
        container: "#landing",
        graphic: "#landing .scrolly-sticky",
        step: "#landing .scrolly-text .step", // required
        offset: 64 / window.innerHeight, // after navbar height
      });
    },
  },
};
</script>

<style scoped>
#landing {
  font-size: 15px;
}
.step {
  height: calc(100vh - 64px);
}
.step:last-child {
  margin-bottom: 0;
}
.scrolly-text {
  z-index: 2;
  max-width: 45rem;
}
#landing .scrolly-sticky {
  /* position: -webkit-sticky;
  position: sticky; */
  /* top: 64px; */
  /* width: 100%; */
  height: 0;
  /* margin: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translateZ(0);
  background-color: #8a8a8a;
  z-index: 0; */
}
.scrolly-sticky .video-wrapper {
  position: relative;
}
.video-wrapper:before {
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
#landing .scrolly-text .step .text-block {
  background-color: transparent;
}
.headline {
  line-height: 1.5 !important;
}
</style>
