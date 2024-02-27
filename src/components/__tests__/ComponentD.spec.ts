import { describe, it, expect } from 'vitest'
import { v4 as uuidv4 } from 'uuid'

import { mount } from '@vue/test-utils'
import ComponentD from '@/components/ComponentD.ce.vue'
import { useLanguage } from '@/store/language/index'

describe('ComponentD', () => {
	it('renders properly', () => {
		const wrapper = mount(ComponentD, {
			props: { stateId: uuidv4() }
		})

		expect(wrapper.text()).toContain('Component D')
	})

	it('Changes language store having selected `fr` language on dropdown', async () => {
		const stateId = uuidv4()
		const languageStore = useLanguage(stateId, {})

		const wrapper = mount(ComponentD, {
			props: { stateId: stateId }
		})

		await wrapper.find('select').setValue('fr')
		expect(languageStore.language.value).toBe('fr')
	})

	it('shows language message in French having chosen language=French', async () => {
		const stateId = uuidv4()
		const wrapper = mount(ComponentD, {
			props: { stateId: stateId }
		})

		await wrapper.find('select').setValue('fr')

		expect(wrapper.text()).toContain('Votre langue est le français')
	})
})
