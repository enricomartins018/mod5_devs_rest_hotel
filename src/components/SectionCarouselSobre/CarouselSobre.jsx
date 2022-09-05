import React from "react";
import S from './CarouselSobre.module.css'
import imgHotel1 from '../../assets/image/imgHotel1.jpg'
import imgHotel2 from '../../assets/image/imgHotel2.jpg'
import imgHotel3 from '../../assets/image/imgHotel3.jpg'
import imgHotel4 from '../../assets/image/imgHotel4.jpg'

export const CarouselSobre = () => {
  return (
    <div className={S.slider}>
      <figure className={S.figure}>
        <img className={S.img} src={imgHotel1} alt="" />
        <img className={S.img} src={imgHotel2} alt="" />
        <img className={S.img} src={imgHotel3} alt="" />
        <img className={S.img} src={imgHotel4} alt="" />
      </figure>
    </div>
  );
};
