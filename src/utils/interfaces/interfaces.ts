export const DEEP_CLEANING = 'Deep Cleaning'
export const REGULAR_CLEANING = 'Regular Cleaning'

export type TServiceName = 'Washing dishes (per 10)' | 'Additional bathroom (for each)' | 'Additional bedroom (for each)' | 'Raking (per 50 Sqft)' | 'AC systems and filters (for each)' | 'Outdoor part of AC systems (for each)' | 'Windows cleaning (for each)' | 'Appliance cleaning (for each)' | 'Inside furniture (for each)'

export interface IAdditionalService {
	cost: number
	amount: number
	serviceName: string
}

export interface ICosts {
	cleaningType: number
	propertySize: number
	additionalsArr: IAdditionalService[]
}

export interface IFormValues {
	Phone: string
	'Full name': string
	Email: string
	Date: string
	'ZIP code': string
	'Property size': {
		label: string
		value: number
	}
	cleaningType: {
		type: typeof DEEP_CLEANING | typeof REGULAR_CLEANING
		cost: number
	}
	subscriptions?: [
			{
					subscriptionTitle: string
					discount: number
			}
	]
	additionalServices?: [
		{
			serviceName: TServiceName
			cost: number
			amount: number
		}
	]
	Comment?: string
}

export interface ISubscriptions{
	subscriptionTitle: string
	discount: number
}

export interface IAdditionalServices {
	cost: number
	serviceName: TServiceName
	amount: number
}

export interface ICleaningType {
	deepCleaning: {
			cost: number
			type: typeof DEEP_CLEANING
	}
	regularCleaning: {
			cost: number
			type: typeof REGULAR_CLEANING
	}
}

export interface IPropertySize {
	value: number
	label: string
}

export interface IAllServices {
	cleaningType: ICleaningType
	subscriptions: Array<ISubscriptions>
	additionalServices: Array<IAdditionalServices>
	propertySize:  Array<IPropertySize>
}