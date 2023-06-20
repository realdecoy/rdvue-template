import { shallowMount } from '@vue/test-utils';
import __LAYOUT__ from './__LAYOUT__KEBAB__.vue';

describe('__LAYOUT__.vue', () => {
  it('mounts layout and check if layout exists', () => {
    // Mount layout and check if layout exists
    const wrapper = shallowMount(__LAYOUT__);

    expect(wrapper.exists()).toEqual(true);
  });
});
