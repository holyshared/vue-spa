import { createApp } from 'vue';
import App from './App.vue';
import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Dynamic from './components/pages/Dynamic.vue';

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
  {
    path: '/@:username',
    component: Dynamic
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App).use(router).mount('#app');
