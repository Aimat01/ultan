import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

import { createMemoryHistory, createRouter } from 'vue-router'

import MainPage from './components/MainPage.vue'
import Shoes from './components/Shoes.vue'
import Masi from './components/Masi.vue'
import Kross from './components/Kross.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/shoes', component: Shoes },
  { path: '/masi', component: Masi }, 
  { path: '/kross', component: Kross }

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

    