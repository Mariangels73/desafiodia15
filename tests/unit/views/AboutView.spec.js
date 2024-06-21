import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  test('should mount AboutView component', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/about', name: 'about', component: AboutView }],
    })
    router.push('/about')
    await router.isReady()

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
