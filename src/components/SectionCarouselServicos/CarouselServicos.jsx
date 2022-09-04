import React from 'react'
import S from './CarouselServicos.module.css'
import servicosImg1 from '../../assets/image/servicosImg1.jpg'
import servicosImg2 from '../../assets/image/servicosImg2.jpg'
import servicosImg3 from '../../assets/image/servicosImg3.jpg'
import servicosImg4 from '../../assets/image/servicosImg4.jpg'
import servicosImg5 from '../../assets/image/servicosImg5.jpg'

export const CarouselServicos = () => {
  return (
    <div className={S.slider}>
    <figure className={S.figure}>
      <img className={S.img} src={servicosImg1} alt="" />
      <img className={S.img} src={servicosImg2} alt="" />
      <img className={S.img} src={servicosImg3} alt="" />
      <img className={S.img} src={servicosImg4} alt="" />
      <img className={S.img} src={servicosImg5} alt="" />
    </figure>
  </div>
  )
}
