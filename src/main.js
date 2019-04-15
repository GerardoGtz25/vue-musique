import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import EventBus from './plugins/event-bus'
import msToMm from './filters/ms-to-mm'
import blur from './directives/blur'

Vue.config.productionTip = false;

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
