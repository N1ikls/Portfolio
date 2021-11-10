<template>
  <div>
    <navigation/>
    <disfood__head />
    <disfood__table />
  </div>
</template>

<script>
import Disfood__head from "../../components/My-projects/Disfood/Disfood__head.vue";
import Disfood__table from "../../components/My-projects/Disfood/Disfood__table.vue";
import Navigation from '../../components/Navigation.vue';
export default {
  name: 'Disfood__main',
  components: {
    Disfood__head,
    Disfood__table,
    Navigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap");
body {
 
  margin: 0;
  font-size: 15px;
  line-height: 20px;
}
.v-application--wrap {
  background: #e5e5e5;
}
</style>
