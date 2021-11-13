<template>
  <div class="container _row">
    <div class="footer__column">
      <div class="footer__label">О магазине</div>
      <div class="footer__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
        viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet
        consectetur vel vitae aliquam dictum suspendisse. Lobortis eget
        consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
        porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit
        mi ultrices nisi, nunc.
      </div>
    </div>
    <div class="footer__column">
      <div class="footer__label">Категории</div>
      <div class="footer__content">
        <ul class="content__items">
          <li class="content__info" v-for="i in info" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
    <div class="footer__column">
      <div class="footer__label">Рaссылка</div>
      <div class="footer__content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer__column",
  data() {
    return {
      info: ["часы", "браслеты", "ремни", "ювелирные изделия", "запонки"],
      // column: {
      //   label: ["О магазине", "Категории", "Рaссылка"],
      //   content: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.",
      //   ],
      //   category: ["часы", "браслеты", "ремни", "ювелирные изделия", "запонки"],
      //   href: [
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.",
      //   ],
    };
  },
  mounted() {},
  computed: {
    // // getLabel() {
    // //   let a = this.column;
    // //   let mas = [];
    // //   for (let i in a) {
    // //     mas.push(a[i].label);
    // //   }
    // //   return mas;
    // },
  },
  methods: {},
};
</script>

<style scoped>
.footer__content {
  display: flex;
}
.content__items {
  display: flex;
}
.content__info {
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  /* light-gray */

  color: #d0d0d0;
  flex: 0 1 33.333%;
  padding: 10px;
  flex-wrap: wrap;
}
div {
  color: #ffffff;
}
._row {
  display: flex;
}
.footer__column {
  flex: 0 1 33.333%;
}

.footer__label {
  font-family: Playfair Display;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;

  /* white */

  color: #ffffff;
  margin-bottom: 40px;
}
</style>
