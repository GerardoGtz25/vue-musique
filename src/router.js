import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TrackDetail from './components/TrackDetail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/track/:id',
      name: 'track',
      component: TrackDetail

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
  mode: 'history'
});
