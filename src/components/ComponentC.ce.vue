<script setup lang="ts">
import { useStore } from '@/store/counter'
import { type Messages } from '@/store/language/types'
import { useLanguage } from '@/store/language/index'

const props = defineProps({
	stateId: { type: String, required: true }
})

const messages: Messages = {
	en: {
		messages: {
			ResetCounter: 'Reset Counter'
		}
	},
	fr: {
		messages: {
			ResetCounter: 'Réinitialiser le Compteur',
		}
	}
}

const { counter } = useStore(props.stateId)
const { $t } = useLanguage(props.stateId, messages)

function reset() {
	counter.value = 0
}
 
</script>
<template>
	<div class="bg-green-100 p-5 pt-16 text-center relative">
		<h3 class="text-center text-xl text-green-400 absolute right-2 top-2">Component C</h3>
		<button class="btn btn--danger" @click="reset">{{ $t('ResetCounter') }}</button>
	</div>
</template>

<style lang="scss" scoped>
@import url('@/styles/initTailwindMixin.scss');
@import url('@/styles/mixins.scss');
</style>