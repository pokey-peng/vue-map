<template>
  <div>
    <v-app-bar app color="blue-grey darken-2" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>北约故事地图</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
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
          >
            <v-list-item-title>{{ key }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      items: {
        landing: "landing",
        MapScroll: "map-container-2",
        EchartsScroll: "index.html#EchartsScroll",
      },
      offset: true,
    };
  },
  methods: {
    scrollTo(value) {
      let element = document.getElementById(value);
      // 打印出对应页面与窗口的距离
      console.log(element.offsetTop);
      // 使用平滑属性，滑动到上方获取的距离
      // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
      // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped></style>
