import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {common_de, common_en, common_fr, common_it} from "./locales/locales";


i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en           // 'common' is our custom namespace
            },
            de: {
                common: common_de
            },
            fr: {
                common: common_fr
            },
            it: {
                common: common_it
            },
        },
    });

export default i18next;