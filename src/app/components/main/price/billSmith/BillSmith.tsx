"use client"
import style from './billSmith.module.scss'
import Image from 'next/image'

import billSmith from '@/images/price/billSmith.png'


const BillSmith: React.FC = (): JSX.Element => {

    return (
        <div className={style.wrapper}>
             <Image
                className={style.billSmith}
                src={billSmith}
                width={250}
                height={300}
                alt="BillSmith"
            />
            <p className={style.text}>
                This city needs a hero!
            </p>
        </div>
           
    )
  }
  export default BillSmith