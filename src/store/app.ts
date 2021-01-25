import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from './index';

const MODULE_NAME = 'App';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
  private fooBarVal = '';

  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------

  public get fooBar() {
    return this.fooBarVal;
  }

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------

  @MultiParamAction()
  public initializeFooBar() {
    this.setFooBar('Hello World');
  }

  @MultiParamAction()
  public resetFooBar() {
    return null;
  }

  @MultiParamAction()
  public setCustomFooBar(value: string) {
    return value;
  }

  // ------------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------------

  @Mutation
  private setFooBar(value: string) {
    this.fooBarVal = value;
  }
}

const app = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
    app as AppStore,
};

