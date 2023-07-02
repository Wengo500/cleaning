import style from './serviceItem.module.scss'
import Image, { StaticImageData } from 'next/image'

export default function ServiceItem (Props: any): JSX.Element {
  return (
    <>
      <div className={style.item}>
        <Image
          className={style.item__img}
          src={Props.img}
          alt="Picture of the author"
          width={250}
          height={200}
        />
          
        <div 
          className={style.item__text} 
          style={{order: `${Props.reflection > 0 ? -1 : 1}` }}
        >
          <p className={style.title}>{Props.title}</p>
          <p className={style.text}>{Props.text}</p>
        </div>
      </div> 
    </>
  )
}
