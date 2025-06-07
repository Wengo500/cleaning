import { Comic_Neue } from 'next/font/google'
import style from './serviceCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import { useLayoutEffect, useRef } from 'react'
import { useElemSize } from '@/utils/hooks/hooks';

interface IServiceCard{
  reflection: boolean
  title: String
  text: String | Array<String>
  itemImg: StaticImageData
  timeline: any
}

gsap.registerPlugin(ScrollTrigger);

const font = Comic_Neue({ weight: "700", subsets: ['latin']})

const ServiceCard:React.FC<IServiceCard> = ({
  reflection,
  title, 
  text, 
  itemImg, 
}): JSX.Element => {
 
const {elemHeight, ref} = useElemSize()
const card = useRef<null | HTMLElement>(null)

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: card.current,
        start: "top top",
        end: "bottom bottom",
      },
    })
    .from(card.current, 
      {
        opacity: 0,
        transform: reflection ? 'translateX(500px)' : 'translateX(-500px)',
        skewY: reflection ? -30 : 30,
        ease: 'bounce',
        duration: 1.5
    },
    )
  }, card); // <- Scope!
  return () => ctx.revert(); // <- Cleanup!
}, []);

  return (
        
      <div 
        ref={el => card.current = el}
        className={reflection ? `${style.card} ${style.reflectionCard}` : style.card}
      >
        <Image
          className={style.card_img}
          src={itemImg}
          alt="Character"
          width={300}
          height={400}
        />
          <div 
            className={style.card_text}
            style={{ backgroundSize: `${elemHeight*1.5}px`}}
          >
            <p className={`${style.card_title} ${font.className}`}>{title}</p>
            <p ref={el => ref.current = el} className={`${style.card_p} ${font.className}`}>{text}</p>
          </div>
      </div> 
  )
}
 export default ServiceCard