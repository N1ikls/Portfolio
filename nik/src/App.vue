<template>
  <v-app>
    <!--костыль для кнопок home and My projects-->
    <myprojects v-if="drawer" />
    <navigation v-if="!drawer" />
    <!------------>
    <v-main>
      <router-view />
    </v-main>
    <footerapp />
  </v-app>
</template>
<script>
import myprojects from "./views/Myprojects/Myprojects.vue";
import footerapp from "./views/FooterApp.vue";
import Navigation from "./views/Header.vue";
export default {
  name: "App",
  components: {
    myprojects,
    footerapp,
    Navigation,
  },
  data() {
    return {};
  },
  mounted() {
   
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set() {},
    },
  },
  methods: {
    
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
</style>
