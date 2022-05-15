<template>
  <section id="EchartsContainer">
    <v-container fluid py-0 pr-0>
      <v-row class="scrolly-side">
        <v-col class="scrolly-text pa-0" cols="3">
          <v-row class="wrap justify-center align-start step">
            <div data-step="3-1" class="text-block">
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
            <div data-step="3-2" class="text-block">
              <v-container>
                <h2 class="h5 mb-lg-3">北约源起</h2>
                <p class="body-2">
                  我我我呜呜呜呜呜呜呜呜无无无无无我呃呃呃呃呃呃呃呃呃鹅鹅鹅鹅鹅鹅饿鹅鹅鹅饿
                  无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃
                </p>
              </v-container>
            </div>
          </v-row>
        </v-col>
        <v-col class="scrolly-sticky pa-0" cols="9">
          <EchartsBar />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import EchartsBar from "./controller/EchartsBar";
export default {
  name: "EchatsScroll",
  components: {
    EchartsBar,
  },
  data: () => {
    return {};
  },
};
</script>
<style scoped>
#EchartsContainer {
  position: relative;
}
</style>
