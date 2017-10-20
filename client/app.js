import Vue from 'vue'
import Vuetify from 'vuetify'
import {
    sync
} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

import('../node_modules/vuetify/dist/vuetify.min.css')

sync(store, router)

Vue.use(Vuetify);

const app = new Vue({
    router,
    store,
    ...App
})

export {
    app,
    router,
    store
}