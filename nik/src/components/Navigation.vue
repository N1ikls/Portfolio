<template>
  <div class="header">
    <v-app-bar dense outlined>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/icon__nik.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-h6"
              >Nikolay Kiforenko
            </v-list-item-title>
            <v-list-item-subtitle> sau3000@mail.ru </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list dense rounded>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click.prevent="$router.push(item.path).catch(() => {})"
            @click="EditHome"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click="toggleDrawer">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> My projects </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </div>
</template>

<script>
import Menu from "./My-projects/Menu.vue";
export default {
  name: "Navigation",
  components: {
    Menu,
  },
  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Home",
          icon: "mdi-view-dashboard",
          path: "/",
        },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  mounted() {},

  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    //----Костыль---//
    EditHome() {
      this.$store.commit("EditHome");
    },
    //-------------//
  },
  computed: {
    nav: {
      get() {
        return this.$store.state.drawer;
      },
      set() {},
    },
  },
};
</script>
<style scoped></style>
