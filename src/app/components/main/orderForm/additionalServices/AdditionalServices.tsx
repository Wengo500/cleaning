'use client'

import { ALL_SERVICES } from '@/utils/constants/constants'
import style from './additionalServices.module.scss'

import { Control, FieldValues, UseFormSetValue, UseFormWatch } from "react-hook-form"
import AdditionalServiceItem from './additionalServiceItem/AdditionalServiceItem'
import { IAdditionalServices } from '@/utils/interfaces/interfaces'

interface IAdditionalServicesProps {
  control: Control<FieldValues>
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
}

const AdditionalServices: React.FC<IAdditionalServicesProps> = 
({ control, setValue, watch }): JSX.Element => {

  let countDegree = 12
  const { additionalServices } = ALL_SERVICES

  return (
    <ul className={style.additionals}>
      {additionalServices?.map((service: IAdditionalServices, idx: number) => {
        return (
        <li
          key={idx}
          className={style.itemWrap}
          style={{transform: `rotate(${countDegree -= 6}deg)`}}
        >
          <AdditionalServiceItem 
            control={control} 
            additionalService={service}
            setValue={setValue}
            watch={watch}
          />
        </li>
      )})}
    </ul>
  )
}

export default AdditionalServices