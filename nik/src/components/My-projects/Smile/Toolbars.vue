<template>
  <navigation>
    <v-btn @click="Del">Clear LocalStorage</v-btn>
    <v-spacer />
    <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </navigation>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navigation from "../../Navigation.vue";
export default {
  components: { Navigation },
  name: "Toolbars",
  computed: {},
  methods: {
    ...mapActions(["DELETE"]),
    Del() {
      // очистим хранилище на кнопку
      this.DELETE();
    },
  },
  data: () => ({}),
};
</script>
