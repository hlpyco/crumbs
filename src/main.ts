import Vue from 'vue';

import VeeApp from './VeeApp.vue';

import './styles.css';

new Vue({
  render: (h) => h(VeeApp),
}).$mount('#app');
