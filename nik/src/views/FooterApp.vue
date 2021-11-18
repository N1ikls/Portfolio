<template>
  <v-footer dark padless>
    <v-card class=" lighten-1 white--text text-center" flat tile>
      <v-card-text>
        <v-tooltip bottom v-for="(icon, index) in icons" :key="index">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-4 white--text"
              icon
              v-bind="attrs"
              v-on="on"
              :href="Url(icon)"
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{Toolip(index) }}</span>
        </v-tooltip>
      </v-card-text>

      <v-card-text class="white--text pt-0"
        >Связь со мной - +7 918 277 39 34</v-card-text
      >

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Nik</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-discord ", "mdi-github", "mdi-account-circle"],
    toolip: ["Nik211#1096", "Github author", "Vk"],
  }),
  computed: {},
  methods: {
    Url(name) {
      if (name == "mdi-github") {
        return "https://github.com/N1ikls";
      }
      if (name == "mdi-account-circle") {
        return "https://vk.com/id505833989";
      }
    },
    Toolip(index) {
      let a = this.toolip;
      let mas = [];
      for (let i in a) {
        mas.push(a[i]);
      }
      return mas[index];
    },
  },
};
</script>

<style>
.v-footer {
  display: block !important;
}
</style>
