import Vue from 'vue'
import App from './App.vue'


require('@/stylesheets/style.css')
require('@/stylesheets/responsive.css')

new Vue({
    render: h => h(App)
}).$mount('#app')