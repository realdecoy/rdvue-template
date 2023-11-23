
import * as Sentry from "@sentry/vue";

function initializeSentry(vueApp: any) {
  const { PUBLIC_SENTRY_DSN } = import.meta.env;
  Sentry.init({
    vueApp,
    dsn: PUBLIC_SENTRY_DSN,
  });
}

export {
  initializeSentry
};