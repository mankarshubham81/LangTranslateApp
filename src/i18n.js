import i18n from "i18next";
import languageDector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n
.use(languageDector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: "en",
    resources: {
        en: {
            translation: {
                greeting: "Hello, Welcome!",
            }
        },
        fr: {
            translation: {
                greeting: "Bonjour bienvenue!",
            }
        },
        hi: {
            translation: {
                greeting: "नमस्ते, स्वागत है!",
            }
        }
    }
})