import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementui);

Vue.config.productionTip = false

import {registerMicroApps, start} from 'qiankun';


// 注册微应用
registerMicroApps([
    {
        name: "vue-app1",
        entry: '//localhost:8081',
        activeRule: "/vue-app1",
        container: "#vue"
    },
    {
        name: "react-app",
        entry: "//localhost:8082",
        activeRule: "/react-app1",
        container: "#react"
    }
])

// 启动微应用
start()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

