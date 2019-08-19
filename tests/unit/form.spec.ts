import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue';

describe(Form, () => {
  it('Add product', () => {
    const wrapper = mount(Form)
    expect(wrapper.contains('div')).toBe(true);
    const buttonWrapper = wrapper.find('button')
    buttonWrapper.trigger('click')
  })
})
