import Vue from 'vue'
import Vuex from 'vuex'
import smile from '@/store/modules/smile'
import disfood from '@/store/modules/disfood'
import klerk from '@/store/modules/klerk'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        smile,
        disfood,
        klerk
    }
})