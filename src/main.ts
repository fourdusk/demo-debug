import './assets/main.css'
import 'tdesign-vue-next/es/style/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = err => {
  console.table( err);
  setTimeout(() => {
    throw err
  })
}

app.config.globalProperties
app.use(createPinia())
app.use(router)

app.mount('#app')
