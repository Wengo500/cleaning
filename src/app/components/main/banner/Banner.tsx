'use client'

import style from './banner.module.scss'
import Image from 'next/image'

import table from '@/images/banner/table.png'
import Tamara from '@/images/banner/Tamara.png'
import armchair from '@/images/banner/armchair.png'
import leaves from '@/images/banner/leaves.png'

import { useEffect, useState } from 'react'

import Spline from '@splinetool/react-spline';



export default function Banner() {
  const [coordinate, setCoordinate] = useState({y:0, x: 0})

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      setCoordinate({x: event.x, y: event.y})
    })

    return () => {
      document.removeEventListener('mousemove', (event) => event)
    }
  }, [])

  return (
    <>
      <section className={style.layer} style={{backgroundColor: 'black'}}>
        <div 
          className={style.mainLayer}
          style={{transform: 
            `rotateX(${(coordinate.y - window.innerWidth/2) * -.003}deg) 
            rotateY(${(coordinate.x - window.innerHeight/2) * -.003}deg)`}}
        >
          <Image
            className={style.table}
            src={table}
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <div className={style.banner__text}>
              <h1 className={style.title}>Профиссиональная уборка</h1>
              <p className={style.subtitle}>"Чистота и свежесть дома – наша забота! <span>Полный спектр клининговых услуг.</span> Закажите прямо сейчас!"</p>
              <button>Start Learning</button>
              {/* <Spline scene="https://prod.spline.design/oaXlzsYVnD-bR-4C/scene.splinecode" /> */}
          </div>
          <Image
            className={style.Tamara}
            src={Tamara}
            width={350}
            height={520}
            alt="Picture of the author"
          />
          <Image
            className={style.armchair}
            src={armchair}
            width={370}
            height={370}
            alt="Picture of the author"
          />
          <Image
            className={style.leaves}
            src={leaves}
            fill
            alt="Picture of the author"
          />
        </div>
      </section>
    </>
  )
}
