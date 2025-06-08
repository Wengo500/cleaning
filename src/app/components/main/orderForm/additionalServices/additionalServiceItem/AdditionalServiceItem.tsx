import { useState, useCallback } from 'react'
import { Controller } from 'react-hook-form'
import style from './additionalServiceItem.module.scss'
import { IAdditionalServiceItemProps } from '../../../../../utils/interfaces/interfaces'

const AdditionalServiceItem: React.FC<IAdditionalServiceItemProps> = 
({ control, additionalService, setValue, watch }): JSX.Element => {

	const [num, setNum] = useState(0)
	const currentServices = watch('additionalServices') || []

	const handleClick = useCallback((action: 'plus' | 'minus') => {
		if (action === 'plus') {
			setNum((n: number) => n >= 20 ? 20 : n + 1)
		} else {
			setNum((n: number) => n <= 0 ? 0 : n - 1)
		}
	}, [])

	const updateServices = useCallback((newAmount: number) => {
		const existingIndex = currentServices.findIndex(
			(service: any) => service.serviceName === additionalService.serviceName
		)

		let updatedServices = [...currentServices]

		if (newAmount > 0) {
			const serviceItem = {
				serviceName: additionalService.serviceName,
				cost: additionalService.cost,
				amount: newAmount
			}

			if (existingIndex >= 0) {
				updatedServices[existingIndex] = serviceItem
			} else {
				updatedServices.push(serviceItem)
			}
		} else {
			if (existingIndex >= 0) {
				updatedServices.splice(existingIndex, 1)
			}
		}

		setValue('additionalServices', updatedServices)
		return updatedServices
	}, [currentServices, additionalService, setValue])

	return (
		<label className={style.additionalItem}>
			<span 
				className={style.additionalItem_name} 
				onClick={() => {
					const newNum = num > 0 ? 0 : 1
					setNum(newNum)
					updateServices(newNum)
				}}
				role="button"
				tabIndex={0}
				aria-label={`Select ${additionalService.serviceName}`}
			>
				{additionalService.serviceName}
			</span>   
			<div className={style.amountWrap}>
				<span 
					className={style.symbols} 
					onClick={() => {
						const newNum = num >= 20 ? 20 : num + 1
						setNum(newNum)
						updateServices(newNum)
					}}
					role="button"
					tabIndex={0}
					aria-label="Increase amount"
				>+</span>

				<span className={style.number}>{num}</span>

				<span 
					className={style.symbols} 
					onClick={() => {
						const newNum = num <= 0 ? 0 : num - 1
						setNum(newNum)
						updateServices(newNum)
					}}
					role="button"
					tabIndex={0}
					aria-label="Decrease amount"
				>-</span>
			</div>            
			<Controller
				control={control}
				name="additionalServices"
				render={({ field: { value } }) => 
					<input
						checked={num > 0}
						className={style.checkbox}
						type="checkbox"
						value={additionalService.serviceName}
						onChange={() => {
							const newNum = num > 0 ? 0 : 1
							setNum(newNum)
							updateServices(newNum)
						}}
						aria-label={`Toggle ${additionalService.serviceName}`}
					/>
				}
			/>                         
		</label>
	);
}

export default AdditionalServiceItem;