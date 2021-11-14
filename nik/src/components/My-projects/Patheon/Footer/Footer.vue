<template>
  <v-footer class="footer">
    <div class="footer__top">
      <div class="container">
        <footercolumn></footercolumn>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container _bottom">
        <div class="bottom__row">
          <div class="bottom__text">© 2020 Все права защищены</div>
          <div class="bottom__author">Nik</div>        
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
import footercolumn from "./Footer__column.vue";
export default {
  data() {
    return {};
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
