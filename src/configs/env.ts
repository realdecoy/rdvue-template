/**
 * This file is a shortcut for accessing the env variables that are
 * injected based on the current build mode from the relevant .env
 * file. Imports MUST be specificed using ther full import.meta.env.*
 * reference due to how compiler substituion works.
 *
 * https://vitejs.dev/guide/env-and-mode.html#env-files
 */

export default {
  API_TIMEOUT_MS: parseInt(import.meta.env.PUBLIC_API_TIMEOUT_MS, 10),
  APP_DEFAULT_LOCALE: import.meta.env.PUBLIC_APP_DEFAULT_LOCALE,
};

// TODO: Envs are not being loaded.
// eslint-disable-next-line no-console
console.log(
  'Test load API_TIMEOUT_MS value is: ',
  import.meta.env.PUBLIC_API_TIMEOUT_MS
);
