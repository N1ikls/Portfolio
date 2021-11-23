<template>
  <v-app>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/My-projects/Ojjo/Header.vue'
import Main from '@/components/My-projects/Ojjo/Main.vue'
import Footer from '@/components/My-projects/Ojjo/Footer.vue'
export default {
  name:"Ojjo__main",
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>

</style>