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
  siteKey: '6LczGWYaAAAAAI2z15WHcbj8AeRB_iaxSaU8iAQE',
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
