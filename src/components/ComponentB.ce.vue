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
			Counter: 'Counter'
		}
	},
	fr: {
		messages: {
			Counter: 'Compteur',
		}
	}
}

const { $t } = useLanguage(props.stateId, messages)
const { counter } = useStore(props.stateId)
</script>
<template>
	<div class="bg-purple-100 border-solid border-1 border-purple-900 p-5 pt-16 relative">
		<h3 class="text-center text-xl text-purple-400 absolute right-2 top-2">Component B</h3>
		<h4 class="text-xl text-center">{{ $t('Counter') }}: {{ counter }}</h4>
	</div>
</template>

<style lang="scss" scoped>
@import url('@/styles/initTailwindMixin.scss');
</style>