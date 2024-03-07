import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Material from './views/Material.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import QuoteHistory from './views/QuoteHistory.vue'

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
     history: createWebHistory(),
     routes: [
          {path: '/', name: 'Home', component: Home},
          {path:  '/quota', name: 'QuoteHistory', component: QuoteHistory},
          {path: '/material', name: 'Material', component: Material}
     ]
})
createApp(App)
.use(router)
.use(vuetify)
.mount('#app')
