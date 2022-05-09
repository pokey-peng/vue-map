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
    <v-container class="scrolly-text py-0">
      <div class="step" data-step="1">
        <v-row
          class="wrap fill-height justify-center align-content-center"
          style="position: relative"
        >
          <div class="text-block text-center white--text">
            <p class="font-secondary">电子地图学</p>

            <h1 class="text-h1 font-secondary white--text my-lg-6">
              “冷战余孽” —— 北约编年史
            </h1>
            <address class="font-secondary mb-4">
              小组成员：王骁骁、何知远、边朵、蒋文芳、阎宇晨
            </address>

            <p class="body-1 font-weight-bold font-italic mt-lg-12 mb-0">
              <v-icon small color="grey lighten-4">mdi-allergy</v-icon>
              当出现此图标时，可以与地图进行交互
            </p>
          </div>
        </v-row>
      </div>

      <div class="step" data-step="2">
        <v-row class="wrap fill-height align-center" style="position: relative">
          <div class="text-block text-center">
            <p class="headline white--text mb-3 mt-3">
              北大西洋公约组织,简称北约组织或北约,第二次世界大战后,美国为了遏制苏联,
              维护其在欧洲的主导地位，联合西欧一些国家于1949年4月4日正式成立了北大西洋公约组织（North
              Atlantic Treaty Organization--NATO)（北约）
              。总部位于比利时布鲁塞尔。
              北约拥有大量核武器和常规部队，是西方的重要军事力量。这是二战后资本主义阵
              营军事上实现战略同盟的标志，是马歇尔计划在军事领域的延伸和发展，使美国得
              以控制欧洲联盟的防务体系，是美国世界超级大国领导地位的标志
            </p>
          </div>
        </v-row>
      </div>

      <div class="step" data-step="3">
        <v-row class="wrap fill-height align-center" style="position: relative">
          <div class="text-block text-center">
            <p class="headline white--text mb-5">
              截至2020年3月，北大西洋公约组织有30个成员国：比利时、冰岛、丹麦、德国、法国、荷兰、加拿大、卢森堡、美国、挪威、葡萄牙、土耳其、西班牙、希腊、意大利、英国、波兰、匈牙利、捷克、爱沙尼亚、拉脱维亚、立陶宛、斯洛伐克、斯洛文尼亚、罗马尼亚、保加利亚、阿尔巴尼亚、克罗地亚、黑山、北马其顿。总部位于比利时布鲁塞尔。
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
