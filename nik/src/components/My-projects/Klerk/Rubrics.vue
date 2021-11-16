<template>
  <div>
    <h1 class="text-center basil--text">Общее количество: {{ TotalCount }}</h1>
    <v-container fluid>
      <div class="items">
        <v-row>
          <v-col class="pa-6" cols="6">
            <v-treeview
              hoverable
              v-model="selection"
              :items="rubrics"
              :item-text="title"
              selectable
              rounded
              return-object
              dense
            />
          </v-col>
          <v-col class="pa-6" cols="6">
            <template v-if="!selection.length"> No nodes selected. </template>
            <template v-else>
              <div v-for="rubric in selection" :key="rubric.id">
                <a :href="'https://www.klerk.ru' + rubric.url">
                  Количество {{ rubric.count }}</a
                >
              </div>
            </template>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Rubrics",
  data: () => ({
    selection: [],
    title: "title",
  }),

  computed: {
    ...mapGetters(["rubrics"]),
    TotalCount() {
      let result = [];
      if (this.selection.length) {
        for (let item of this.selection) {
          result.push(item.count);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
    GET_URL() {
      let result = [];
      for (let url of this.selection) {
        result.push(url.url);
      }
      return result;
    },
  },

  mounted() {
    //do something after mounting vue instance
    this.GET_RUBRICS_FROM_API();
  },

  methods: {
    ...mapActions(["GET_RUBRICS_FROM_API"]),
  },
};
</script>
<style scoped>
.tree {
  padding: 40px;
  padding-bottom: 10px;
}
a {
  text-decoration: none;
}
.items {
  font-size: 20px;
  width: 0 auto;
  box-shadow: 0 0 8px 0;
}
.count {
  padding-right: 400px;
  display: block;
  white-space: nowrap;
}
div {
  padding: 20px;
  padding-left: 15px;
  border: 5px;
}
.url {
  display: block;
  padding-bottom: 20px;
}
</style>
