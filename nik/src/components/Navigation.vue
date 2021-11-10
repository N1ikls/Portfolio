<template>
  <div class="header">
    <v-app-bar app dense outlined>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <Menu :boolean="item.bool"></Menu>
            <v-list-item-content>
              <v-list-item-title
                @click.prevent="$router.push(item.path).catch(() => {})"
                >{{ item.title }}</v-list-item-title
              >
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
        { title: "Home", icon: "mdi-view-dashboard", path: "/" },
        { title: "About", icon: "mdi-forum" },
        { title: "My projects", icon: "mdi-folder", bool: true },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>
<style scoped></style>
