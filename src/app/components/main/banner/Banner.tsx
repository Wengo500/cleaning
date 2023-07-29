'use client'

import style from './banner.module.scss'
import Image from 'next/image'

import mainPerson from '@/images/banner/mainPerson.png'
import girl from '@/images/banner/girl.png'
import toiletBrush from '@/images/banner/toiletBrush.png'
import leafRake from '@/images/banner/leafRake.png'

import smog from '@/images/banner/smog.png'

import { useEffect, useState } from 'react'

import Spline from '@splinetool/react-spline';

import { Raleway } from '@next/font/google'
 
const font = Raleway({ weight: "500", subsets: ['latin']})

export default function Banner() {
  const [coordinate, setCoordinate] = useState({y:0, x: 0})

  const VW = window.innerWidth
  const VH = window.innerHeight


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
            `rotateX(${(coordinate.y - window.innerWidth/2) * -.005}deg) 
            rotateY(${(coordinate.x - window.innerHeight/2) * -.005}deg)`}}
        >
          
          <div className={style.banner__text}>
             <h1 className={style.title + ' ' + font.className}>WELCOME <br/> TO <br/>CLEANING HERO</h1>
             <p className={style.subtitle}>The best cleaning solution</p>
             <button className={style.batton}>Start Discover</button>
             {/* <Spline scene="https://prod.spline.design/oaXlzsYVnD-bR-4C/scene.splinecode" /> */}
          </div>
           
           <Image
            className={style.toiletBrush}
            src={toiletBrush}
            width={(VH+VW) * 0.15}
            height={(VH+VW) * 0.35}
            alt="Picture of the author"
          />
          <Image
            className={style.leafRake}
            src={leafRake}
            width={(VH+VW) * 0.18}
            height={(VH+VW) * 0.33}
            alt="Picture of the author"
          />
          <Image
            className={style.girl}
            src={girl}
            width={(VH+VW) * 0.1}
            height={(VH+VW) * 0.22}
            alt="Picture of the author"
          />
          <Image
            className={style.mainPerson}
            src={mainPerson}
            width={(VH+VW) * 0.32}
            height={(VH+VW) * 0.27}
            alt="Picture of the author"
          />
          <Image
            className={style.smog}
            src={smog}
            height={400}
            width={2000}
            alt="Picture of the author"
          />
        </div>
      </section>
    </>
  )
}
