import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './public-path'

let instance = null

function render() {
    instance = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap(props) {
    console.log(props);
}

export async function mount(props) {
    render();
}

export async function unmount(props) {
    console.log(props);
    // @ts-ignore
    instance.$destroy();
}
