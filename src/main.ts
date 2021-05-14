import { createApp } from 'vue';
import App from './App.vue';
import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount('#app');
