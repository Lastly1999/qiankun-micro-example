import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
        , document.getElementById("root"));
}

if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}

export async function mount(props) {
    console.log('[react16] props from main framework', props);
    render();
}

export async function unmount(props) {
    // 卸载实例
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}