import { describe, it, expect } from 'vitest'
import { v4 as uuidv4 } from 'uuid'

import { mount } from '@vue/test-utils'
import ComponentB from '@/components/ComponentB.ce.vue'
import { useLanguage } from '@/store/language/index'
import { useStore } from '@/store/counter'
import { type EnrichedComponent } from '@/components/__tests__/types'

describe('ComponentB', () => {
	it('renders properly', () => {
		const wrapper = mount(ComponentB, {
			props: { stateId: uuidv4() }
		})

		expect(wrapper.text()).toContain('Component B')
	})

	it('mounts with initial counter value = 0', () => {
		const wrapper = mount(ComponentB, {
			props: { stateId: uuidv4() }
		})

		const component = wrapper.vm as unknown as EnrichedComponent
		expect(component.counter).toBe(0)
	})

	it('mounts with initial counter value = 99', () => {
		const stateId = uuidv4()
		const counterStore = useStore(stateId)
		counterStore.counter.value = 99

		const wrapper = mount(ComponentB, {
			props: { stateId: stateId }
		})

		expect(wrapper.text()).toContain(99)
	})

	it('shows counter message in French language having chosen language=French', async () => {
		const stateId = uuidv4()
		const wrapper = mount(ComponentB, {
			props: { stateId: stateId }
		})

		const { setLanguage } = useLanguage(stateId, {})
		await setLanguage('fr')

		expect(wrapper.text()).toContain('Compteur')
	})
})
