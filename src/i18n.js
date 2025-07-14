import { createI18n } from 'vue-i18n'
import ru from './locales/LocalesRu.json'
import uz from './locales/LocalesUz.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: { ru, uz }
})

export default i18n;
