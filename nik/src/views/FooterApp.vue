<template>
  <v-footer dark padless>
    <v-card class="indigo lighten-1 white--text text-center" flat tile>
      <v-card-text>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-4 white--text" icon v-bind="attrs" v-on="on">
              <v-icon size="24px"> mdi-discord </v-icon>
            </v-btn>
          </template>
          <span>Nik211#1096</span>
        </v-tooltip>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="Url(icon)"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
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
    icons: ["mdi-github", "mdi-account-circle"],
  }),
  methods: {
    Url(name) {
      if (name == "mdi-github") {
        return "https://github.com/N1ikls";
      }
      if (name == "mdi-account-circle") {
        return "https://vk.com/id505833989";
      }
    },
  },
};
</script>

<style>
.v-footer {
  display: block !important;
}
</style>
