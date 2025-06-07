"use client"
import style from './price.module.scss'
import Image from 'next/image'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import light from '@/images/price/light.svg'
import tower from '@/images/price/tower.png'

import skyscrapers from '@/images/price/skyscrapers.png'
import { useVwVh, useMouseCoordinate } from '@/utils/hooks/hooks'

import BillSmith from './billSmith/BillSmith'
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Price: React.FC = (): JSX.Element => {

    const {VW, VH} = useVwVh()
    const {x, y} = useMouseCoordinate()

    const billSmithRef = useRef<HTMLElement | null>(null)
    useLayoutEffect(()=>{
       const ctx = gsap.context(()=>{
            gsap.timeline({
                scrollTrigger: {
                    trigger: billSmithRef.current,
                    start: 'top bottom',
                    end: 'top 100%',
                  },
            })
            .to(billSmithRef.current,{
                transform: 'translateY(-200px)', 
                opacity: 1,
                transition: 1,

            },"+=1" )
        })
        return () => ctx.revert();
    },[])


    return (
        <section className={style.price}>
            <div className={style.content__wrap}
            style={{transform: 
                `rotateX(${(y - VW/2) * -.001}deg) 
                rotateY(${(x - VH/2) * -.001}deg)`}}
            >
            <h2 className={style.price__title}>How much would it cost?</h2>

                <Image
                    className={style.tower}
                    src={tower}
                    width={VW*.05}
                    height={VH/2}
                    alt="Picture of the author"
                />
                <Image
                    className={style.light}
                    style={{
                        transform: `rotate(15deg) translateZ(49px) skew(${-y/20+'deg'}` 
                    }}
                    src={light}
                    width={VW/7.5}
                    height={VH/2 + x * .25}
                    alt="Picture of the author"
                />
                <Image
                    className={style.skyscrapers}
                    src={skyscrapers}
                    width={VW}
                    height={VH/2}
                    alt="Picture of the author"
                />
                <div className={style.price__text}>
                    <p className={style.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ratione voluptatum enim praesentium quisquam repellendus molestiae quo dolore illo.
                    </p>
                    <p className={style.paragraph}>
                        плата за additional services делится на 2 типа
                        за время
                        washing dishes
                        lawn cleaning, raking
                        и за единицу
                        cleaning AC systems and filters
                        cleaning outdoor part of AC systems 
                        windows cleaning
                        appliance cleaning - inside of ovens, microwaves, etc.
                    </p>
                </div>
             
            </div>
            <div ref={el=> billSmithRef.current = el} className={style.billSmithWrap}>
                <BillSmith/>
            </div>
            
        </section>
    )
  }
  export default Price