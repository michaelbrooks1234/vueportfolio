import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutMe from '../views/about-me/AboutMe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'aboutMe',
      component: AboutMe
    },
  ]
})

export default router;