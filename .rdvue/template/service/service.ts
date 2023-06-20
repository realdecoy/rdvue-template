import { AxiosResponse } from 'axios';
import { BaseService } from './@base';

type ServiceResult = {
  success: boolean;
  // tslint:disable-next-line: no-any
  data?: any;
};

enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

class __SERVICE__ extends BaseService {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super({
      baseURL: ''
    });
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async postData(payload: string): Promise<ServiceResult> {
    // define custom request options [NB: default config found in @/services/base]
    const options = {};
    const result: ServiceResult = { success: false };

    return this.api
      .post(`<endpoint-name>`, payload, options)
      .then((response: AxiosResponse) => {
        // handle response here
        const { status, data } = response;
        result.success = status === StatusCode.OK;
        result.data = data;

        return result;
      })
      .catch((err) => {
        return result;
      });
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const service = new __SERVICE__();

export {
  service as default,
  service as __SERVICE__,
};
