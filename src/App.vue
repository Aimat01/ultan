<template>
  <div class="container" :class="background">
    <Header @eventname="updateBack"></Header>
    <RouterView></RouterView> 
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import MainPage from "@/components/MainPage.vue"
export default {
  data(){
    return{
      background_color: '#f5f0e0' 
    }
  } , 
  methods:{
    updateBack(background){
      this.background_color = background ; 
    }
  },
  components:{
    Header , 
    MainPage
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
    font-family: "TTHoves", Arial, Helvetica, sans-serif ; 
    background-color: v-bind(background_color);
}
</style>