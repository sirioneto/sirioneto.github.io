import { createI18n, useI18n } from "vue-i18n";
import { pt_BR } from "@/locales/pt_BR";
import { en } from "@/locales/en";
import { es } from "@/locales/es";

const languages = {
  pt_BR,
  en,
  es,
};

const defaultLocale = "pt_BR";
const localStorageIndex = "i18n_locale";

const setInLocalStorage = (locale: string) => {
  localStorage.setItem(localStorageIndex, locale);
};

const getInLocalStorage = (): string => {
  return localStorage.getItem(localStorageIndex) ?? "";
};

const userLocale = (): string => {
  let selectedLocale = getInLocalStorage();

  if (!selectedLocale) {
    const navigatorLocale = navigator?.language;

    for (const language of availableLanguages) {
      if (
        navigatorLocale == language.key ||
        language.aliases.includes(navigatorLocale)
      ) {
        selectedLocale = language.key;

        break;
      }
    }
  }

  if (!selectedLocale) {
    selectedLocale = defaultLocale;
  }

  return selectedLocale;
};

export const availableLanguages = [
  { key: "pt_BR", description: "Português (BR)", aliases: ["pt-BR", "pt"] },
  { key: "en", description: "English", aliases: ["en-US"] },
  { key: "es", description: "Español", aliases: ["es-MX"] },
];

export const initializeI18n = () => {
  return createI18n({
    locale: userLocale(),
    legacy: false,
    fallbackLocale: defaultLocale,
    messages: languages,
  });
};

export const changeLocaleValue = (localeValue: string) => {
  setInLocalStorage(localeValue);
};

export const getLocale = () => {
  const { locale } = useI18n();
  locale.value = userLocale();

  return locale;
};
