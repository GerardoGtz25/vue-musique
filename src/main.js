import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import EventBus from './plugins/event-bus'
import msToMm from './filters/ms-to-mm'

Vue.config.productionTip = false;

Vue.use(EventBus)
Vue.use(msToMm)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
