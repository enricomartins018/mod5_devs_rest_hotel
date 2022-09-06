import React from "react";
import S from "./Caroussel.module.css";
import imgQuarto1 from "../../assets/image/imgQuarto1.jpeg";
import imgQuarto2 from "../../assets/image/imgQuarto2.jpeg";
import imgQuarto3 from "../../assets/image/imgQuarto3.jpeg";
import imgQuarto4 from "../../assets/image/imgQuarto4.jpeg";
import imgQuarto5 from "../../assets/image/imgQuarto5.jpeg";
import imgQuarto6 from "../../assets/image/imgQuarto6.jpeg";
import imgQuarto7 from "../../assets/image/imgQuarto7.jpeg";
import separador from "../../assets/separator.svg";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Card/Card";

export const Caroussel = () => {
  return (
    <div className={S.slider}>
      <h3 className={S.h3}>Confira algumas das nossas acomodações.</h3>

      <figure className={S.figure}>
        <img className={S.img} src={imgQuarto1} alt="" />
        <img className={S.img} src={imgQuarto2} alt="" />
        <img className={S.img} src={imgQuarto3} alt="" />
        <img className={S.img} src={imgQuarto4} alt="" />
        <img className={S.img} src={imgQuarto5} alt="" />
      </figure>
      <div className={S.imageContainerSeparator}>
        <img className={S.separador} src={separador}></img>
      </div>
    </div>
  );
};
