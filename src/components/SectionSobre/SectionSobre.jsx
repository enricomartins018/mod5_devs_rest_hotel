import React from "react";
import S from "./SectionSobre.module.css";

export const SectionSobre = () => {
  return (
    <section className={S.section} id="sobre">
      <h2 className={S.subtitulo}>Dev's Rest Hotel</h2>
      <br></br>
      <p className={S.paragrafoInfo}>
        Bem-vindo ao Dev's Rest Hotel. O Hotel possui 141 espaçosos
        apartamentos, sendo 59 suítes, todos com lindas vistas para o parque.
        Ele ainda oferece nove salas funcionais, sendo um salão de festas com
        capacidade para até 400 convidados, um Spa e um fitness center, além de
        piscinas interna e externa e um Kids Club.
      </p>
      <p className={S.paragrafoInfo}>
        O Hotel Dev's Rest está na melhor localização do Rio de Janeiro, no
        Centro da cidade próximo às principais lojas, bares e restaurantes. O
        Hotel Dev's Rest dispõe de excelente estrutura para hospedagem.
      </p>
    </section>
  );
};
