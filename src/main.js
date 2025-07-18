import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import ru from './locales/LocalesRu.json'
import uz from './locales/LocalesUz.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'ru',
  fallbackLocale: 'ru',
  messages: { ru, uz }
})

createApp(App).use(i18n).mount('#app')
