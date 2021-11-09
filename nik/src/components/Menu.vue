<template>
  <v-menu offset-x rounded v-if="this.bool == true">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item-title v-bind="attrs" v-on="on">My project</v-list-item-title>
    </template>
    <v-list>
      <v-list-item link v-for="(i, index) in item" :key="index">
        <v-list-item-title @click.prevent="$router.push(i.routing).catch(()=>{})">
          {{ i.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ["boolean"],
  data() {
    return {
      bool: this.boolean,
      item: [
        { title: "1", routing: "/My_project_1" },
        { title: "2" },
        { title: "3" },
        { title: "4" },
      ],
    };
  },
};
</script>

<style></style>
