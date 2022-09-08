// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import {request} from '../src/network/request'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

})

request({
  url:'/home/multidata'
},res=>{console.log(res)},err=>(console.log(err)))
/* http://152.136.185.210:7878/api/hy66 */