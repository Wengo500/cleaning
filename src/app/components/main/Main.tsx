import style from './main.module.scss'

import Services from './services/Services'
import Price from './price/Price'
import OrderForm from './orderForm/OrderForm'
import Banner from './banner/Banner'


export default function Main() {
  return (
    <main className={style.main}>
      <Banner/>
      <Services/>
      <Price/>
      <OrderForm/>
    </main>
  )
}
