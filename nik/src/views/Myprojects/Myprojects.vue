<template>
  <div>
    <navigation />
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="text-h2 basil--text">My projects</h1>
      </v-card-title>
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab
          v-for="(item, index) in items"
          :key="index"
          @click.prevent="$router.push(item.path).catch(() => {})"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, index) in items" :key="index">
          <v-card color="basil" elevation="24" outlined flat>
            <v-card-text
              >{{ item.text }}
              <v-btn
                color="secondary"
                v-for="icon in icons"
                :key="icon"
                class="mx-2 white--text"
                icon
                :href="UrlCardText(item.title)"
              >
                <v-icon size="24px" v-if="item.icon != 'mdi-gitlab'">
                  {{ icon }}
                </v-icon>
                <v-icon size="24px" v-if="item.icon == 'mdi-gitlab'">
                  mdi-gitlab
                </v-icon>
              </v-btn>
              <v-btn
                v-if="item.bool == true"
                color="secondary"
                class="mx-2 white--text"
                icon
                href="https://www.figma.com/file/xHjAxd90oUnfpTQ5NZnSoz/Templates-%2317.-More-on-Figma.info?node-id=0%3A1"
              >
                <v-icon size="24px"> mdi-eye </v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import Navigation from "../Header.vue";
export default {
  components: {
    Navigation,
  },
  data: () => ({
    //
    tab: null,
    icons: ["mdi-github"],
    items: [
      {
        title: "Smile",
        path: "My_project_1",
        text: "ТЗ на вакансию frontend vue, репозиторий с самим заданием: ",
      },
      {
        title: "Disfood",
        path: "My_project_2",
        text: "Делал по макету figma на vue:",
      },
      {
        title: "Html css adaptive",
        path: "My_project_3",
        text: "Макет figma: ",
        bool: true,
      },
      {
        title: "Klerk tree",
        path: "My_project_4",
        text: "Sorry, но этот проект на github  не работает изза файла json (. ТЗ на вакансию frontend vue, репозиторий с самим заданием: ",
        icon: "mdi-gitlab",
      },
    ],
  }),
  mounted() {
    this.homerouting;
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set() {},
    },
    homerouting() {
      if (this.drawer == true) {
        return this.$router.push("/My_project_1").catch(() => {});
      }
    },
  },
  methods: {
    UrlCardText(title) {
      let smile = "https://github.com/N1ikls/vue_project_3";
      let disfood = "https://github.com/N1ikls/Disfood_2";

      if (title == "Smile") {
        return smile;
      }
      if (title == "Disfood") {
        return disfood;
      }

      if (title == "Klerk tree") {
        return "https://gitlab.com/Nikolay_play/vue_project_2/-/tree/master";
      }
    },
  },
};
</script>

<style>
h1 {
  font-family: "Montserrat", sans-serif;
}
.basil--text {
  color: grey !important;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
</style>
