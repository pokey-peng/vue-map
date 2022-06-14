<template>
  <v-card height="400px" color="blue-grey darken-3" dark>
    <v-footer v-bind="localAttrs" :padless="padless" light>
      <v-card flat tile width="100%" class="blue-grey lighten-3 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="Black--text">
          {{ nowTime }} —
          <strong>电子地图学小组</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <v-container fluid>
      <v-row align="center" justify="center" class="ma-12">
        <v-col cols="3">
          <v-list color="blue-grey darken-1">
            <v-list-item v-for="item in items" :key="item.title">
              <v-list-item-icon>
                <v-icon :color="item.icon ? 'pink' : null">
                  {{ item.icon ? "mdi-account-key" : "mdi-account-multiple" }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <span>{{ item.stuNum }}</span>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="3"
          ><v-list color="blue-grey darken-1">
            <v-list-item v-for="item in items2" :key="item.title">
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon ? "mdi-account-key" : "mdi-account-multiple" }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item> </v-list
        ></v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  name: "AppFooter",
  data: () => {
    return {
      nowTime: moment().format("yyyy年MM月DD日"),
      icons: ["mdi-vuejs", "mdi-vuetify", "mdi-mapbox", "mdi-chart-areaspline"],
      items: [
        { icon: true, title: "王骁骁", stuNum: "10190447" },
        { title: "何知远", stuNum: "10190447" },
        { title: "边朵", stuNum: "10190447" },
      ],
      items2: [
        { title: "蒋文芳", stuNum: "10190447" },
        { title: "阎宇晨", stuNum: "10190447" },
        { title: "彭棋", stuNum: "10190447" },
      ],
      padless: true,
      variant: "default",
    };
  },
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
