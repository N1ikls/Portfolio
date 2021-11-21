<template>
  <div class="header-burger">
    
    <Slide right v-if="this.burger">
      <ul class="burger__items">
        <v-img
          src="~@/assets/OJJO/images/logo.svg"
          class="burger__logo"
        ></v-img>
        <li class="burger__link" v-for="i in header__link" :key="i">{{ i }}</li>
        <div class="burger__border"></div>
        <div class="burger__icon pt-6 pb-6">
          <v-btn icon class="mr-8">
            <v-icon large color="white"> mdi-account </v-icon>
          </v-btn>
          <v-btn icon class="mr-2">
            <v-icon large color="white"> mdi-heart </v-icon>
          </v-btn>
        </div>
        <div class="burger__border"></div>
        <div class="burger__footer-icon pt-6 pb-6">
          <v-btn icon class="mr-4" v-for="i in footer_icon" :key="i">
            <v-icon large color="white"> {{ i }} </v-icon>
          </v-btn>
        </div>
      </ul>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide, // Register your component
  },
  mounted() {},
  props: ["burger"],
  data() {
    return {
      header__link: [
        "Контрагентам",
        "Дизайнерам",
        "Вакансии",
        "Вход/Регистрация",
      ],
      footer_icon: ["mdi-youtube", "mdi-facebook"],
    };
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style>

.burger__border {
  border-bottom: 1px solid #ffffff;
  width: 243px;
}
.burger__items {
  display: flex !important;
  padding: 30px 50px 50px 30px !important;
  flex-direction: column;
}
.burger__logo {
  align-items: center;
  margin-bottom: 50px;
  margin-right: 30px;
}
.bm-item-list {
  margin-left: 0% !important;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 140%;
  /* or 29px */

  color: #ffffff;
}
.burger__link:not(:last-child) {
  margin-bottom: 20px;
}
.bm-menu {
  padding-top: 0;
}
.bm-burger-bars.line-style:nth-child(2) {
  width: 20.83px;
}
.cross-style {
  top: 53.5px;
}
.bm-cross-button {
  height: 25px;
  width: 25px;
}
.bm-cross-button.cross-style {
  right: 26px !important;
}
.bm-cross {
  width: 27px !important;
  height: 4.17px !important;
  border-radius: 20px;
  background: #ffffff;
}
</style>
