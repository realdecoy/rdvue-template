import env from '@/config/env';
import type { App } from 'vue';
import { createI18n as vueCreateI18n } from 'vue-i18n';

// ----------------------------------------------------------------------------
// Module Constants
// ----------------------------------------------------------------------------
const APP_DEFAULT_LOCALE = env.APP_DEFAULT_LOCALE;

// ----------------------------------------------------------------------------
// Module Functions
// ----------------------------------------------------------------------------
function getBrowserLocale(countryCodeOnly = false) {
  let result = null;
  const navigatorLocale =
    // tslint:disable-next-line: strict-type-predicates
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language;

  // tslint:disable-next-line: strict-boolean-expressions
  if (
    navigatorLocale !== null &&
    navigatorLocale !== undefined &&
    navigatorLocale.length > 0
  ) {
    result = countryCodeOnly
      ? navigatorLocale.trim().split(/-|_/)[0]
      : navigatorLocale.trim();
  }

  return result ?? null;
}

function getAvailableLocales() {
  const locales = import.meta.glob('@/locales/*.json', {
    as: 'raw',
    eager: true,
  });
  const localeNames = Object.keys(locales);

  return localeNames;
}

/**
 * Determine if the browser's current locale is in the list of locales
 * supported by this implementation. If not, select between the default
 * and fallback locales specified - in that order of priority.
 */
function getStartingLocale() {
  const browserLocale = getBrowserLocale(true);
  const availableLocales = getAvailableLocales();
  let result: string;

  if (
    browserLocale !== null &&
    availableLocales.find((p) => p === browserLocale) !== undefined
  ) {
    result = browserLocale as string;
  } else {
    // tslint:disable-next-line: no-unsafe-any
    result = APP_DEFAULT_LOCALE;
  }

  return result;
}

function loadLocaleMessages() {
  const locales = import.meta.glob('@/locales/*.json', {
    as: 'raw',
    eager: true,
  });
  const messages: { [key: string]: {} } = {};

  for (const key of Object.keys(locales)) {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched !== null && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = JSON.parse(locales[key]) as {};
    }
  }

  return messages;
}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------
export const createI18n = () => ({
  install(app: App) {
    app.use(
      vueCreateI18n({
        legacy: false,
        allowComposition: true,
        locale: getStartingLocale(),
        fallbackLocale: APP_DEFAULT_LOCALE,
        messages: loadLocaleMessages(),
      })
    );
  },
});
