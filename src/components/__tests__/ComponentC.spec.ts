import { describe, it, expect } from 'vitest'
import { v4 as uuidv4 } from 'uuid'

import { mount } from '@vue/test-utils'
import ComponentC from '@/components/ComponentC.ce.vue'
import { useLanguage } from '@/store/language/index'
import { useStore } from '@/store/counter'

describe('ComponentC', () => {
	it('renders properly', () => {
		const wrapper = mount(ComponentC, {
			props: { stateId: uuidv4() }
		})

		expect(wrapper.text()).toContain('Component C')
	})

	it('resets counter from initial value = 99 to 0', async () => {
		const stateId = uuidv4()
		const counterStore = useStore(stateId)
		counterStore.counter.value = 99

		const wrapper = mount(ComponentC, {
			props: { stateId: stateId }
		})

		await wrapper.find('button').trigger('click')
		expect(counterStore.counter.value).toBe(0)
	})

	it('shows button text in French language having chosen language=French', async () => {
		const stateId = uuidv4()
		const wrapper = mount(ComponentC, {
			props: { stateId: stateId }
		})

		const { setLanguage } = useLanguage(stateId, {})
		await setLanguage('fr')

		expect(wrapper.text()).toContain('Réinitialiser le Compteur')
	})
})
