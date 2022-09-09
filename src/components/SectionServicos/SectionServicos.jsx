import React from "react";
import CardArgilo from "../CardArgilo/CardArgilo";
import CardBambu from "../CardBambu/CardBambu";
import CardSpa from "../CardSpa/CardSpa";
import S from "./SectionServicos.module.css";
import separador from "../../assets/separator.svg";
const SectionServicos = () => {
  return (
    <section className={S.section} id="servicos">
      <div className={S.imageContainerSeparator}>
        <img className={S.separador} src={separador}></img>
      </div>
      <h2 className={S.subtitulo}>Conheça nossos serviços.</h2>
      <p className={S.subtitulo}>
        Venha vivenciar maravilhosas experiências de puro relaxamento e
        bem-estar.
      </p>

      <ul>
        <CardSpa />
        <br></br>
        <CardArgilo />
        <br></br>
        <CardBambu />
      </ul>
      <br></br>
    </section>
  );
};

export default SectionServicos;
