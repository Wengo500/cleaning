'use client'

import style from './services.module.scss'
import { StaticImageData } from 'next/image'

import ServiceCard from './serviceCard/ServiceCard'

import { gsap } from 'gsap';

import hulk from '@/images/services/hulk.png'
import spiderMan from '@/images/services/spiderMan.png'


interface IServiceCards {
  itemImg: StaticImageData
  title: String
  text: String
}

const Services:React.FC = (): JSX.Element => {

  const tl: gsap.core.Timeline = gsap.timeline();

  const serviceCards: Array<IServiceCards> = [
    { itemImg: hulk, 
      title: 'Regular cleaning', 
      text: 'involves consistent upkeep through tasks like dusting, vacuuming, mopping, and surface wiping to maintain cleanliness and orderliness. This routine is often used as a weekly subscription service to prevent dirt and clutter accumulation.'
    },

    { itemImg: spiderMan, 
      title: 'Deep cleaning', 
      text: 'Deep cleaning is a meticulous cleaning process that becomes necessary after events like construction or repair work, during relocation, or in various situations where a thorough and extensive cleaning is required. Unlike regular cleaning routines, deep cleaning targets hard-to-reach areas, removes stubborn grime and dirt buildup. It is often employed after significant events that can introduce excess dust, debris, or mess into an environment. This type of cleaning is essential to restore spaces to a high standard of cleanliness and hygiene.  Deep cleaning ensures a comprehensive approach to maintaining the overall cleanliness and sanitation of the area.'
    },
    { itemImg: hulk, 
      title: 'Additional services', 
      text: 'In addition to cleaning you can order such services as: washing dishes, lawn cleaning, raking, windows cleaning and others. To save more of your time and bring your home or office to the ideal of cleanliness.'
    },
  ]

  return (
    <>
      <section className={style.services}  id="services">
        <h2 className={style.services__title}>What we can do?</h2>
        <div className={style.cardsWrapper}>
        {
          serviceCards?.map((el, idx) => {
            return  <ServiceCard 
                      key={idx}
                      timeline={tl}
                      itemImg={el.itemImg} 
                      title={el.title} 
                      text={el.text} 
                      reflection={(idx+1)%2 ? false : true}
                    />
          })
        }
        </div>
      </section>
    </>
  )
}
export default Services