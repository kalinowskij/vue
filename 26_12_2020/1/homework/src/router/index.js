import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from "@/views/Contacts";
import Projects from "@/views/Projects";
import Services from "@/views/Services";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
