import Vue from 'vue'
import App from './App'
import globalPlugins from './utils/plugins/global'

Vue.config.productionTip = false
Vue.use(globalPlugins)

App.mpType = 'app'

const app = new Vue(App)

app.$mount()
