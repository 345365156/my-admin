import Vue from 'vue'
import enLocale from './en'
import zhLocale from './zh'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};

export function getLanguage() {
  const chooseLanguage = localStorage.getItem('language');
  if (chooseLanguage) return chooseLanguage;

  // 如果storage中没有指定language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh'
}

const i18n = new VueI18n({
  locale: getLanguage(), // 语言 (en | zh)
  messages // 翻译
});

export default i18n
