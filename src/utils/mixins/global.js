import { utils } from 'mp-client'
import consts from '../consts'
import auth from '../auth'

export default {
  data () {
    return {
      loaded: false,
      isIPhoneX: false
    }
  },

  onLoad () {
    if (this.$mp.page) {
      const { route } = this.$mp.page

      if ('/' + route !== consts.LOGIN_PAGE && !auth.loggedIn()) {
        this.$bridge.redirectTo({ url: `${consts.LOGIN_PAGE}?from=${utils.url.encode(route)}` })
      }
    }
  },

  methods: {}
}
