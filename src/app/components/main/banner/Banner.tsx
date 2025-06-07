'use client'

import Image from 'next/image'
import style from './banner.module.scss'

import { girl, leafRake, mainPerson, smog, toiletBrush } from '@/images/banner/index'

import { handleScroll } from '@/utils/helpers/helpers'
import { useMouseCoordinate, useVwVh } from '@/utils/hooks/hooks'
import Link from 'next/link'
 

const Banner: React.FC = (): JSX.Element => {
  
  const {VW, VH} = useVwVh()

  const animation = (coordinate: {y: number, x: number}) => 
  `rotateX(${(coordinate.y - VW/2) * -.005}deg) 
  rotateY(${(coordinate.x - VH/2) * -.005}deg)`

  return (
    <>
      <section className={style.layer} style={{backgroundColor: 'black'}}>
        <div 
          className={style.mainLayer}
          style={{transform: `${animation(useMouseCoordinate())}`}}
        >
          <div className={style.banner__text}>
             <h1 className={style.title}>WELCOME <br/> TO <br/>SUPER CLEANING</h1>
             <p className={style.subtitle}>The best cleaning solution</p>
             
              <Link 
                onClick={(e)=>handleScroll('services', e)}
                className={style.button}
                href="#anchor"
              >
                Start Discover
              </Link>
          </div>
           
           <Image
            className={style.toiletBrush}
            src={toiletBrush}
            width={(VH+VW) * 0.12}
            height={(VH+VW) * 0.13}
            alt="Picture of the author"
          />
          <Image
            className={style.leafRake}
            src={leafRake}
            width={(VH+VW) * 0.13}
            height={(VH+VW) * 0.23}
            alt="Picture of the author"
          />
          <Image
            className={style.girl}
            src={girl}
            width={(VH+VW) * 0.09}
            height={(VH+VW) * 0.21}
            alt="Picture of the author"
          />
          <Image
            className={style.mainPerson}
            src={mainPerson}
            width={(VH+VW) * 0.27}
            height={(VH+VW) * 0.23}
            alt="Picture of the author"
          />
          <Image
            className={style.smog}
            src={smog}
            height={600}
            width={2000}
            alt="Picture of the author"
          />
        </div>
      </section>
    </>
  )
}
export default Banner