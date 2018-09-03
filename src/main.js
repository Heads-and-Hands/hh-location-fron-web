import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto';
import store from './store/store.js';

Vue.config.productionTip = false
Vue.use(require('vue-easeljs'));

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')




