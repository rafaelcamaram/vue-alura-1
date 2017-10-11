import Vue  from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';

// Disponibiliza artefatos especializados
// na realização de requisições assíncronas
Vue.use(VueResource);

// Registrando o router
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
