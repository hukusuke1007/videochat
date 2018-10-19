import Vue from 'vue';
import Router from 'vue-router';
import VideChat from './views/VideChat.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'VideChat',
      component: VideChat,
    },
  ],
});
