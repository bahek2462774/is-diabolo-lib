import { defineCustomElement } from 'vue'

import ComponentA from './components/ComponentA.ce.vue'
import ComponentB from './components/ComponentB.ce.vue'
import ComponentC from './components/ComponentC.ce.vue'
import ComponentD from './components/ComponentD.ce.vue'

const WebComponentA = defineCustomElement(ComponentA)
const WebComponentB = defineCustomElement(ComponentB)
const WebComponentC = defineCustomElement(ComponentC)
const WebComponentD = defineCustomElement(ComponentD)

function register() {
	customElements.define('component-a', WebComponentA)
	customElements.define('component-b', WebComponentB)
	customElements.define('component-c', WebComponentC)
	customElements.define('component-d', WebComponentD)
}

register()