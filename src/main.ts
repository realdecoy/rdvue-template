import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createFontAwesome } from '@/modules/core'
import App from './components/@app'
import router from './configs/router'
import '@/assets/theme/@main.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createFontAwesome())
app.mount('#app')
