import { all as merge } from 'deepmerge';
import envDev from './env.dev';
import envProd from './env.prod';
import { ProcessEnv } from './process-env';

// ----------------------------------------------------------------------------
// Module Types
// ----------------------------------------------------------------------------
type Env = typeof env & typeof envDev & typeof envProd;

// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------
const { NODE_ENV } = process.env as ProcessEnv;
const IS_DEV = NODE_ENV !== 'production';

const env = {
  // Add non-environment specific defaults here
  theme: 'default',
  enableAnimations: true,
  brand: {
    LOGO: '/assets/img/brand-logo.png',
  },
  settings: {
    API_TIMEOUT_MS: 15000
  }
};

const mergedEnv = merge([env, (IS_DEV ? envDev : envProd)]) as Env;

// ----------------------------------------------------------------------------
// Dynamic Environment Variables
// ----------------------------------------------------------------------------

const loadEnvAsync = async (): Promise<Env> => {
  return new Promise<Env>(async (resolve, _) => {
    // We are lazily pulling the env varaibles so we can update variables at runtime
    const dynamicEnv = (await eval("import('/dynamic-env.js')")).default;
    const mergedDynamicEnv = merge([mergedEnv, dynamicEnv]) as Env;

    resolve(mergedDynamicEnv);
  });
};

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------
export { mergedEnv as default, IS_DEV, loadEnvAsync };
