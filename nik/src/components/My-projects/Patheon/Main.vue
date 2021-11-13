<template>
  <v-main class="main">
    <div class="body">
      <div class="body__column">
        <div class="content">
          <h3>PORTEN</h3>
          <h4>санкт-петербург</h4>
        </div>
        <div class="content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed
          justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis.
          Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi.
          Tortor nibh magna feugiat id nunc, dui nisl viverra.
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card__row">
        <div class="card__season">
          <div class="season__text">СЕЗОН 2020/21</div>
          <div class="season__border"></div>
          <div class="card__container">
            <div class="card__column" v-for="i in card" :key="i">
              <div class="column__content">
                <img
                  src="~@/assets/Patheon__images/rolex.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="column__name">Louis XVI ATHOS</div>
              <div class="column__cost">165 000 руб.</div>
            </div>
          </div>
        </div>
        <div class="card__catalog">
          <div class="catalog__title">Новая коллекция</div>
          <div class="season__border _border"></div>
          <div class="catalog__button">Каталог</div>
        </div>
      </div>
      <div class="card__row">
        <div class="card__image"></div>
        <div class="card__collection">
          <div class="collection__title _collection">коллекция 2018</div>
          <div class="collection__border _collection"></div>
          <div class="collection__text _collection">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
            ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
            nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque
            magna consectetur. Amet convallis quis gravida facilisis vulputate.
            Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit
            quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent
            viverra nulla nullam natoque volutpat curabitur auctor. Viverra
            viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam
            a aliquam egestas leo orci pharetra sed diam.
          </div>
          <div class="collection__button _collection">посмотреть коллекцию</div>
        </div>
      </div>
      <div class="border"></div>
      <div class="card__items">
        <div class="container">
          <div class="items__title">новые поступления</div>
          <div class="items__border"></div>
          <div class="items__container">
            <div class="items__column" v-for="i in 8" :key="i">
              <div class="column__content">
                <img
                  src="~@/assets/Patheon__images/rolex.svg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="column__name">Louis XVI ATHOS</div>
              <div class="column__cost">165 000 руб.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card__brands">
        <div class="container">
          <div class="brands__title">наши бренды</div>
          <div class="brands__border"></div>
          <div class="brands__row">
            <div class="brands__column" v-for="i in 4" :key="i">
              <img
                src="~@/assets/Patheon__images/brands.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      card: [1, 2, 3],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/Patheon_scss/main.scss";
@import "@/assets/Patheon_scss/styles.scss";
</style>
