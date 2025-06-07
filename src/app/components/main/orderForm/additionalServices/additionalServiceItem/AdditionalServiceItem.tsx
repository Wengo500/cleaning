import { useState } from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import style from './additionalServiceItem.module.scss'


interface IAdditionalServiceItem {
	control: any
	item: any
}

let newArr: FieldValues[] = []

const AdditionalServiceItem:React.FC <IAdditionalServiceItem> = 
({control, item}): JSX.Element => {

	const [num, setNum] = useState(0)

	const handleClick = ( action: 'plus' | 'minus', amount: number) => {
    if (action === 'plus') setNum((n: number) => num === 20 ? 0 : n+=1)
    else setNum((n: number) => num === 0 ? 20 : n-=1)
  }

	const addItem = (item: FieldValues) => {
    const index = newArr.findIndex((el)=> el.serviceName === item.serviceName)
		const include = newArr.some((el)=> el.serviceName === item.serviceName)

		if (include && num > 0) {
			newArr = newArr.filter((_, i ) => i !== index)
			newArr = [...newArr, {...item, amount: num}]
		} else if (include && num <= 0) {
				newArr = newArr.filter((_, i ) => i !== index)
    } else if (!include) {
				num === 0 ? setNum(1) : num
				newArr = [...newArr, {...item, amount: num === 0 ? 1 : num }]
		}

    return newArr
  }

	return (
		<label className={style.additionalItem}>
			<span className={style.additionalItem_name} onClick={()=>setNum(num>0 ? 0 : num)}>
				{item.serviceName}
			</span>   
			<div className={style.amountWrap}>
				<span 
					className={style.symbols} 
					onClick={()=>handleClick('plus', item.amount)}
				>+</span>

				<span className={style.number}>{num}</span>

				<span 
					className={style.symbols} 
					onClick={()=>handleClick('minus', item.amount)}
				>-</span>
			</div>            
			<Controller
				control={control}
				name="additionalServices"
				render={({field: {onChange}}) => 
					<input
						checked={(num > 0 ? true : false)}
						className={style.checkbox}
						type='checkbox'
						value={item.serviceName} 
						onChange={()=>{
							onChange(addItem(item))
						}}
					/>}
			/>                         
		</label>
	);
}

export default AdditionalServiceItem;