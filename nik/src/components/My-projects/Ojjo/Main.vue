<template>
  <v-main>
    <v-card class="content__card">
      <div class="main__title">
        <div class="content__title">К мероприятиям</div>
        <div class="content__text">Настоящая красота здесь!</div>
      </div>
      <div class="main__items">
        <v-container>
          <ul class="content__items mb-8">
            <li class="content__link" v-for="i in link" :key="i">{{ i }}</li>
          </ul>
          <div class="card-images">
            <div class="card__row">
              <div class="images">
                <span class="title-images">Кольца</span>
                <img src="~@/assets/OJJO/images/1_card.svg" alt="" srcset="" />
              </div>
              <div class="images">
                <span class="title-images">серьги</span>
                <img src="~@/assets/OJJO/images/2_card.svg" alt="" srcset="" />
              </div>
              <div class="images">
                <span class="title-images">подвески</span>
                <img src="~@/assets/OJJO/images/3_card.svg" alt="" srcset="" />
              </div>
              <div class="images">
                <span class="title-images">запонки</span>
                <img src="~@/assets/OJJO/images/4_card.svg" alt="" srcset="" />
              </div>
              <div class="images">
                <span class="title-images">браслеты</span>
                <img src="~@/assets/OJJO/images/5_card.svg" alt="" srcset="" />
              </div>
              <div class="images">
                <span class="title-images">часы</span>
                <img src="~@/assets/OJJO/images/6_card.svg" alt="" srcset="" />
              </div>
            </div>
          </div>
        </v-container>
      </div>
    </v-card>
    <div class="main__shop">
      <div class="shop__column">
        <div class="shop__title">Не знаете, что выбрать?</div>
        <div class="shop__title _title">Посетите наши салоны в Москве</div>
        <div class="shop__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
          tortor vitae pellentesque egestas quam pulvinar. Pellentesque
          porttitor velit sit pellentesque. Suspendisse donec pretium id
          dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut
          ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi
          libero viverra ipsum.
        </div>
        <div class="shop__button">
          <div class="button">наши салоны</div>
        </div>
      </div>
    </div>
    <v-card class="card__article">
      <v-container>
        <div class="article__content">
          <div class="article__title">Полезные статьи</div>
          <div class="article__title article-title">
            Лучшие советы по подбору дорогих подарков
          </div>
          <div class="article__row">
            <div class="article__images">
              <span class="article__title-images"
                >Как выбрать часы для своей будущей жены</span
              >
              <img src="~@/assets/OJJO/images/article_1.svg" alt="" srcset="" />
            </div>
            <div class="article__images">
              <span class="article__title-images"
                >Запонки для мужа: 7 ключевых правил покупки аксессуара</span
              >
              <img src="~@/assets/OJJO/images/article_2.svg" alt="" srcset="" />
            </div>
            <div class="article__images">
              <span class="article__title-images"
                >Как выбрать обручальные кольца молодоженам</span
              >
              <img src="~@/assets/OJJO/images/article_3.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </v-container>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      link: ["Свадьба", "МУЖУ", "жене", "партнеру", "коллекции", "редкость"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/assets/OJJO/scss/main.scss");
</style>
