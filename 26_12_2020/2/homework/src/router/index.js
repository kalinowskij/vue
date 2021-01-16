import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from "../views/Product";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
