<template>
  <div>
    <v-app-bar app color="blue-grey darken-2" dark>
      <v-app-bar-nav-icon @click="setDrawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-toolbar-title>北约故事地图</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <!-- <v-btn icon
        ><v-icon size="24px">
          {{ icon[0] }}
        </v-icon></v-btn
      >-->
      <!-- <v-menu
        left
        bottom
        :offset-y="offset"
        rounded="rounded-lg"
        transition="slide-y-transition"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            style="margin-right: 12px; margin-left: 12px"
          >
            导航
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(value, key) in items"
            :key="key"
            @click="scrollTo(value)"
            class="NavList"
          >
            <v-list-item-title>{{ key }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>
<script>
import { EventBus } from "@/lib/bus";
export default {
  name: "NavigationBar",
  data() {
    return {
      icon: ["mdi-github"],
      items: {
        起始页: "welcome",
        东扩地图: "map-container-1",
        军费军力: "EchartsContainer",
        三维地球: "globalContainer",
      },
      offset: true,
    };
  },
  methods: {
    scrollTo(value) {
      let element = document.getElementById(value);
      // 打印出对应页面与窗口的距离
      //console.log(element.offsetTop);
      // 使用平滑属性，滑动到上方获取的距离

      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    },
    setDrawer() {
      EventBus.$emit("showSideBar");
    },
  },
};
</script>
<style scoped>
.NavList {
  z-index: 99;
}
</style>
