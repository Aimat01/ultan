<template>
  <div class="container" :class="background">
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  components:{
    Header
  }
};
</script>

<style scoped>
</style>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "TTHoves", Arial, Helvetica, sans-serif;
}

/* Theme */
.container{
  min-height: 100vh;
}
</style>