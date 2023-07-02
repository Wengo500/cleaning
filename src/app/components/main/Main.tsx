import Banner from '@/app/components/main/banner/Banner'
import style from './main.module.scss'
import ServiceItem from './serviceItem/ServiceItem'

import { StaticImageData } from 'next/image'

import bookImg from '@/images/services/book.png'
import confirmImg from '@/images/services/confirm.png'
import enjoyImg from '@/images/services/enjoy.png'
import cleanerIconImg from '@/images/services/cleaner-icon.png'
import Price from './price/Price'
import FeedbackForm from './feedbackForm/FeedbackForm'


interface IServiceItemProp {
  img: StaticImageData
  title: string
  text: string
}

const ServiceItemProps: Array<IServiceItemProp> = [
  {
    img: bookImg,
    title: 'Book',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facere sunt harum fuga reprehenderit aperiam consequuntur mollitia facilis veniam nihil!',
  },
  {
    img: confirmImg,
    title: 'Confirm',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facere sunt harum fuga reprehenderit aperiam consequuntur mollitia facilis veniam nihil!',
  },
  {
    img: enjoyImg,
    title: 'Enjoy',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facere sunt harum fuga reprehenderit aperiam consequuntur mollitia facilis veniam nihil!',
  },
  {
    img: cleanerIconImg,
    title: 'Cleaner',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et facere sunt harum fuga reprehenderit aperiam consequuntur mollitia facilis veniam nihil!',
  },
  
]

export default function Main() {

  return (
    <main>
      <Banner/>
      <section className={style.sections}>
        <p className={style.sectionTitle}>What we can do?</p>
      {
        ServiceItemProps?.map((el, idx) => {
          return <ServiceItem 
                    img={el.img} 
                    title={el.title}
                    text={el.text} 
                    reflection={(idx+1)%2 ? false : true}
                  />
        })
      }
      </section>
      <section className={style.sections}>
        <p className={style.sectionTitle}>How much would it cost?</p>
        <Price/>
      </section>
      <section className={style.sections}>
        <p className={style.sectionTitle}>How to order a service?</p>
        <FeedbackForm/>
      </section>
    </main>
  )
}
