import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Testeando from '@/components/Testeando.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('Testeando.vue', () => {
  it('renders title', () => {
    const title = 'Titulo'
    const wrapper = shallowMount(Testeando, {
      propsData: { title }
    })
    expect(wrapper.html()).toMatch(title)
  })
})