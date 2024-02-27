import constants from '@/constants'

export type Language = (typeof constants.languages)[number]

export type Messages = {
	[key: Language]: {
		messages: {
			[key: string]: string
		}
	}
}

export interface I18NState {
	[key: string]: Language
}