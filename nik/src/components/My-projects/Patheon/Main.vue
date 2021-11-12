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
          <img src="~@/assets/Patheon__images/catalog.svg" alt="" srcset="" />
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
