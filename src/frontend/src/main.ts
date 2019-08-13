import { faCompressArrowsAlt, faExpandArrowsAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import Admin from './views/Admin.vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Game from './views/Game.vue';
import Replay from './views/Replay.vue';
import Router from 'vue-router';
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCompressArrowsAlt, faExpandArrowsAlt, faPlay, faPause);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Router);

Vue.config.productionTip = false;

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/games/:roomId',
      name: 'game',
      component: Game
    },
    {
      path: '/replay',
      name: 'replay',
      component: Replay
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#vuejs');
