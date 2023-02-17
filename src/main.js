import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from './components'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(components)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
