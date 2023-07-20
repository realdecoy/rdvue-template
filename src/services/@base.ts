import env from '@/configs/env';
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------

const { API_TIMEOUT_MS } = env; // 30 seconds default in .env

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
      baseURL,
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
      async (config) => (await this.onRequest(config), config),
      async (error: unknown) => (
        await this.onRequestError(error), Promise.reject(error)
      )
    );

    interceptors.response.use(
      async (response) => (await this.onResponse(response), response),
      async (error: unknown) => (
        await this.onResponseError(error), Promise.reject(error)
      )
    );
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected async onRequest(config: AxiosRequestConfig) {
    throw new Error(
      `Abstract method [onRequest] not implemented in class [${this.constructor.name}]`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected async onRequestError(error: unknown) {
    throw new Error(
      `Abstract method [onRequestError] not implemented in class [${this.constructor.name}]`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected async onResponse(response: AxiosResponse) {
    throw new Error(
      `Abstract method [onResponse] not implemented in class [${this.constructor.name}]`
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected async onResponseError(error: unknown) {
    throw new Error(
      `Abstract method [onResponseError] not implemented in class [${this.constructor.name}]`
    );
  }
}

export { BaseService };
