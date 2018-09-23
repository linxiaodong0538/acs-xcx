import Vue from 'vue'
import App from './App'
import globalMixin from './utils/mixins/global'
import globalPlugin from './utils/plugins/global'

Vue.config.productionTip = false
Vue.mixin(globalMixin)
Vue.use(globalPlugin)

App.mpType = 'app'

const app = new Vue(App)

app.$mount()
