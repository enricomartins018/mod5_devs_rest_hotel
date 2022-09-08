import React from "react";
import S from "./Caroussel.module.css";
import imgQuarto1 from "../../assets/image/suitemaster2.jpeg";
import imgQuarto2 from "../../assets/image/suitemaster.jpeg";
import imgQuarto3 from "../../assets/image/room-deluxe-suite-2.jpeg";
import imgQuarto4 from "../../assets/image/room-junior-suite-deluxe-bathroom.jpeg";
import imgQuarto5 from "../../assets/image/room-prestige-suite-room-3.jpeg";
import separador from "../../assets/separator.svg";
import { Link } from "react-router-dom";

export const Caroussel = () => {
  return (
    <div className={S.slider} id="acomodacoes">
      <h3 className={S.pTitleHomeQuarto}>QUARTOS & SUÍTES</h3>

      <p className={S.pCarrossel}>
        Com arquitetura de interiores confiada a dois dos mais conceituados
        escritórios brasileiros, o Bick Simonato e o Anastassiadis, que criaram
        um conceito de design exclusivo para cada espaço, o Dev`s Rest Hotel
        possui 141 espaçosos apartamentos – sendo 59 suítes – todos com
        deslumbrantes vistas para o Parque Burle Marx.
      </p>
      <Link className={S.linkQuarto} to="/quartos">
        Saiba mais!
      </Link>
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
