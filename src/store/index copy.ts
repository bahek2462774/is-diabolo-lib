import { reactive, toRef } from 'vue'

import constants from '@/constants'

type Language = typeof constants.languages[number]

interface State {
	setLanguage(stateId: string, language: string): void
	initState(stateId: string): void
	localStates: {
		[key: string]: {
			counter: number
			language?: Language
		}
	}

}

const state: State = reactive({
	setLanguage(stateId: string, newLanguage: Language) {
		if (!state.localStates[stateId]) state.initState(stateId)
		state.setLanguage(stateId, newLanguage)
	},
	initState(stateId: string) {
		state.localStates[stateId] = {
			counter: 0,
			language: constants.languages[0]
		}
	},
	localStates: {}
})

export function useStore(stateId: string) {
	if (!state.localStates[stateId]) state.initState(stateId)

	return {
		counter: toRef(state.localStates[stateId], 'counter')
	}
}