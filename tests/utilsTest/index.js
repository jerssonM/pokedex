import {
  createLocalVue,
  mount as testMount,
  shallowMount as testshallowMount,
} from "@vue/test-utils";
import VueI18n from "vue-i18n";
import en from "../../src/locales/en";

const localVue = createLocalVue();
localVue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en },
});

export const mount = (component, config = {}) =>
  testMount(component, { localVue, i18n, ...config });

export const shallowMount = (component, config = {}) =>
  testshallowMount(component, { localVue, i18n, ...config });
