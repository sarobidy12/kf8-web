import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      fr: {
        home: require("../locales/fr/home.json"),
        footer: require("../locales/fr/footer.json"),
        header: require("../locales/fr/header.json"),
        privacyPolicy: require("../locales/fr/privacy-policy.json"),
        dowload: require("../locales/fr/dowload.json"),
      },
      en: {
        home: require("../locales/en/home.json"),
        footer: require("../locales/en/footer.json"),
        header: require("../locales/en/header.json"),
        privacyPolicy: require("../locales/en/privacy-policy.json"),
        dowload: require("../locales/en/dowload.json"),
      },
      be: {
        home: require("../locales/be/home.json"),
        footer: require("../locales/be/footer.json"),
        header: require("../locales/be/header.json"),
        privacyPolicy: require("../locales/be/privacy-policy.json"),
        dowload: require("../locales/be/dowload.json"),
      },
    },
    ns: ["home", "footer", "header", "privacyPolicy", "dowload"],
    //   defaultNS: "translations",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
