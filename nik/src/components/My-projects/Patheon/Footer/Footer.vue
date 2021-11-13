<template>
  <v-footer class="footer">
    <div class="footer__top">
      <footercolumn></footercolumn>
    </div>
    <div class="footer__bottom"></div>
  </v-footer>
</template>

<script>
import footercolumn from "./Footer__column.vue";
export default {
  data() {
    return {
    }
  },
  components: {
    footercolumn,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Patheon_scss/styles.scss";
@import "@/assets/Patheon_scss/footer.scss";
</style>
