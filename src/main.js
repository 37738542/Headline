import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载全局样式
import './style/index.less'

createApp(App).use(store).use(router).mount('#app')
