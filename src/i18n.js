import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {common_de, common_en, common_fr, common_it, jobs_de, jobs_en, jobs_fr, jobs_it} from "./locales/locales";


i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en,               // 'common' is our custom namespace
                jobs: jobs_en
            },
            de: {
                common: common_de,
                jobs: jobs_de
            },
            fr: {
                common: common_fr,
                jobs: jobs_fr
            },
            it: {
                common: common_it,
                jobs: jobs_it
            },
        },
    });

export default i18next;