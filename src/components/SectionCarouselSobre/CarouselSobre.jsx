import React from "react";
import S from "./CarouselSobre.module.css";
import imgHotel1 from "../../assets/image/exterior9.jpeg";
import imgHotel2 from "../../assets/image/exteriorpool.jpeg";
import imgHotel3 from "../../assets/image/burlebardining.jpeg";
import imgHotel4 from "../../assets/image/saogreenery.jpeg";
import separador from "../../assets/separator.svg";

export const CarouselSobre = () => {
  return (
    <div className={S.slider}>
      <figure className={S.figure}>
        <img className={S.img} src={imgHotel1} alt="" />
        <img className={S.img} src={imgHotel2} alt="" />
        <img className={S.img} src={imgHotel3} alt="" />
        <img className={S.img} src={imgHotel4} alt="" />
      </figure>

      <div className={S.imageContainerSeparator}>
        <img className={S.separador} src={separador}></img>
      </div>
    </div>
  );
};
