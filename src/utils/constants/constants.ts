import { DEEP_CLEANING, IAllServices, REGULAR_CLEANING } from '../interfaces/interfaces'



   
export const ALL_SERVICES: IAllServices = {
    cleaningType: {
        deepCleaning: {
            cost: 190, 
            type: DEEP_CLEANING
        },
        regularCleaning: {
            cost: 100, 
            type: REGULAR_CLEANING
        },
    },
    subscriptions: [
        {subscriptionTitle: 'Weekly - 20% off', discount: .2},
        {subscriptionTitle: 'Biweekly - 15% off', discount: .15},
        {subscriptionTitle: 'Monthly - 10% off', discount: .1},
        {subscriptionTitle: 'One time', discount: 1},

    ],
    additionalServices: [
        {serviceName: 'Appliance cleaning (for each)', cost: 30, amount: 0},
        {serviceName: 'Inside furniture (for each)', cost: 20, amount: 0},
        {serviceName: 'AC systems and filters (for each)', cost: 60, amount: 0},
        {serviceName: 'Outdoor part of AC systems (for each)', cost: 130, amount: 0},
        {serviceName: 'Raking (per 50 Sqft)', cost: 20, amount: 0},
        {serviceName: 'Windows cleaning (for each)', cost: 15, amount: 0},
        {serviceName: 'Additional bedroom (for each)', cost: 60, amount: 0},
        {serviceName: 'Additional bathroom (for each)', cost: 30, amount: 0},
    ],
    propertySize: [
        { value: 25, label: "250-500 Sqft" },
        { value: 40, label: "500-1000 Sqft" },
        { value: 55, label: "1000-1500 Sqft" },
        { value: 75, label: "1500-2000 Sqft" },
        { value: 90, label: "2000-2500 Sqft" },
        { value: 105, label: "2500-3000 Sqft" },
        { value: 135, label: "3000-3500 Sqft" },
        { value: 155, label: "3500-4000 Sqft" },
        { value: 175, label: "4000-4500 Sqft" },
        { value: 195, label: "4500-5000 Sqft" },
        { value: 235, label: "5000-6000 Sqft" },
        { value: 330, label: "6000-7000 Sqft" },
        { value: 435, label: "7000-8000 Sqft" },
        { value: 530, label: "8000-9000 Sqft" },
    ]
}
