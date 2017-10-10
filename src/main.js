import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';

// disponibiliza artefatos especializados
// na realização de requisições assíncronas
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
