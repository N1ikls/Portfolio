<template>
  <div class="  _row">
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
          <li v-for="i in info" :key="i" class="content__info">
            {{ i }}
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__column">
      <div class="footer__label">Рaссылка</div>
      <div class="footer__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper
        viverra nunc cursus tortor lectus nunc nulla nibh.
      </div>
      <div class="footer__input">
        <div class="input__row">
          <input type="text" value="" placeholder="Ваша почта" />
          <div class="input__button">ПОДПИСАТЬСЯ</div>
        </div>
      </div>
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
.input__button {
  padding: 10px 10px;
  text-align: center;
  background: #0f0f0f;
  cursor: pointer;
}
.input__row {
  display: flex;
}
input[type="text"] {
  background: rgba(255, 255, 255, 0.4);
  padding: 10px 10px;
  color: #ffffff;
}
input::placeholder {
  color: #ffffff;
}
.footer__content {
  display: flex;
  margin-bottom: 30px;
}
.content__items {
  display: flex;
  flex-wrap: wrap;
}
.content__info {
  flex: 1 1 auto;
  background: #0f0f0f;
  text-align: center;
  margin: 5px;
  justify-content: center;
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
  padding: 10px 10px;
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
.footer__column:not(:last-child) {
  padding-right: 30px;
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
@media (max-width: 760px) {
  .footer__column {
    flex: 0 1 100%;
    padding: 20px;
  }
  ._row {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .footer__label {
    text-align: center;
  }
}
</style>
