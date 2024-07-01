<template>
  <div class="container" :class="background" @click.self="closeMenu">
    <header class="header" :class="borderBottom">
      <img :src="isDarkTheme ? menu_white.url : menu_black.url" class="menu" @click.stop="toggleMenu">
      <div class="logo">
        <img @click="this.$router.push('/')" :src="isDarkTheme ? light.url : dark.url" alt="Ultan Logo">
      </div>
      <div class="actions">
        <Toggle @eventname="updateparent"></Toggle>
        <select v-model="currentLanguage" @change="changeLanguage" class="language-select">
          <option value="kk">Қазақ</option>zzz
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
      <div class="menu-slider" :class="{ active: isMenuOpen }" @click.stop>
            <div class="menu-slider-top">
              <ul >
                <li @click="openShoes">
                  <span class="menu-slider-button">Аяқ киімдер</span>
                  <img class="menu-slider-right" src="./icons/angle-right.svg">
                </li>
                <li @click="openAccess">
                    <span class="menu-slider-button">Аксессуарлар</span>
                    <img class="menu-slider-right" src="./icons/angle-right.svg">
                </li>
                <li>
                    <a class="menu-slider-button">Біз жайлы</a>
                </li>
                <li>
                    <a class="menu-slider-button">Сату</a>
                </li>
              </ul>
              <ul >
                <div class="menu-option-button" @click="closeOption">
                  <img src="./icons/angle-left.svg" alt="">
                  Артқа
                </div>
                <li v-if="isShoes" >
                  <div class="main-option-shoes">
                    <RouterLink to="/shoes" class="main-option-shoe">тәпішкелер</RouterLink>
                    <RouterLink  to="/masi" class="main-option-shoe">мәсілер</RouterLink>
                    <RouterLink   to="/kross" class="main-option-shoe">кроссовкалар</RouterLink>
                  </div>
                </li>
                <li v-else-if="isAcces">
                  <div class="main-option-shoes">
                    <div class="main-option-shoe">белдіктер</div>
                    <div class="main-option-shoe">сөмкелер</div>
                    <div class="main-option-shoe">әмияндар</div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      <div class="overlay" v-if="isMenuOpen" @click="closeMenu"></div>
  </div>
</template>

<script>
import Logo_dark from './assets/logo/dark.png';
import Logo_light from './assets/logo/light.png';
import Menu_black from './icons/menu-burger-black.svg';
import Menu_white from './icons/menu-burger-white.svg';
import Toggle from './Toggle.vue';


export default {
  data() {
    return {
      isDarkTheme: false,
      isChecked: false,
      isMenuOpen: false,
      isShoes: false , 
      isAcces: false , 
      currentLanguage: 'kk',
      colorTheme: '#35231a' , 
      leftOfTop: "0px" , 
      dark: {
        url: Logo_dark
      },
      light: {
        url: Logo_light
      },
      menu_black: {
        url: Menu_black
      },
      menu_white: {
        url: Menu_white
      }
    };
  },
  computed: {
    background() {
      return this.isDarkTheme ? 'dark' : 'light';
    },
    buttonColor() {
      return this.isDarkTheme ? 'white' : 'black';
    },
    borderBottom() {
      return this.isDarkTheme ? 'white_bottom' : 'black_bottom';
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.leftOfTop = "0px" ; 
    },
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
    updateparent(variable) {
      this.isDarkTheme = variable;
      let background = '#f5f0e0' ; 
      this.colorTheme = '#35231a'
      if (this.isDarkTheme){
        background = '#35231a'
        this.colorTheme = '#f5f0e0' ; 
      }
      this.$emit('eventname' , background)
    } , 
    closeOption(){
      this.isAcces = false 
      this.isShoes = false 
      this.leftOfTop = "0"
    } , 
    openShoes(){
      this.isShoes = !this.isShoes ; 
      if (this.isShoes)
        this.leftOfTop = "-250px" ; 
      else 
        this.leftOfTop = "0" ; 
    } , 
    openAccess(){
      this.isAcces = !this.isAcces ; 
      if (this.isAcces)
        this.leftOfTop = "-250px" ; 
      else 
        this.leftOfTop = "0" ; 
    } , 
    changeArray(value){
      let array = null 
      for (let i = 0 ; i < this.items.length ; i++){
        if (this.items[i].name == value)
        array = this.items[i].arr 
      }
      console.log(array)
      localStorage.setItem('shoesData', JSON.stringify(array));
      this.$emit('data-updated');
    }
  },
  components: {
    Toggle
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  /* position: sticky; */
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo img {
  height: 40px;
  cursor: pointer;
}

.nav ul {
  display: flex;
  list-style: none;
}

.nav li {
  margin: 0 15px;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button,
.actions select {
  margin-left: 15px;
}

.buttonTheme {
  border: none;
  background: none;
  cursor: pointer;
}

.black {
  color: black;
}
.white {
  color: white;
}

.black_bottom {
  border-bottom: 1px black solid;
}
.white_bottom {
  border-bottom: 1px white solid;
}

.menu {
  height: 16px;
  cursor: pointer;
}

.menu-slider {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  transition: left 0.3s ease;
  padding-top: 60px;
  z-index: 1000;
  overflow: hidden;
}

.menu-slider.active {
  left: 0;
}

.menu-slider ul {
  width: 250px ; 
  list-style-type: none;
  padding: 0;
  background-color: #333;
}

.menu-slider ul li {
  padding: 10px 30px 10px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #333;
  text-align: center;
}

.menu-slider-button{
    display: flex;
    padding: 0px 25px;
    font-size: 15px;
    color: white;
    background: none;
    background-color: #333;
    border: none;
}
.menu-slider-right{
    height: 15px;
    background-color: #333;
}

.menu-option-button{
  display: flex ; 
  align-items: center;
  gap: 10px ; 
  margin-bottom: 20px ;
  border:0 ; 
  outline: none ; 
  background:  #333;
  color: white ; 
  padding: 0 10px ; 
  font-size: 16px ; 
}

.menu-option-button img{
  background:  #333;
  
}

.main-option-shoes{
  background:  #333;
  width: 100% ; 
  
}

.main-option-shoe{
  text-decoration: none;
  color: white ; 
  background:  #333;
  display: flex ; 
  justify-content: start;
  padding: 15px 10px; 
}

.menu-slider-top{
  display: flex ; 
  position: absolute ; 
  left: v-bind(leftOfTop) ; 
  transition: left 0.3s ease;
}

.language-select {
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
  color: v-bind(colorTheme);
}
.language-select:focus {
  outline: none;
}
.language-select option {
  background-color: inherit;
  color: inherit;
}

.language-select option:checked {
  background-color: rgba(0, 0, 0, 0.1);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<style>
/* Theme */
.dark {
  background-color: #35231a;
}
.light {
  background-color: #f5f0e0;
}
</style>