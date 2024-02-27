import { reactive, toRef } from 'vue'

import constants from '@/constants'
import { type I18NState, type Messages, type Language } from './types'

const i18nState: I18NState = reactive({})

export function useLanguage(stateId: string, messages: Messages) {
	i18nState[stateId] = constants.languages[0]

	return {
		language: toRef(i18nState, stateId),
		$t: (message: string) => {
			return messages[i18nState[stateId]].messages[message] || message
		},
		setLanguage: (newLanguage: Language) => {
			i18nState[stateId] = newLanguage
		}
	}
}
