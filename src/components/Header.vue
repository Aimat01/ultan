<template>
    <div class="container" :class="background" @click.self="closeMenu">
      <header class="header" :class="borderBottom">
        <img :src="isDarkTheme ? menu_white.url : menu_black.url" class="menu" @click.stop="toggleMenu">
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
        <div class="menu-slider" :class="{ active: isMenuOpen }" @click.stop>
            <ul>
            <li><a href="#sales">Аяқ киімдер</a></li>
            <li><a href="#bags">Аксессуарлар</a></li>
            <li><a href="#shoes"></a></li>
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

.menu-slider ul li a {
  color: white;
  text-decoration: none;
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
