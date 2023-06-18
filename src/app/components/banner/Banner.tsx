'use client'

import style from './banner.module.scss'
import Image from 'next/image'

import layerTwo from '@/images/layerTwo.png'
import layerFive from '@/images/layerFive.png'
import layerSix from '@/images/layerSix.png'
import { useEffect, useState } from 'react'

export default function Banner() {
  const [coordinate, setCoordinate] = useState(0)

  useEffect(() => {
    

    document.addEventListener('mousemove', (event) => {
      setCoordinate(event.x)
    })

    // return () => {
    //   window.removeEventListener('resize', onResize)
    // }
  }, [])
  console.log(coordinate)


  return (
    <>
      <section className={style.layers} style={{backgroundColor: 'black'}}>
        <div className={style.layers__item + ' ' + style.layers__container + ' ' + style.layerTwo }>
          <Image
            className={style.layersItem}
            src={layerTwo}
            fill
            alt="Picture of the author"
          />
          <div className={style.layers__item + ' ' + style.layerThree}>
            <div className="hero-content">
              <h1>Natural Forest <span>HTML / CSS</span></h1>
              <div className="hero-content__p">Creating a beautiful 3D website with a ‘lens effect’</div>
              <button className="button-start">Start Learning</button>
            </div>
          </div>
          {/* <div className="layers__item layer-4">
            <canvas className="rain"></canvas>
          </div> */}
          <Image
            className={style.layersItem + ' ' + style.layerFive}
            src={layerFive}
            fill
            alt="Picture of the author"
          />
          <Image
            className={style.layersItem + ' ' + style.layerSix}
            src={layerSix}
            fill
            alt="Picture of the author"
          />
        </div>
      </section>
    </>
  )
}
