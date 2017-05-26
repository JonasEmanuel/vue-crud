import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes'; 

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:5000/v1/';

var router = new VueRouter({routes});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
