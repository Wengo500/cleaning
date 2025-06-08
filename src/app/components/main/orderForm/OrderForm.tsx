'use client'
import style from './orderForm.module.scss'

import { ALL_SERVICES } from '@/utils/constants/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { RefObject, useEffect, useRef, useState } from 'react'
import { FieldValues, useForm } from "react-hook-form"
import AdditionalServices from './additionalServices/AdditionalServices'
import CleaningTypeButton from './cleaningTypeButton/CleaningTypeButton'
import CoreInputs from './coreInputs/CoreInputs'

import { validationSchema } from '@/utils/helpers/formValidation'
import { circleLinesArr } from '@/utils/helpers/helpers'
import CostCounter from './costCounter/CostCounter'
import OrderFormSuccessModal from './orderFormSuccessModal/OrderFormSuccessModal'
import SubscriptionModal from './subscriptionModal/SubscriptionModal'

interface IFormInputsArr {
  inputType: 'Full name'| 'ZIP code'| 'Date' | 'Email' | 'Phone' | 'Property size'
  reflection: boolean
  lineLength: boolean | null
}

const formInputsArr: IFormInputsArr[] = [
  {inputType: 'Email', reflection: false, lineLength: null},
  {inputType: 'Phone', reflection: false, lineLength: true},
  {inputType: 'Full name', reflection: false, lineLength: false},
  {inputType: 'Property size', reflection: true, lineLength: null},
  {inputType: 'ZIP code', reflection: true, lineLength: true},
  {inputType: 'Date', reflection: true, lineLength: false},
]


const OrderForm:React.FC = ({}): JSX.Element => {
  
  const [valid, setValid] = useState<boolean>(true)
  const [IsActiveSuccessModal, setIsActiveSuccessModal] = useState<boolean>(false)
  const [formScrollCoordinates, setFormScrollCoordinates] = useState<number>(0)
  const [subscriptionModalIsActive, setSubscriptionModalIsActive] = useState<boolean>(false)

  const {register, handleSubmit, control, getValues, watch, setValue, formState: { errors } } = useForm<any>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {}
  })

  const refForm = useRef<any>(null)
  const isErrors = Object.keys(errors).length
  const {cleaningType} = ALL_SERVICES
  const formScrollCoordinatesFnc = (ref: RefObject<HTMLElement>) => {
    if (ref.current) setFormScrollCoordinates(ref.current.scrollTop)
  }

  const submit = (data: FieldValues)=> {
    formScrollCoordinatesFnc(refForm)
    document.body.style.overflow = 'hidden'
    setIsActiveSuccessModal(true)
  }
  useEffect(()=>{
    if (isErrors > 0) setValid(false)
    else setValid(true)
  },[isErrors])

  let countDegree = 0
  let inputTop = 20

  return (
    <section className={style.wrap}>
      <form 
        ref={el => refForm.current = el}
        className={
          (IsActiveSuccessModal || subscriptionModalIsActive)
        ?
          `${style.orderForm} ${style.scrollBlock}` 
        :
          `${style.orderForm}`
        }
      >
        <h2 className={style.orderFormTitle}>Call out the heroes</h2>
        <div 
          className={style.cleaningTypeButtons_wrap} 
          onClick={()=>setSubscriptionModalIsActive(true)}
        >
          <CleaningTypeButton 
          formScrollCoordinatesFnc={formScrollCoordinatesFnc}
            refForm={refForm}
            cleaningType={cleaningType?.deepCleaning}
            control={control}
            errors={errors.cleaningType}
          />
            <CleaningTypeButton
          formScrollCoordinatesFnc={formScrollCoordinatesFnc}

            refForm={refForm}
            cleaningType={cleaningType?.regularCleaning}
            control={control}
            errors={errors.cleaningType}
          />
        </div>
        <SubscriptionModal 
          control={control}
          formScrollCoordinates={formScrollCoordinates} 
          setActive={setSubscriptionModalIsActive}
          active={subscriptionModalIsActive} 
        />
        <div className={
            !valid 
          ?
            style.circleLine__wrap_notValid 
          :
            IsActiveSuccessModal 
          ?
            `${style.circleLine__wrap} ${style.modal}` 
          :
            `${style.circleLine__wrap}`
          }
        >
          <OrderFormSuccessModal 
            formScrollCoordinates={formScrollCoordinates} 
            getValues={getValues} 
            IsActiveSuccessModal={IsActiveSuccessModal} 
            setIsActiveSuccessModal={setIsActiveSuccessModal}
          />
          <span 
            onClick={handleSubmit(submit)}
            className={valid ? style.coreButton : style.coreButtonNotValid}
          >
            {!valid ? 'X' : IsActiveSuccessModal? '' : 'GO'}
          </span>
          {
            circleLinesArr(100)?.map((el) =>{
              return  <div 
                        key={el} 
                        className={valid ? style.circleLines : style.notValid}
                        style={{transform: `rotate(${countDegree+=9}deg)`}}
                      />
            })
          }
          <div className={style.animatedArk1}></div>
          <div className={style.animatedArk2}></div>
          <div className={style.animatedArk3}></div>
          {
            formInputsArr?.map((el, idx) => {
               if (inputTop >= 110) inputTop = 20
               inputTop+=30
              return (
                <div
                  key={idx}
                  className={`${style.coreInput_wrapper} ${el.reflection ? style.reflection : ''}`}
                  style={{ bottom: `${inputTop}px` }}
                >
                  <CoreInputs
                    inputType={el.inputType}
                    reflection={el.reflection}
                    lineLength={el.lineLength}
                    register={register}
                    errors={errors}
                    control={control}
                  />
                </div>
              );
            })
          }
          <AdditionalServices 
            control={control}
            setValue={setValue}
            watch={watch}
          />
          <textarea 
            cols={22}
            rows={6} 
            placeholder='Please leave your wishes or message here'
            className={style.commentText}
            {...register(`Comment`)}
          >
          </textarea>
          <CostCounter watch={watch}/>

        </div>
      </form> 
     
    </section>
  )
}
 export default OrderForm