import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import './plugins'

Vue.use(VueAxios, axios)
Vue.use(VueReCaptcha, {
  siteKey: '6Ldd-2UaAAAAAFHgC4fsGfakPIFDn_A98fZEJRRd',
  loaderOptions: {
    useRecaptchaNet: true,
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
