<template>
  <div class="wrapper">
    <Head></Head>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "@/components/My-projects/Patheon/Head.vue";
import Main from "@/components/My-projects/Patheon/Main.vue";
import Footer from "@/components/My-projects/Patheon/Footer.vue";
export default {
  name: "Patheon__main",
  components: {
    Head,
    Main,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
