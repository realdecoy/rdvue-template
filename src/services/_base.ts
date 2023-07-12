import env, { loadEnvAsync } from '@/config/env';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------
const { API_TIMEOUT_MS } = env.settings; // 15 seconds

class BaseService {
  protected api: AxiosInstance;

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor(api: AxiosRequestConfig | string) {
    const baseURL = typeof api === 'string' ? api : undefined;
    const overrides = typeof api === 'object' ? api : {};

    const options = {
      timeout: API_TIMEOUT_MS,
      headers: {},
      baseURL
    };

    this.api = axios.create({ ...options, ...overrides });

    this.init();
  }

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  private init() {
    const { interceptors } = this.api;

    interceptors.request.use(
      async (config) => {
        // Eg. Dynamic env example usage. Getting the API URL from env at runtime.

        // const env = await loadEnvAsync();
        // config.baseURL = env.API_URL;

        return this.onRequest(config);
      },
      async (error: unknown) => {
        return this.onRequestError(error);
      }
    );

    interceptors.response.use(
      (response) => {
        return this.onResponse(response);;
      },
      async (error: unknown) => {
        return this.onResponseError(error);
      }
    );
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------
  protected onRequest(config: AxiosRequestConfig) {
    // TODO: override
    return config;
  }

  protected onRequestError(error: unknown) {
    // TODO: override
    return Promise.reject(error);
  }

  protected onResponse(response: AxiosResponse) {
    // TODO: override
    return response
  }

  protected onResponseError(error: unknown) {
    // TODO: override
    return Promise.reject(error);
  }
}

export {
  BaseService,
};

