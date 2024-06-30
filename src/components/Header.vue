<template>
  <div class="container" :class="background" @click.self="closeMenu">
    <header class="header" :class="borderBottom">
      <img :src="isDarkTheme ? menu_white.url : menu_black.url" class="menu" @click.stop="toggleMenu">
      <div class="logo">
        <img :src="isDarkTheme ? light.url : dark.url" alt="Ultan Logo">
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
        <ul>
            <li><button class="menu-slider-button">Аяқ киімдер <img class="menu-slider-right" src="./icons/angle-right.svg"></button></li>
            <li><button class="menu-slider-button">Аксессуарлар <img class="menu-slider-right" src="./icons/angle-right.svg"></button></li>
            <li><button class="menu-slider-button">Біз жайлы <img class="menu-slider-right" src="./icons/angle-right.svg"></button></li>
            <li><button class="menu-slider-button">Сату <img class="menu-slider-right" src="./icons/angle-right.svg"></button></li>
        </ul>
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
      currentLanguage: 'kk',
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
    },
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
    updateparent(variable) {
      this.isDarkTheme = variable;
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
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

.language-select {
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: inherit;
  color: inherit;
  cursor: pointer;
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
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
}

.menu-slider.active {
  left: 0;
}

.menu-slider ul {
  list-style-type: none;
  padding: 0;
}

.menu-slider ul li {
  padding: 10px;
  text-align: center;
}

.menu-slider-button{
    display: flex;
    padding: 8px 25px;
    font-size: 15px;
    color: white;
    background: none;
    border: none;
}
.menu-slider-right{
    height: 15px;
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
</style>

<style>
/* Theme */
.dark {
  background-color: #35231a;
  color: #f5f0e0;
}

.light {
  background-color: #f5f0e0;
  color: #35231a;
}
</style>