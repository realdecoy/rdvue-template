import { all as merge } from 'deepmerge';
import envDev from './env.dev';
import envProd from './env.prod';

// ----------------------------------------------------------------------------
// Module Types
// ----------------------------------------------------------------------------
type Env = typeof env & typeof envDev & typeof envProd;

// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------
const { NODE_ENV, VITE_API_TIMEOUT_MS, VITE_APP_DEFAULT_LOCALE } = import.meta
  .env;
const IS_DEV = NODE_ENV !== 'production';

const env = {
  // Add non-environment specific defaults here
  theme: 'default',
  enableAnimations: true,
  brand: {
    LOGO: '/assets/img/brand-logo.png',
  },
  settings: {
    API_TIMEOUT_MS: parseInt(VITE_API_TIMEOUT_MS || '15000', 10), // Fallback to default 15000 if not set
    APP_DEFAULT_LOCALE: VITE_APP_DEFAULT_LOCALE || 'en-US', // Add a default value if needed
  },
};

const mergedEnv = merge([env, IS_DEV ? envDev : envProd]) as Env;

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------
export { mergedEnv as default, IS_DEV };
