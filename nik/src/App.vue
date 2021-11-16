<template>
  <v-app>
    <myprojects />
    <v-main>
      <router-view />
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>
<script>
import myprojects from "./views/Myprojects/Myprojects.vue";
export default {
  name: "App",
  components: {
    myprojects,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");

</style>
