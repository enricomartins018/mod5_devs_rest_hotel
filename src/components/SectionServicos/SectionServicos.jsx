import React from "react";
import CardArgilo from "../CardArgilo/CardArgilo";
import CardBambu from "../CardBambu/CardBambu";
import CardSpa from "../CardSpa/CardSpa";
import S from "./SectionServicos.module.css";
const SectionServicos = () => {
  return (
    <section className={S.section} id="servicos">
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

        {/* <h3 className={S.lista}>Massagem com pedras quentes</h3>
        <p className={S.paragrafoInfo}>
          O maravilhoso poder das pedras quentes, que atuam diretamente nos
          músculos e articulações, proporciona sensações inesquecíveis de
          bem-estar.
        </p> */}
        {/* <h3 className={S.lista}>Bambuterapia</h3>
        <p>
          Massagem que proporciona profundo relaxamento, limpeza energética e
          drenagem de toxinas através do uso de barras de bambu de diversos
          tamanhos.
        </p> */}
        {/* <h3 className={S.lista}>Argiloterapia</h3>
        <p>
          O poder desintoxicante, purificante, clareador de manchas, hidratante
          e rejuvenescedor das argilas em todo o corpo, para os vários tipos de
          pele. Esfopação e massagem complementam esta terapia milenar do
          Ayurveda para o tratamento da pele.
        </p> */}
      </ul>
      {/* <p className={S.pSevicos}>Day Spa</p>
      <p>
        Tudo acontece em um lugar que conspira a favor do relaxamento: música
        suave, visual clean em um ambiente silencioso e confortável. Programas
        de puro relaxamento e cuidados com você e seu corpo, inspirados no
        conhecimento milenar da medicina indiana, o Ayurveda. Venha para o Dev's
        Rest e desfrute desta experiência terapêutica inesquecível.
      </p>
      <br></br> */}
      {/* <ul>
        <h5 className={S.lista1}>Esfoliação corporal</h5>
        <h5 className={S.lista1}>Terapia dos Alongamentos</h5>
        <h5 className={S.lista1}>Revitalização facial</h5>
        <h5 className={S.lista1}>Banho de imersão com óleos essenciais</h5>
      </ul>
      <br></br>
      <ul>
        <p className={S.pSevicos}>Outras opções de lazer.</p>
        <h5 className={S.lista2}> Sala de jogos</h5>
        <p>Sinucas, mesa de cartas pebolin, video games.</p>
        <h5 className={S.lista2}>Piscinas</h5>
        <p>2 piscinas (1 de uso infantil, 1 de uso adulto.)</p>
        <h5 className={S.lista2}>Espaço kids</h5>
        <p>
          Ambiente com monitoramento, e varios briquedos para crianças entre 2 a
          7 anos.
        </p>
      </ul> */}
      <br></br>
    </section>
  );
};

export default SectionServicos;
