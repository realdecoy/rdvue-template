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
const { NODE_ENV } = import.meta.env;
const IS_DEV = NODE_ENV !== 'production';

const env = {
  // Add non-environment specific defaults here
  theme: 'default',
  enableAnimations: true,
  brand: {
    LOGO: '/assets/img/brand-logo.png',
  },
  settings: {
    API_TIMEOUT_MS: 15000,
  },
};

const mergedEnv = merge([env, IS_DEV ? envDev : envProd]) as Env;

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------
export { mergedEnv as default, IS_DEV };
