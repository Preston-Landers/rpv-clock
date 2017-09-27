// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ClockApp from './ClockApp.vue'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#clock-app',
  router,
  template: '<ClockApp/>',
  components: {ClockApp}
})

let locale = window.navigator.userLanguage || window.navigator.language
// let locale = 'fr'
moment.locale(locale)
console.log('Locale is ', locale)
