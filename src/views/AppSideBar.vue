<template>
  <div class="sideBar">
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      id="sideBarContainer"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="item in items"
            :key="item.itemTitle"
            class="my-8"
            :href="item.itemId"
          >
            <v-card max-width="375" class="mx-auto">
              <v-img :src="item.imgSrc" height="200px" dark> </v-img>

              <v-list>
                <v-list-group :prepend-icon="item.itemAction" sub-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.itemTitle"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item v-for="child in item.items" :key="child.title">
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-ideogram-cjk-variant </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>{{ child.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { EventBus } from "@/lib/bus";
export default {
  name: "AppSideBar",
  data: () => {
    return {
      drawer: false,
      group: [0],
      items: [
        {
          imgSrc: process.env.BASE_URL + "icon/BarBack/welcome.png",
          itemAction: "mdi-page-first",
          itemId: "#welcome",
          itemTitle: "起始页",
          itemActive: false,
          items: [{ title: "简介" }, { title: "发展" }, { title: "成员" }],
        },
        {
          imgSrc: process.env.BASE_URL + "icon/BarBack/extendMap.png",
          itemAction: "mdi-mapbox",
          itemTitle: "东扩地图",
          itemId: "#map-container-1",
          itemActive: false,
          items: [
            { title: "源起" },
            { title: "创始" },
            { title: "第一次东扩" },
            { title: "第二次东扩" },
            { title: "第三次东扩" },
          ],
        },
        {
          imgSrc: process.env.BASE_URL + "icon/BarBack/MilitaryPic.png",
          itemAction: "mdi-chart-areaspline-variant",
          itemTitle: "军费军力",
          itemId: "#EchartsContainer",
          itemActive: false,
          items: [{ title: "军事投入" }, { title: "军力变化" }],
        },
        {
          imgSrc: process.env.BASE_URL + "icon/BarBack/globeFinall.png",
          itemAction: "mdi-earth",
          itemTitle: "军事行动",
          itemId: "#globalContainer",
          itemActive: false,
          items: [
            { title: "概述" },
            { title: "海湾战争" },
            { title: "科索沃战争" },
            { title: "阿富汗战争" },
            { title: "伊拉克战争" },
            { title: "利比亚战争" },
            { title: "叙利亚战争" },
          ],
        },
      ],
    };
  },
  watch: {
    group(newVal) {
      console.log("到位置:", newVal);
    },
  },
  mounted() {
    EventBus.$on("showSideBar", () => {
      this.drawer = true;
    });
  },
};
</script>
<style scoped>
.sideBar::-webkit-scrollbar {
  width: 0 !important;
}
.sideBar {
  position: fixed;
  top: 64px;
  height: calc(100vh - 64px);
  width: 28rem;
  z-index: 99;
  overflow: -moz-scrollbars-none;
}
#sideBarContainer::-webkit-scrollbar {
  width: 0 !important;
}
#sideBarContainer {
  width: 100% !important;
  overflow: -moz-scrollbars-none;
}
</style>
