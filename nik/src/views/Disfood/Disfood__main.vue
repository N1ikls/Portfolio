<template>
  <div>
    <disfoodhead/>
    <disfoodtable />
  </div>
</template>

<script>
import Disfoodhead from "../../components/My-projects/Disfood/Disfood__head.vue";
import Disfoodtable from "../../components/My-projects/Disfood/Disfood__table.vue";
export default {
  name: 'Disfood__main',
  components: {
    Disfoodhead,
    Disfoodtable,
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
