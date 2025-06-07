import { costCount } from '@/utils/helpers/helpers'
import { ICosts } from '@/utils/interfaces/interfaces'
import { useMemo } from 'react'
import style from './costCounter.module.scss'
import SelectedList from './selectedList/SelectedList'

interface CostCounterProps {
    watch: () => {
      cleaningType?: { cost?: number };
      'Property size'?: { value?: number };
      additionalServices?: [];
    };
  }

const CostCounter = ({watch}: CostCounterProps) => {
let result = {sum: 0, tax: 0}
 
    const costs: ICosts = {
        cleaningType: watch()?.cleaningType?.cost ?? 0,
        propertySize: watch()?.['Property size']?.value ?? 0,
        additionalsArr: watch()?.additionalServices ?? [],
    }

    useMemo(()=>{
        result = costCount(costs)
    },[costs])

    return  <div className={style.wrap}>
              <span className={style.number}>${result.sum}</span>
              <span className={style.label} >Estimated price</span>
              <div className={style.costCounter}></div>
              <SelectedList tax={result.tax} watch={watch}/>
            </div>
}
 
export default CostCounter;