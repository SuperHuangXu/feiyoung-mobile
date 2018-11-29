import Vue from 'vue';
import Router from 'vue-router';

import LandingPage from '@/components/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
