import React from "react";
import S from "./Caroussel.module.css";
import imgQuarto1 from "../../assets/image/imgQuarto1.jpeg";
import imgQuarto2 from "../../assets/image/imgQuarto2.jpeg";
import imgQuarto3 from "../../assets/image/imgQuarto3.jpeg";
import imgQuarto4 from "../../assets/image/imgQuarto4.jpeg";
import imgQuarto5 from "../../assets/image/imgQuarto5.jpeg";
import imgQuarto6 from "../../assets/image/imgQuarto6.jpeg";
import imgQuarto7 from "../../assets/image/imgQuarto7.jpeg";

export const Caroussel = () => {
  return (
    <div className={S.slider} id="acomodacoes">
      <h3 className={S.h3}>Confira algumas das nossas acomodações.</h3>
      <figure className={S.figure}>
        <img className={S.img} src={imgQuarto1} alt="" />
        <img className={S.img} src={imgQuarto2} alt="" />
        <img className={S.img} src={imgQuarto3} alt="" />
        <img className={S.img} src={imgQuarto4} alt="" />
        <img className={S.img} src={imgQuarto5} alt="" />
      </figure>
    </div>
  );
};
