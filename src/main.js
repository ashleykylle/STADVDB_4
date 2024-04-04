import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'

import App from './App.vue'
import Home from '@/views/Home.vue'
import Material from './views/Material.vue'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import QuoteHistory from './views/QuoteHistory.vue'
import QuotaCreate from './views/QuotaCreate.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
     history: createWebHistory(),
     routes: [
          {path: '/', name: 'Home', component: Home},
          {path:  '/quota', name: 'QuoteHistory', component: QuoteHistory},
          {path: '/createQuota', name:'QuotaCreate', component: QuotaCreate},
          {path: '/material', name: 'Material', component: Material},
          {path: '/login', name: 'Login', component: Login},
          {path: '/register', name: 'Register', component: Register}
     ]
})
createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
