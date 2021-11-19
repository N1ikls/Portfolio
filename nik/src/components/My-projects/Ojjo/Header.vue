<template>
  <header class="header">
    <div class="header__body">
      <v-container class="container">
        <ul class="header__items">
          <div class="header__row">
            <div class="start d-flex">
              <li class="header__link" v-for="i in header__link" :key="i">
                {{ i }}
              </li>
            </div>
            <div class="center ml-15">
              <img class="header__logo" src="@/assets/OJJO/images/logo.png" />
            </div>
            <div class="end d-flex">
              <v-btn icon class="mr-2">
                <v-icon color="white"> mdi-magnify </v-icon>
              </v-btn>
              <li class="header__link" v-for="i in header__link_next" :key="i">
                {{ i }}
              </li>
              <v-btn icon class="mr-2">
                <v-icon color="white"> mdi-account </v-icon>
              </v-btn>
              <v-btn icon class="mr-2">
                <v-icon color="white"> mdi-heart </v-icon>
              </v-btn>
            </div>
          </div>
        </ul>
      </v-container>
      <div class="header__content">
        <div class="header__title">Долго, дорого, богато!</div>
        <div class="header__catalog">каталог изделий</div>
      </div>
      <div class="header__bottom">
        <v-container>
          <div class="header__row">
            <div class="header__brands" v-for="i in (1,6)" :key="i">
              <img
                src="~@/assets/OJJO/images/brands.svg"
                class="header__img"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Ojjo__header",
  data() {
    return {
      header__link_next: ["Поиск", "Вход/Регистрация"],
      header__link: ["Контрагентам", "Дизайнерам", "Вакансии"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/OJJO/scss/header.scss");
</style>
