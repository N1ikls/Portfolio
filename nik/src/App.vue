<template>
  <v-app>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">Nik</h1>
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
        <v-tab-item v-for="(item,index) in items" :key="index">
          <v-card color="basil" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>
<script>
// import navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    // navigation,
  },
  data: () => ({
    //
    tab: null,
    items: [
      { title: "Smile", path: "My_project_1" },
      { title: "Disfood", path: "My_project_2" },
      { title: "Html css adaptive", path: "My_project_3" },
    ],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
};
</script>
<style>
.basil--text {
  color: black !important;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
</style>
