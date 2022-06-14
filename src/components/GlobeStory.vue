<template>
  <section id="globalContainer">
    <v-container fluid py-0 pr-0>
      <v-row class="scrolly-side">
        <v-col class="scrolly-text pa-0" cols="3">
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-0" class="text-block"></div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-1" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">北约参与战争</h2>
                <p class="body-2">
                  自冷战结束以来，北约参与过海湾战争、科索沃战争、阿富汗战争、伊拉克战争、利比亚战争、叙利亚战争
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-2" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">海湾战争</h2>
                <p class="body-2">
                  海湾战争是美国领导的北约军队于20世纪90年，以恢复科威特主权、独立与领土完整并恢复其政权为由而对伊拉克进行的一场战争，是冷战结束后第一场大规模武装冲突。在战争中，美军首次将大量高科技武器投入实战，展示了压倒性的制空、制电磁优势。通过海湾战争，美国进一步加强了与波斯湾地区国家的军事、政治合作，强化了美军在该地区的军事存在。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-3" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">科索沃战争</h2>
                <p class="body-2">
                  科索沃战争是一场由科索沃的民族矛盾直接引发、以美国为首的北约的推动下、发生在20世纪末的一场重要的高技术局部侵略战争。其持续时间从1999年3月24日至1999年6月10日。经此一战，南联盟解体，俄罗斯彻底被挤出了在东欧的原有势力圈。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-4" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">阿富汗战争</h2>
                <p class="body-2">
                  阿富汗战争是以美国为首的联军在2001年10月7日起对基地组织和塔利班的一场战争，该战争是美国对九一一事件的报复，同时也标志着反恐战争的开始。联军官方指这场战争的目的是逮捕本·拉登等基地组织成员并惩罚塔利班对恐怖分子支援。2014年12月29日，美国总统奥巴马正式宣布阿富汗战争结束。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-5" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">伊拉克战争</h2>
                <p class="body-2">
                  伊拉克战争，是以英美军队为主的联合部队在2003年3月20日对伊拉克发动的军事行动，美国以伊拉克藏有大规模杀伤性武器并暗中支持恐怖分子为由，绕开联合国安理会，单方面对伊拉克实施军事打击。到2010年8月美国战斗部队撤出伊拉克为止，历时7年多，美方最终没有找到大规模杀伤性武器，反而以萨达姆政权早已销毁的文件和人证为由，结束了战争。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-6" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">利比亚战争</h2>
                <p class="body-2">
                  利比亚战争，原本是利比亚国内不同部落和不同派别之间的争斗而引发的国内战争，后来由于北约国家的介入发展为以法国为首的北约军队，发起的代号为“奥德赛黎明”的对利比亚的侵略战争。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-7" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">叙利亚战争</h2>
                <p class="body-2">
                  2010年12月，阿拉伯之春爆发，在整个中东地区爆发了茉莉花革命，波及了整个阿拉伯世界。2011年3月，一名学生在街头涂鸦反政府内容被逮捕，引发了反对派们的大规模抗议，进而演变成了武装冲突。而北约势力趁机给反政府力量提供大量的资金和武器弹药，鼓励他们掀翻现任政府。至此，叙利亚内战全面爆发。
                </p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-8" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">所有战争</h2>
                <p class="body-2">点击查看</p>
              </v-container>
            </div>
          </v-row>
          <v-row class="wrap justify-center align-start step">
            <div data-step="4-9" class="text-block"></div>
          </v-row>
        </v-col>
        <v-col class="scrolly-sticky pa-0" cols="9">
          <EchartsGeo></EchartsGeo>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import EchartsGeo from "./controller/EchartsGeo.vue";
import { mapGetters } from "vuex";
export default {
  name: "GlobalStory",
  data: () => {
    return {};
  },
  components: { EchartsGeo },
  computed: {
    ...mapGetters("mapView", ["currentPage", "step"]),
  },
  mounted() {
    this.initScrollama();
  },
  methods: {
    initScrollama() {
      const ScrollamaMapSecond = this.$scrollama();
      ScrollamaMapSecond.setup({
        step: "#globalContainer .scrolly-text .step",
        offset: 64 / window.innerHeight,
      })
        .onStepEnter(this.handleStepEnter)
        .onStepExit((response) => {});
    },
    handleStepEnter(response) {
      const currentStep = response.element.children[0].dataset["step"];
      this.$store.dispatch("mapView/updateStep", currentStep);
    },
  },
};
</script>

<style scoped>
#globalContainer {
  position: relative;
  background-color: rgb(186, 200, 207);
}
</style>
