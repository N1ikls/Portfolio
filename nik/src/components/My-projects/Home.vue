<template>
  <v-card class="card__home">
    <v-row>
      <v-col align="center">
        <v-img
          src="~@/assets/icon__nik.jpg"
          width="150"
          height="150"
          style="border-radius:50%"
        ></v-img>
        <h1 class="text-center m-2 h1">Hello,I'm Nikolay</h1>
        <h3 class="text-center m-2 h3">I am a beginner frontend developer</h3>
      </v-col>
    </v-row>
    <div class="pa-4">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark>
            <v-card-title class="text-h6">{{ item.title }}</v-card-title>
            <v-card-text class="text--white pa-4">
              <p>{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    items: [
      {
        title: "Начало пути",
        text: "На 2 курсе, когда нам только начали рассказывать про сферу web технологий, меня она очень заинтересовала и я начал углубляться в понимании frontend разработки",
        color: "black",
        icon: "mdi-star",
      },
      {
        title: "Первый проект",
        text: "Когда только начал изучать HTML, CSS, было сложно разобратся как работают блоки, стили, особенно было сложно разобрать flexbox, но я всеравно пытался в этом разобраться  и в итоге смог понять главный принцип flexbox",
        color: "purple darken-1",
        icon: "mdi-book-variant",
      },
      {
        title: "Почему стал изучать Vue",
        text: "Все началось с того, что на 3 курсе sportmaster набирал людей на курс frontend разработки, fronted vue + oracle, и я решил записаться на этот курс и попасть к ним в команду",
        color: "teal darken-2",
        icon: "mdi-airballoon",
        bool: true,
      },
      {
        title: "Что делаю сейчас",
        text: "На данный момент учусь на 4 курсе, и параллельно ищу работу своей мечты, где я полностью смогу проявить свой потенциал, а также достигнуть уровня Senior разработчика",
        color: "deep-purple darken-4",
        icon: "mdi-vuejs",
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
p {
  font-size: 18px;
  font-family: "Montserrat" sans-serif !important;
  font-weight: 500;
}
body {
  font-family: "Montserrat" sans-serif;
}
.h1 {
  color: rgb(58, 63, 68);

  font-weight: 400;
}
.h3 {
  color: rgb(58, 63, 68);
  font-weight: 400;
}
</style>
