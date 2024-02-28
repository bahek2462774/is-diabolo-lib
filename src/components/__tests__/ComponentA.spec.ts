import { describe, it, expect } from 'vitest'
import { v4 as uuidv4 } from 'uuid'
import { mount } from '@vue/test-utils'

import { type EnrichedComponent } from '@/components/__tests__/types'
import ComponentA from '@/components/ComponentA.ce.vue'
import { useLanguage } from '@/store/language/index'

describe('ComponentA', () => {
	it('renders properly', () => {
		const wrapper = mount(ComponentA, {
			props: { stateId: uuidv4() }
		})

		expect(wrapper.text()).toContain('Component A')
	})

	it('mounts with initial counter value = 0', () => {
		const wrapper = mount(ComponentA, {
			props: { stateId: uuidv4() }
		})

		const component = wrapper.vm as unknown as EnrichedComponent
		expect(component.counter).toBe(0)
	})

	it('increases counter having clicked on plus button', () => {
		const wrapper = mount(ComponentA, {
			props: { stateId: uuidv4() }
		})

		const buttonPlus = wrapper.find('button')
		buttonPlus.trigger('click')
		const component = wrapper.vm as unknown as EnrichedComponent
		expect(component.counter).toBe(1)
	})

	it('decreases counter having clicked on minus button', async () => {
		const wrapper = mount(ComponentA, {
			props: { stateId: uuidv4() }
		})

		const buttonMinus = wrapper.findAll('button')[1]
		await buttonMinus.trigger('click')
		const component = wrapper.vm as unknown as EnrichedComponent
		expect(component.counter).toBe(-1)
	})

	it('shows buttons in French language having chosen language=French', async () => {
		const stateId = uuidv4()
		const wrapper = mount(ComponentA, {
			props: { stateId: stateId }
		})

		const { setLanguage } = useLanguage(stateId, {})
		await setLanguage('fr')

		const buttons = wrapper.findAll('button')
		expect(buttons[0].text()).toBe('Plus')
		expect(buttons[1].text()).toBe('Moins')
	})
})
