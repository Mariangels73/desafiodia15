import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue'

describe('ContactView', () => {
  test('should mount ContactView component', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/contact', name: 'contact', component: ContactView }],
    })
    router.push('/contact')
    await router.isReady()

    const wrapper = mount(ContactView, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent(ContactView).exists()).toBe(true)
  })
})
