'use client'

import { ALL_SERVICES } from '@/utils/constants/constants'
import style from './additionalServices.module.scss'

import { Control, FieldValues } from "react-hook-form"
import AdditionalServiceItem from './additionalServiceItem/AdditionalServiceItem'


const AdditionalServices:React.FC <{ control: Control<FieldValues> }> = 
({ control }): JSX.Element => {

  let countDegree = 12
  const {additionalServices} = ALL_SERVICES

  return (
    <ul className={style.additionals}>
      {additionalServices?.map((el: FieldValues, idx: number)=> {
        return (
        <li
          key={idx}
          className={style.itemWrap}
          style={{transform: `rotate(${countDegree-=6}deg)`}}
        >
          <AdditionalServiceItem 
            control={control} 
            item={el} 
          />
        </li>
      )})}
    </ul>
  )
}

export default AdditionalServices