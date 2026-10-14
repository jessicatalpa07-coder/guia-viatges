import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinacionsView from '../views/DestinacionsView.vue'
import RegistreView from '../views/RegistreView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/destinacions', name: 'destinacions', component: DestinacionsView },
    { path: '/registre', name: 'registre', component: RegistreView },
    { path: '/sobre-nosaltres', name: 'about', component: AboutView },
  ],
})

export default router