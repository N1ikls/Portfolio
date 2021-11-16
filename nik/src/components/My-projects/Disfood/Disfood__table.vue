<template>
  <v-app app>
    <v-container fluid>
      <div class="main">
        <div class="main__text">Мои сделки</div>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Найти сделку по дате или номеру договора"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
         
            :headers="headers"
            :items="trade_mas"
            :search="search"
            item-key="N"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            class="elevation-1"
            @page-count="pageCount = $event"
            hide-default-footer
          >
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="getColor(item.status)"
                dark
                :text-color="ColorText(item.status)"
              >
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
          <div class="text-center pt-3">
            <v-col class="d-flex" cols="12" sm="2">
              <v-text-field
                :value="itemsPerPage"
                label="Количество строк"
                type="number"
                min="1"
                @input="itemsPerPage = parseInt($event, 10)"
              ></v-text-field>
            </v-col>
            <v-pagination
              v-model="page"
              :length="pageCount"
              :total-visible="total_visible"
              circle
              color="#71BF45"
            />
            <div class="pagination__info">
              {{ `${this.getSecond}-${this.getBegin}` }} из
              {{ trade_mas.length }}
            </div>
          </div>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      total_visible: 7,
      page: 1,
      pageCount: 6,
      itemsPerPage: 5,
      search: "",
      headers: [
        {
          text: "№",
          align: "start",
          sortable: true,
          value: "N",
        },
        {
          text: "Создана",
          value: "created",
        },
        {
          text: "Товар",
          value: "product",
        },
        { text: "Обьем", value: "volume" },
        { text: "Фасовка", value: "packaging" },
        { text: "Сумма", value: "summ" },
        { text: "Тип доставки", value: "delivery_type" },
        { text: "Контраген", value: "counterparty" },
        { text: "Доставка", value: "delivary" },
        { text: "Статус", value: "status" },
      ],
    };
  },
  name: "Disfood__table",
  mounted() {
    //do something after mounting vue instance
    this.GET_TRADE_FROM_API_DISFOOD(); //наш get json
    this.maxWidth();
  },
  computed: {
    ...mapGetters(["trade", "searchValue_disfood"]),
    filteredList() {
      // Поиск
      // фильтр поиска по категории
      let comp = this.search;
      if (this.search) {
        return this.trade_mas.filter(function (elem) {
          if (comp === "") return true;
          else return elem.N.toLowerCase().indexOf(comp.toLowerCase()) > -1;
        });
      } else {
        return this.trade_mas.N;
      }
    },
    trade_mas() {
      // массив json
      let mas = [];
      for (let i in this.trade.trade) {
        mas.push(this.trade.trade[i]);
      }
      return mas;
    },
    getBegin() {
      let mas = 0;
      if (this.page == 1) {
        return this.itemsPerPage;
      } else {
        for (let i = 0; i < this.page; i++) {
          mas += this.itemsPerPage;
        }
        if (this.itemsPerPage == NaN) {
          return 0;
        }
        if (this.page == Math.ceil(this.trade_mas.length / this.itemsPerPage)) {
          return this.trade_mas.length;
        }
        return mas;
      }
    },
    getSecond() {
      if (this.page == 1) {
        return 1;
      } else {
        if (this.page == Math.ceil(this.trade_mas.length / this.itemsPerPage)) {
          return this.getBegin - 1;
        }
        if (this.itemsPerPage == NaN) {
          return 0;
        }
        return this.getBegin - this.itemsPerPage + 1;
      }
    },
  },
  methods: {
    ...mapActions(["GET_TRADE_FROM_API_DISFOOD", "GET_SEARCH_VALUE_DISFOOD"]),
    searchV(value) {
      // для добавление в vuex данные поиска
      this.GET_SEARCH_VALUE_DISFOOD(value);
    },
    getColor(N) {
      // цвет статуса
      if (N == "Завершена") return "green";
      else if (N == "Оплата") return "#CAE7BA";
      else if (N == "") return "transparent";
      else if (N == "Не состоялась") return "#FDDFD8";
      else return " #FDDFD8";
    },
    ColorText(N) {
      // цвет текста статуса
      if (N == "Оплата") return "#22262A";
      else if (N == "Не состоялась") return "#22262A";
    },
    filterOnlyCapsText(value, search, item) {
      // фильтр сортировки
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toLowerCase().indexOf(search) !== -1
      );
    },
    maxWidth() {
      // адаптив для телефона если разрешение будет меньще 600 px то пагинация будет стрелочная
      setInterval(() => {
        let w = window.innerWidth;
        if (w < 600) {
          this.total_visible = 0;
        } else {
          this.total_visible = 7;
        }
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/Disfood_scss/table.scss";
</style>
