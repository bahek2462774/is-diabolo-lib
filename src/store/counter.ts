import { reactive, toRef } from 'vue'

interface CounterState {
	initState(stateId: string): void
	counters: {
		[key: string]: number
	}

}

const counterState: CounterState = reactive({
	initState(stateId: string) {
		counterState.counters[stateId] = 0
	},
	counters: {}
})

export function useStore(stateId: string) {
	if (counterState.counters[stateId] === undefined) {
		counterState.initState(stateId)
	}

	return {
		counter: toRef(counterState.counters, stateId)
	}
}