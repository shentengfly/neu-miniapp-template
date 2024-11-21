import { watch } from 'vue';
import { createI18n,useI18n } from "vue-i18n";
import enUs from "./en-US.json";
import zhHans from "./zh-Hans.json";
import arSa from "./ar-SA.json";
export { useI18n }
const messages = {
  "en-US": enUs,
  "zh-Hans": zhHans,
  "ar-SA": arSa,
};


const i18nConfig = {
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
};
const i18n = createI18n(i18nConfig);

export const setHostLanguage = ()=>{
  neu.getHostLanguage({
    success: (res) => {
      if (res && res.code) {
        if(i18n.global.availableLocales.includes(res.code)){
          i18n.global.locale = res.code;
          neu.setLocale(res.code)
          setTimeout(()=>{
            neu.setLocale(res.code)
          },1000)
        }
        
      }
    },
  });
}
setHostLanguage()
// Get the host language of SuperApp.

neu.onLocaleChange((r) => {
  i18n.global.locale = r.locale;
});

watch(() => i18n.global.locale, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    neu.setLocale(newVal)
  }
});


export function getDirection() {
  return i18n.global.locale == "ar-SA"?'rtl':'ltr'
}

/**
 * The original language template can be obtained. For non-vue files, use this method.
 * @param { string } key multilingual keys，eg: "app.name"
 * @returns {string} Return to the original multilingual template. eg: "{heavy}KG"
 */
export const getTemplateByKey = (key) => {
  if (!key) {
    return ''
  }
  const locale = i18n.global.locale
  const message = messages[locale] // Get all templates of a certain multilingual language (it is an object).
  if (Object.keys(message).includes(key)) {
    return message[key]
  }
  return ''
}

/**
 * formatI18n('I am {name}, height {detail.height}, weight {detail.weight}',{name:'Zhang San',detail:{height:178,weight:'75kg'}})
 * Arrays are not supported currently.
 * @param template Multilingual template string, eg: `I am {name}`.
 * @param {Object|undefined} data is the data object to be passed. The keys inside it correspond to multilingual strings. For example: `{name:'Feige'}`.
 * @returns
 */
function formatI18n(template, data) {
  return template.replace(/\{([^}]+)\}/g, function (match, key) {
    const arr = key.trim().split('.')
    let result = data
    while (arr.length) {
      const first = arr.shift()
      result = result[first]
    }
    return result
  })
}

/**
 * t('introduction',{name:'Tom',detail:{height:178,weight:'75kg'}})
 * If there is no key, data can be omitted; arrays are not supported for the time being.
 * @param template Multilingual template string, eg: `I am {name}`.
 * @param {Object|undefined} data The data object that needs to be passed. The keys inside it correspond to multilingual strings. For example: `{name:'Feige'}`.
 * @returns
 */
export function t(key, data) {
  return formatI18n(getTemplateByKey(key), data)
}


export default i18n;
