import { createI18n } from 'vue-i18n'
import zh from './lang/zh.json'
import en from './lang/en.json'

const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: localStorage.getItem('LangKey') || 'zh',
    messages: {
        zh,
        en
    }
})

export const changeLang = (type) => {
    localStorage.setItem('LangKey', type)
    i18n.global.locale.value = type
}

export default i18n