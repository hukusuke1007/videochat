import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import './registerServiceWorker';

Vue.use(Vuetify, {
  theme: {
    original: colors.purple.base,
    theme: '#FFDEEA',
    background: '#FFF6EA',
    view: '#ffa07a',
    select: '#FF7F78',
    button: '#5FACEF',
  },
  options: {
    themeVariations: ['original', 'secondary'],
  },
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
