import Vue from 'vue'
import Vuex from 'vuex'

import * as socketConnection from './modules/socketConnection'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        socketConnection
    }
})
