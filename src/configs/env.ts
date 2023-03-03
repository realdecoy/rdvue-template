/**
 * This file is a shortcut for accessing the env variables that are
 * injected based on the current build mode from the relevant .env
 * file. Imports MUST be specificed using ther full import.meta.env.*
 * reference due to how compiler substituion works.
 *
 * https://vitejs.dev/guide/env-and-mode.html#env-files
 */
import 'vite/client';

export default {
  API_TIMEOUT_MS: parseInt(import.meta.env.API_TIMEOUT_MS),
};
