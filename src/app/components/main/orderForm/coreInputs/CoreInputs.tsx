'use client'
import { ALL_SERVICES } from '@/utils/constants/constants'
import { Control, Controller, FieldValues, UseFormRegister } from "react-hook-form"
import Select from 'react-select'
import style from './coreInputs.module.scss'
import './customSelect.scss'
interface CoreInputProps {
    inputType: string
    reflection: boolean
    lineLength: boolean | null
    register: UseFormRegister<FieldValues>
    // errors: FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined
    errors: any
    control: Control<FieldValues>
  }

const CoreInputs:React.FC <CoreInputProps> = ({
    register,
    inputType,
    reflection,
    lineLength,
    control,
    errors
}): JSX.Element => {
  const valid: boolean = errors?.[inputType] ? false : true
  const placeholder: string = valid ? inputType : errors?.[inputType]?.message

  const {propertySize} = ALL_SERVICES

  return (
    <>
      {
          inputType === 'Date' 
        ? 
          (<Controller
            control={control}
            name='Date'
            render={({ field }) => (
              (<input  
                {...register('Date')}
                type="date" 
                id="start" 
                name="trip-start" 
                onChange={(date) => field.onChange(date)}
                className={style.dataList}
              />) 
            )}
          />)
        :
          inputType === 'Property size' 
        ?
        (
          <Controller
            name="Property size"
            control={control}
            render={({ field }) => <Select 
              placeholder={valid ? 'Property size Sqft' : errors?.[inputType]?.label.message}
              className={style.coreSelect} 
              classNamePrefix="react-select"
              {...field} 
              options={propertySize} 
            />}
          />
        )
        :
        (<input
          {...register(`${inputType}`)}
          className={style.coreInput}
          placeholder={placeholder}
        />)
      }
        <span 
          className={
            lineLength === true 
          ? 
            `${style.inputLine} ${style.lineLength1} ${(valid ? '' : style.notValid)}`
          :
            lineLength === false 
          ? 
            `${style.inputLine} ${style.lineLength2} ${(valid ? '' : style.notValid)}`
          :
            `${style.inputLine} ${(valid ? '' : style.notValid)}`
          }
          style={reflection ? {transform: 'scale(-1, 1)'} : {}}
        /> 
    </>
        
  )
}

export default CoreInputs 