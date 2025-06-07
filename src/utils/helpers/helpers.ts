import { IAdditionalService, ICosts } from '../interfaces/interfaces'

export const circleLinesArr = (n: number) => Array.from({length: n}, (_, i) => i + 1);

export const handleScroll = (blockId: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const elem = document.getElementById(blockId)
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    })
  }
 
  export const costCount = (costs: ICosts) => {
    const {cleaningType, additionalsArr, propertySize} = costs
    const additionalsSum = additionalsArr?.reduce((acc: number, curr: IAdditionalService) => {
      return (curr.cost * curr.amount) + acc
    },0)
    const sum = (additionalsSum + cleaningType) + propertySize
    const tax = sum * 0.13 
    return   {sum: Math.round(sum + tax), tax: +tax.toFixed(2)} 
}

