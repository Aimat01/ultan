<template>
    <div class="container" :class = "background">
        <header class="header">
            <img :src="isDarkTheme ? menu_white.url : menu_black.url" class="menu" @click="toggleMenu">
            <div class="logo">
                <img :src="isDarkTheme ? light.url : dark.url" alt="Ultan Logo">
            </div>
            <div class="actions">
                <button @click="toggleTheme" class="buttonTheme" :class="buttonColor">{{ isDarkTheme ? 'Light' : 'Dark' }}</button>
                <select v-model="currentLanguage" @change="changeLanguage">
                <option value="kk">Қазақ</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
                </select>
            </div>
        </header>
    </div>
</template>

<script>
import Logo_dark from './assets/logo/dark.png';
import Logo_light from './assets/logo/light.png';
import Menu_black from './icons/menu-burger-black.svg';
import Menu_white from './icons/menu-burger-white.svg';
export default {
  data() {
    return {
      isDarkTheme: false,
      isChecked: false,
      isMenuOpen: false,
      currentLanguage: 'kk',
      background: 'dark',
      buttonColor: 'black',
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
    background(){
      return this.isDarkTheme? 'dark' : 'light';
    },
    buttonColor(){
        return this.isDarkTheme? 'white' : "black";
    }
  },
  methods: {
    toggleTheme() { 
      this.isDarkTheme = !this.isDarkTheme;
    },
    toggleMenu(){
      this.isMenuOpen = !this.isMenuOpen;  
    },
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
}

.logo{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo img {
  height: 40px;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button,
.actions select {
  margin-left: 15px;
}

.buttonTheme{
    border: none;
    background: none;
}

.black{
    color: black;
}
.white{
    color: white;
}

.menu{
    height: 20px;
}

.menu-slider {
  /* position: absolute;
  width: 300px;
  height: 100%;
  background-color: #35231a;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  display: none; */
}

.menu-slider ul li{
    list-style: none;
    color: white;
    font-size: 20px;
    padding: 20px 24px;
}

.menu-slider ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-slider li {
  margin-bottom: 10px;
}

.menu-slider a {
  color: #f5f0e0;
  text-decoration: none;
  font-size: 14px;
}

.menu-slider-open {
  transform: translateY(0);
  display: block;
}

</style>

<style>

/* Theme */
.dark{
  background-color: #35231a;
}
.light{
  background-color: #f5f0e0;
}
</style>