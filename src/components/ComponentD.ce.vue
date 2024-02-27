<script setup lang="ts">
import constants from '@/constants'
import { useLanguage } from '@/store/language/index'
import { type Messages } from '@/store/language/types'

const props = defineProps({
	stateId: { type: String, required: true }
})

const messages: Messages = {
	en: {
		messages: {
			YourLanguage: 'Your language is English',
			Lang: 'English',
			Flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/klEQVRYhe1WXWwUVRSehMRooZDGYrJtGjRCrKFSaTfdgoamlB8jYiDRhyb+Pe2DJMqTQiHRFF8Q29iU+GQjhISk0ChFIgZDjZAWSgtIqt2tW7oLuu3utt2fmd2d3dmZ+bz3TufO2t2mLA/yQE/ybe7eOfc735x759wjCEv22NtbwqbWVmG51i4IoGjt6GJYX9UFQTiaA/O56T9/XbZvUVEbn5+/jsaksYXs4NlE/ikJFRXfPLSAZcu+xLlez4ICTBGC+SdSX4Xom9uQGRqEaeFIBtt3jMHhGOUQRZU9C1RWYtJmY6BjavSZ6Td4Q4Ku62xeCwUhfeRkMUyYcbmA2br1BhxVSHQcg55Os8WxmAqn0/vAAhoa3HC5kvwl0n2XEN622eLfVI1Y21FLgJma2NdtmCYPp+0vMkSa9yDjGWMkqqqju3t2UQHJpAa/3xCuxyWInx/kfBThfU4kxu5CljUkEgpOnx61BLDJcR9mP/4QwY0vMITqNyBx6jvCpjMRly/HEI9rOQKCdrsR1Mg4lNvDmHmjifNM73kNUt+vLAbFwICE3bt75s4L+dm58wz6+yXuIP12FcG9r2Oqeh3DrPM9qIEpZDI6D/IfAXV1MBWIHV9hqqaSrQu8UoNo17eQxRTj9XpT6OwMskxaB3tuQCfb2wPweAxnOa4gcvIEJjfX4J+XnsckIUte/JHvbT4BKjls1Ne/YR1mDh9Awh/iL9XTE8bWrW5+lrgAcwsKtbwZKMD4Z/vIBZifg0n2fyGnDiwJoHtaCCbLyizC8vKC1+dUwkd2CM0BLbEUtJxqmlHVdDLQJAlqLApNlhcVoGcU4htj0BXF4CBQFJ3zm7Buz6xCRIuFWThC587jzto1+P3ZMoR/+J4H1hfJgDzuweirDtx6pgS+lhYkpTTj6+sTsWvXX7mFiP7YbMeZA3VMkrLp/fQTDJeuwkhtNRJ/jBiBSWTfPTn/XTBvC1SStfEP3sHw0yvx544miOP3GLfPl8b+/ffzV0LqQB1HGhswWLIC7rf3IhOJGISajp9+jmDLFlfe2zBYW8vmouTqTqW1OcE6/G3HcKN0JW4+V4HQhYs8u2fPhnMFBHsvYGhNOa6tWo77rZ9BV41AKUXDkS/8D9wPNDffZY2MaZFfLnHeiUOHyZYoTER3twurV3dan2F/8VO4bivFzPlea3E0wwgL7YgaG90YuCZCm7s6Ze8Ebtfb0b/iSdxpaoQ48XduHRh+mXRCrlGevsEhiRFlBy+kJaPoPB4gV7ixJWo8Dvf77+Jq0RO4TjJi1YF5TSld0HLoSt6OuNCumMJuP0kymVqgKS1WWVt+JEuEo/7UgsEfRgBFSUlHnra8WGVt+ZI99vYviMsfDRTQ5aEAAAAASUVORK5CYII='
		}
	},
	fr: {
		messages: {
			YourLanguage: 'Votre langue est le français',
			Lang: 'French',
			Flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAeElEQVR42mMYBaPAWWe2uJv+vMtA/B8fbpo4lyS8lIsLL17GxXV5GTe3OAPMcvo6AOEIBpgFaU6f8OKvP36ThJ/KyuLDcEeMOmDUAaMOGHXAqANGHTDqgFEHjDpgwB1A30YpJj4Hbpa76s+7OgAOOAdqlo92jEYBABPTRkb6FjqAAAAAAElFTkSuQmCC'
		}
	}
}

const { setLanguage, $t, language } = useLanguage(props.stateId, messages)

function changeLanguage(event: Event) {
	const target = event.target as HTMLInputElement
	if (target.value) setLanguage(target.value)
}
</script>
<template>
	<div class="bg-red-100 p-5 pt-16 relative">
		<h3 class="text-center text-red-400 text-xl absolute right-2 top-2">Component D</h3>
		<h3 class="pb-4 text-center text-red-400 text-xl flex">
			{{ $t('YourLanguage') }}
			<img class="ml-2" :src="$t('Flag')" />
		</h3>
		<select
			:value="language"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			@change="changeLanguage"
		>
			<option v-for="lang in constants.languages" :key="lang" :value="lang">
				{{  messages[lang].messages.Lang }}
			</option>
		</select>
	</div>
</template>

<style lang="scss" scoped>
@import url('@/styles/initTailwindMixin.scss');
</style>