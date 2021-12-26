import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationVI from '../locales/vn/translation.json'
import translationEN from '../locales/en/translation.json'
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};

 i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(HttpApi)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: false,
        interpolation: {
            escapeValue: false 
        },
        detection:{
            order: [ 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
            excludeCacheFor: ['cimode']
        },
        backend:{
            loadPath: '../locales/{{lng}}/translation.json'
        },
        compatibilityJSON: 'v3'
    });
export default i18n;