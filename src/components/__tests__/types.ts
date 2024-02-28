import { type Ref, type ComponentPublicInstance } from 'vue'

export type WithCounter = {
	counter: Ref
}

export interface EnrichedComponent extends ComponentPublicInstance<NonNullable<Partial<{}>>> {
	counter: Ref
}