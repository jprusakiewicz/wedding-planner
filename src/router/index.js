import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Weddings from '../views/Weddings.vue';
import WeddingDetails from '../components/WeddingDetails.vue';
import AddWedding from '../components/AddWedding.vue';
import CurrentWedding from '../components/CurrentWedding.vue';
import WeddingSurvey from '../components/WeddingSurvey.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/weddings',
    name: 'Weddings',
    component: Weddings
  },
  {
    path: '/weddings/:id',
    name: 'WeddingDetails',
    component: WeddingDetails
  },
  {
    path: '/weddings/:id/survey',
    name: 'WeddingSurvey',
    component: WeddingSurvey
  },
  {
    path: '/add-wedding',
    name: 'AddWedding',
    component: AddWedding
  },
  {
    path: '/current-wedding',
    name: 'CurrentWedding',
    component: CurrentWedding
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;