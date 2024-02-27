import { type App } from 'vue'

import ComponentA from '@/components/ComponentA.ce.vue'
import ComponentB from '@/components/ComponentB.ce.vue'
import ComponentC from '@/components/ComponentC.ce.vue'
import ComponentD from '@/components/ComponentD.ce.vue'

export default {
	install: (app: App) => {
		app.component('ComponentA', ComponentA)
		app.component('ComponentB', ComponentB)
		app.component('ComponentC', ComponentC)
		app.component('ComponentD', ComponentD)
	}
}