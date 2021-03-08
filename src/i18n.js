import { createI18n } from "vue-i18n";

import en from "./locales/en";

const i18n = createI18n({
  messages: { en },
  locale: "en",
  fallbackLocale: "en",
});

export default i18n;
