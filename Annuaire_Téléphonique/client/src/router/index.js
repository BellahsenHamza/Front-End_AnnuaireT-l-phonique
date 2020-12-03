import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/contacts',
  },
  {
    path: '/contacts',
    name: 'ListContact',
    component: () => import('../views/ListContact.vue'),
  },
  {
    path: '/create/',
    name: 'CreateContact',
    component: () => import('../views/CreateContact.vue'),
  },
  {
    path: '/contact/:contactId',
    name: 'ContactEdition',
    props: (route) => ({ contactId: Number(route.params.contactId) }),
    component: () => import('../views/ContactEdition.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
