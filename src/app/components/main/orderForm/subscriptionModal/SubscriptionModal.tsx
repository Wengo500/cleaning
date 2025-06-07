import { ALL_SERVICES } from '@/utils/constants/constants'
import style from './subscriptionModal.module.scss'
import { Controller } from 'react-hook-form'

interface ISubscriptionModal {
	active: boolean
	setActive: any
	formScrollCoordinates: any
	control: any
}

const SubscriptionModal:React.FC <ISubscriptionModal> = ({
	active, setActive, formScrollCoordinates, control
}) => {
const {subscriptions} = ALL_SERVICES
	return <>
			<div 
					style={active ? { top: `${formScrollCoordinates - 100}px`, opacity: 1, visibility: 'visible'} : {}}
					className={style.wrapper}>
					<div className={style.modal} 
						style={active ? {transform: 'scale(1,1)'} : {}}
					>
						<h3 className={style.title}>Would you like to sign up for recurring cleanings 
						and receive a discount on each next one?</h3>
						<ul className={style.options}>
						{
							subscriptions?.map((el: any ,idx: number)=>{
								return <label key={idx} className={style.option}>
									{el.subscriptionTitle}
									<Controller
										control={control}
										name="subscriptions"
										render={({field: {onChange}}) => 
											<input 
												className={style.radio}
												type='radio'
												name='subscriptions'
												onChange={()=>{
													onChange({
														subscriptionTitle: el.subscriptionTitle,
														discount: el.discount
													})
												}}
											/>}
									/>
								</label>
							})
						}
						</ul>
						<div className={style.buttonsWrap}>
							<span className={style.confirm} onClick={()=>setActive(false)}>Confirm</span>
						</div>
						
					</div>
					
				</div>
	</>
	
		
	
}

export default SubscriptionModal;