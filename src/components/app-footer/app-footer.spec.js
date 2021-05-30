import { shallowMount } from '@vue/test-utils';
import AppFooter from './app-footer.vue';

describe('AppFooter.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(AppFooter);

    expect(wrapper.exists()).toEqual(true);
  });
});
