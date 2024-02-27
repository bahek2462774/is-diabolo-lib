<script setup lang="ts">
import { type Messages } from '@/store/language/types'
import { useLanguage } from '@/store/language/index'
import { useStore } from '@/store/counter'

const props = defineProps({
	stateId: { type: String, required: true }
})

const messages: Messages = {
	en: {
		messages: {
			Plus: 'Plus',
			Minus: 'Minus',
		}
	},
	fr: {
		messages: {
			Plus: 'Plus',
			Minus: 'Moins',
		}
	}
}

const { $t } = useLanguage(props.stateId, messages)
const { counter } = useStore(props.stateId)

function plus() {
	counter.value++
}

function minus() {
	counter.value--
}
</script>
<template>
	<div class="bg-blue-100 p-5 pt-16 text-center relative">
		<h3 class="text-center text-xl text-blue-400 absolute right-2 top-2">Component A</h3>
		<button class="btn btn--danger" @click="plus">{{  $t('Plus') }}</button>
		<button class="btn btn--danger ml-4" @click="minus">{{  $t('Minus') }}</button>
	</div>
</template>

<style lang="scss" scoped>
@import url('@/styles/initTailwindMixin.scss');
@import url('@/styles/mixins.scss');
</style>
