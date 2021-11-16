<template>
  <v-app>
    <myprojects />
    <v-main>
      <v-card>
        <router-view />
      </v-card>
    </v-main>
    
    <footerapp />
  </v-app>
</template>
<script>
import myprojects from "./views/Myprojects/Myprojects.vue";
import footerapp from "./views/FooterApp.vue";
export default {
  name: "App",
  components: {
    myprojects,
    footerapp,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
</style>
