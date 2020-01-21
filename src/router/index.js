import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Map from '../views/GoogleMap.vue';
import Profile from '../views/Profile.vue';
import Alert from '../views/Alert.vue';
import UserUpdate from '../views/UserUpdate.vue';
import DogShow from '../views/DogShow.vue';
import UserShow from '../views/UserShow.vue';
import DogCreate from '../views/DogCreate.vue';




Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/alert',
    name: 'alert',
    component: Alert
  },
  {
    path: '/userupdate',
    name: 'userupdate',
    component: UserUpdate
  },
  {
    path: '/dogshow',
    name: 'dogshow',
    component: DogShow
  },
  {
    path: '/usershow',
    name: 'usershow',
    component: UserShow
  },
  {
    path: '/dogcreate',
    name: 'dogcreate',
    component: DogCreate
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
