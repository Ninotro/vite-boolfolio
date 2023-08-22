import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import ProjectDetails from './components/ProjectDetails.vue';
import Header from './components/Header.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: ProjectDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };

