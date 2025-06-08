'use client'
import { handleScroll } from '@/utils/helpers/helpers'
import { useVwVh } from '@/utils/hooks/hooks'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import Confetti from 'react-confetti'
import style from './orderFormSuccessModal.module.scss'

interface IOrderFormSuccessModal {
    IsActiveSuccessModal: boolean, 
    getValues: any, 
    setIsActiveSuccessModal: any
    formScrollCoordinates: number
}

gsap.registerPlugin()

const OrderFormSuccessModal:React.FC<IOrderFormSuccessModal> = ({formScrollCoordinates, getValues, IsActiveSuccessModal, setIsActiveSuccessModal}): JSX.Element => {
    const {VW, VH} = useVwVh()
    const popupRef = useRef<HTMLDivElement | null>(null)
    const confettiRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(()=>{
        if (IsActiveSuccessModal) {
             gsap.timeline().to(popupRef.current, {
                transform: 'translateY(110vh)', 
                delay: 3,
                ease: 'bounce',
                display: 'flex',
                duration: 2.5
            } ).to(confettiRef.current, {
                transform: 'translateY(110vh)', 
                display: 'flex',
                duration: 3
            })
        }
    },[IsActiveSuccessModal])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setIsActiveSuccessModal(false)
        handleScroll('services', e)
        document.body.style.overflowY = 'scroll';
    }
   return   <>
                { IsActiveSuccessModal && 
                    <div
                        className={style.popupWrap} 
                        style={{top: `${-500+formScrollCoordinates}px`}}
                    >
                        <div ref={el=> confettiRef.current = el} className={style.confettiWrap}>
                            <Confetti
                                numberOfPieces={100}
                                width={VW}
                                height={VH}
                            />
                        </div>
                        <div ref={el=> popupRef.current = el} className={style.modal}>
                            <h3 className={style.title}>Congratulations</h3>
                            <div className={style.dataWrap}>
                                <ul className={style.UserData}>
                                    <li className={style.userData__item}>
                                        <span className={style.itemHead}>Full name: </span>
                                        {getValues()['Full name']}
                                    </li>
                                    <li className={style.userData__item}>
                                        <span className={style.itemHead}>Phone: </span>
                                        {getValues()['Phone']}
                                    </li>
                                    <li className={style.userData__item}>
                                        <span className={style.itemHead}>Email: </span>
                                        {getValues()['Email']}
                                    </li>
                                    <li className={style.userData__item}>
                                        <span className={style.itemHead}>Date: </span>
                                        {getValues()['Date']}
                                    </li>
                                    <li className={style.userData__item}>
                                        <span className={style.itemHead}>ZIP code: </span>
                                        {getValues()['ZIP code']}
                                    </li>
                                    <li className={style.userData__item}>
                                        <span className={style.itemHead}>Property size: </span>
                                        {getValues()['Property size'].label}
                                    </li>
                                </ul>

                                <span className={style.cleaningType}> 
                                    <span className={style.itemHead}>Cleaning type: </span>
                                    {getValues().cleaningType.type} 
                                </span>

                                <span className={style.subscription}> 
                                    <span className={style.itemHead}>Subscription: </span>
                                    {getValues().subscriptions?.subscriptionTitle} from the second order
                                </span>

                                <p className={style.additionals}>
                                    <span className={style.itemHead}>Additional services: </span> 
                                    {getValues().additionalServices?.map((el: any, idx: number)=> <span key={idx} >{el.serviceName},</span>)}
                                </p>
                                <p className={style.comment}>
                                    <span className={style.itemHead}>Comment: </span> 
                                    {getValues().Comment}
                                </p>
                                <Link 
                                    onClick={(e)=>handleClick(e)}
                                    className={style.button}
                                    href="#anchor"
                                >
                                Go back to main page
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </>
}

export default OrderFormSuccessModal