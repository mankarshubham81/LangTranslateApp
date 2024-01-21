import i18n from "i18next";
import languageDector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n
.use(languageDector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: "hi",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                greeting: "Hello, Welcome!",
                description: {
                    line1: "This <1>{{flag}}</1> website has support for multiple languages",
                    line2: "The website uses a translation engine that recognizes the language of the user and automatically translates the content into that language. It also includes a translation button that allows users to manually translate the content into other languages.",
                }
            }
        },
        fr: {
            translation: {
                greeting: "Bonjour bienvenue!",
                description: {
                    line1: "Ce site Web <1>{{flag}}</1> prend en charge plusieurs langues",
                    line2: "Le site Web utilise un moteur de traduction qui reconnaît la langue de l'utilisateur et traduit automatiquement le contenu dans cette langue. Il comprend également un bouton de traduction qui permet aux utilisateurs de traduire manuellement le contenu dans d'autres langues.",
                }
            }
        },
        hi: {
            translation: {
                greeting: "नमस्ते, स्वागत है!",
                description: {
                    line1: "इस <1>{{flag}}</1> वेबसाइट में कई भाषाओं के लिए समर्थन है",
                    line2: "वेबसाइट एक अनुवाद इंजन का उपयोग करती है जो उपयोगकर्ता की भाषा को पहचानती है और स्वचालित रूप से उस भाषा में सामग्री का अनुवाद करती है। इसमें एक अनुवाद बटन भी शामिल है जो उपयोगकर्ताओं को सामग्री को अन्य भाषाओं में मैन्युअल रूप से अनुवाद करने की अनुमति देता है।",
                }
            }
        },
        ar: {
            translation: {
                greeting: "مرحبا أهلا وسهلا!",
                description: {
                    line1: "يحتوي موقع  <1>{{flag}}</1> هذا على دعم لعدة لغات",
                    line2: "يستخدم موقع الويب محرك ترجمة يتعرف على لغة المستخدم ويقوم تلقائيًا بترجمة المحتوى إلى تلك اللغة. ويتضمن أيضًا زر ترجمة يسمح للمستخدمين بترجمة المحتوى يدويًا إلى لغات أخرى.",
                }
            }
        }
    }
})