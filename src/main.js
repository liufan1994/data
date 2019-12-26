import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 放在vue原型上
Vue.prototype.axios = Axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
