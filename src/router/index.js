import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Customers from '../views/Customers.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/customers', name: 'Customers', component: Customers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
