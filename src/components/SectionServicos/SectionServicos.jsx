import React from "react";
import S from "./SectionServicos.module.css";
const SectionServicos = () => {
  return (
    <section className={S.section}>
      <h2 className={S.subtitulo}>Conheça nossos serviços.</h2>
      <p className={S.subtitulo}>
        Venha vivenciar maravilhosas experiências de puro relaxamento e
        bem-estar.
      </p>
      <p className={S.pSevicos}>Massagens</p>
      <ul>
        <li className={S.lista}>Massagem com pedras quentes</li>
        <p className={S.paragrafoInfo}>
          O maravilhoso poder das pedras quentes, que atuam diretamente nos
          músculos e articulações, proporciona sensações inesquecíveis de
          bem-estar.
        </p>
        <li className={S.lista}>Bambuterapia</li>
        <p>
          Massagem que proporciona profundo relaxamento, limpeza energética e
          drenagem de toxinas através do uso de barras de bambu de diversos
          tamanhos.
        </p>
        <li className={S.lista}>Argiloterapia</li>
        <p>
          O poder desintoxicante, purificante, clareador de manchas, hidratante
          e rejuvenescedor das argilas em todo o corpo, para os vários tipos de
          pele. Esfopação e massagem complementam esta terapia milenar do
          Ayurveda para o tratamento da pele.
        </p>
      </ul>
      <p className={S.pSevicos}>Day Spa</p>
      <p>
        Tudo acontece em um lugar que conspira a favor do relaxamento: música
        suave, visual clean em um ambiente silencioso e confortável. Programas
        de puro relaxamento e cuidados com você e seu corpo, inspirados no
        conhecimento milenar da medicina indiana, o Ayurveda. Venha para o Dev's
        Rest e desfrute desta experiência terapêutica inesquecível.
      </p>
      <ul>
        <li className={S.lista}>Esfoliação corporal</li>
        <li className={S.lista}>Terapia dos Alongamentos</li>
        <li className={S.lista}>Revitalização facial</li>
        <li className={S.lista}>Banho de imersão com óleos essenciais</li>
      </ul>

      <ul>
        <p className={S.pSevicos}>Outras opções de lazer.</p>
        <li className={S.lista}> Sala de jogos</li>
        <p>Sinucas, mesa de cartas pebolin, video games.</p>
        <li className={S.lista}>Piscinas</li>
        <p>2 piscinas (1 de uso infantil, 1 de uso adulto.)</p>
        <li className={S.lista}>Espaço kids</li>
        <p>
          Ambiênte com monitoramento, e varios briquedos para crianças entre 2 a
          7 anos.
        </p>
      </ul>
    </section>
  );
};

export default SectionServicos;
