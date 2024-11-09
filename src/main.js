import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Footer from './COMPONENTS/Footer.vue'
const app = createApp(App)
app.component('portafolio-footer', Footer)


app.use(createPinia())
app.use(router)

app.mount('#app')
