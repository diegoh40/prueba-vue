import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/Home.vue';
import LoginView from '@/components/Login.vue';

const routes = [
  {
    path: '/loginView',
    component: LoginView
},
{
  path: '/homeView',
  component: HomeView
}
];

const router = createRouter({
history: createWebHistory(),
routes
});

export default router;
 
