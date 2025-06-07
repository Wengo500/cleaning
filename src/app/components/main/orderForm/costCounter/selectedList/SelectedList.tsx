import style from './selectedList.module.scss'

interface IListData {
    cleaningType: string
    cleaningTypeCost: number
    propertySize: number
    propertySizeLabel: string
    additionalsArr: []
}

const SelectedList = ( {tax, watch}: any) => {

    const listData: IListData = {
        cleaningType: watch()?.cleaningType?.type,
        cleaningTypeCost: watch()?.cleaningType?.cost,
        propertySize: watch()?.['Property size']?.value,
        propertySizeLabel: watch()?.['Property size']?.label,
        additionalsArr: watch()?.additionalServices
    }
    const {cleaningType, cleaningTypeCost, propertySize, propertySizeLabel, additionalsArr} = listData

    return  <div className={style.wrap}>
                <span>SALES TAX: ${tax}</span>
                {cleaningType && (<span className={style.typeOfCleaning}>{cleaningType} ${cleaningTypeCost}</span>)}                
                {propertySizeLabel && (<span className={style.propertySize}>{propertySizeLabel}: ${propertySize}</span>)}
                <ul className={style.additions}>
                    {additionalsArr?.map((el: any, idx: number) => {
                        return  <li key={idx} className={style.additions__item}>
                                    {el.serviceName}: $ {el.cost} {el.amount > 1 ? `x ${el.amount}` : ''}
                                </li>
                    })}
                </ul>
            </div>
}
 
export default SelectedList;