// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import theams from './js/dark.js'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import layer from 'vue-layer'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import Mint from 'mint-ui';
import './js/remConfig.js'
import {Decrypt,Encrypt} from './js/utils'
import promise from 'es6-promise';

import 'jquery'
// 兼容 Promise
promise.polyfill();

Vue.prototype.Decrypt = Decrypt
Vue.prototype.Encrypt = Encrypt
Vue.use(Mint);

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(VueClipboard)

Vue.prototype.$axios = axios
Vue.prototype.global = global
axios.defaults.headers.post['token'] = localStorage.token
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3// 目前只有一项，即msg方法的默认消失时间，单位：秒
})
// import 'lib-flexible/flexible'
// import './assets/lib'
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  }
})
var theam = ''
if(localStorage.getItem('theam') == null){
  theam = theams
}else{
  theam = JSON.parse(localStorage.getItem('theam'))
}
if(localStorage.getItem('texttype') == null){
  i18n.locale = 'zh'
}else{
  i18n.locale = localStorage.getItem('texttype')
}
// theam = theams

Vue.prototype.theam = theam
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
