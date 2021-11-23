<template>
  <v-footer class="footer">
    <div class="footer__top">
      <div class="footer-top__title">
        Полезные советы и персональный предложения
      </div>
      <div class="footer-top__text">Эксклюзивная рассылка</div>
      <div class="footer-top__row">
        <ul class="footer-top__items">
          <div class="footer-top__column" v-for="i in link" :key="i">
            <v-btn icon>
              <v-icon color="white"> mdi-play </v-icon>
            </v-btn>
            <li class="footer-top__link">
              {{ i }}
            </li>
          </div>
        </ul>
        <div class="footer-top__input">
          <div class="footer-top__input__row">
            <div class="footer-top__input__content">
              <input type="email" placeholder="Ваш e-mail" />
              <div class="footer-top__input__button">
                <div class="footer-top__button">отправить</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <v-card>
        <v-container class="d-flex">
          <div class="footer-bottom__column">
            <div class="footer-bottom__label">Полезные ссылки</div>
            <nav class="footer-bottom__menu menu-footer-bottom">
              <ul class="menu-footer-bottom__list">
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link">Доставка</a>
                </li>
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link">Оплата </a>
                </li>
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link">Акции</a>
                </li>
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link"
                    >Политика конфиденциальности</a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer-bottom__column">
            <div class="footer-bottom__label">оплата</div>
            <nav class="footer-bottom__menu menu-footer-bottom">
              <ul class="menu-footer-bottom__list">
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper justo, nec, pellentesque.</a
                  >
                </li>
                <div class="menu-footer-bottom__link__row d-flex">
                  <v-btn icon v-for="i in icon" :key="i">
                    <v-icon>
                      {{ i }}
                    </v-icon>
                  </v-btn>
                </div>
              </ul>
            </nav>
          </div>
          <div class="footer-bottom__column">
            <div class="footer-bottom__label">оплата</div>
            <nav class="footer-bottom__menu menu-footer-bottom">
              <ul class="menu-footer-bottom__list">
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper justo, nec, pellentesque.</a
                  >
                </li>
                <div class="menu-footer-bottom__link__row d-flex">
                  <v-btn icon v-for="i in icon" :key="i">
                    <v-icon>
                      {{ i }}
                    </v-icon>
                  </v-btn>
                </div>
              </ul>
            </nav>
          </div>
          <div class="footer-bottom__column">
            <div class="footer-bottom__label">оплата</div>
            <nav class="footer-bottom__menu menu-footer-bottom">
              <ul class="menu-footer-bottom__list">
                <li class="menu-footer-bottom__item">
                  <a href="#" class="menu-footer-bottom__link"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ullamcorper justo, nec, pellentesque.</a
                  >
                </li>
                <div class="menu-footer-bottom__link__row d-flex">
                  <v-btn icon v-for="i in icon" :key="i">
                    <v-icon>
                      {{ i }}
                    </v-icon>
                  </v-btn>
                </div>
              </ul>
            </nav>
          </div>
        </v-container>
      </v-card>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "OJJO_footer",
  data() {
    return {
      link: [
        "Личный менеджер",
        "Доставка и оформление",
        "Индивидуальный дизайн",
      ],
      icon: ["mdi-play", "mdi-play"],
    };
  },
};
</script>

<style lang="scss">
.v-footer {
  padding: 0px !important;
}
@import url("~@/assets/OJJO/scss/footer.scss");
</style>
