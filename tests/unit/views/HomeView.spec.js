import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  test('matches snapshot', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
