<template>
  <v-app>
    <Head></Head>
    <v-main>
      <router-view />
    </v-main>
    
  </v-app>
</template>
<script>
import Head from "../src/views/Header.vue";
export default {
  name: "App",
  components: {
    Head,
  },
  data: () => ({
    //
  }),
};
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap");
</style>
