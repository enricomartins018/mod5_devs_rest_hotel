import React from "react";
import S from "./SectionSobre.module.css";

export const SectionSobre = () => {
  return (
    <section className={S.section} id="sobre">
      <h2 className={S.subtitulo}>Dev's Rest Hotel</h2>
      <p className={S.paragrafoInfo}>
        O Hotel Dev's Rest está na melhor localização do Rio de Janeiro, no
        Centro da cidade próximo às principais lojas, bares e restaurantes. O
        Hotel Dev's Rest dispõe de excelente estrutura para hospedagem.
      </p>
      <p className={S.paragrafoInfo}>
        São 60 apartamentos, distribuídos em 8 andares. Todos os apartamentos
        são equipados com TV a cabo, ar-condicionado split, frigobar, telefone,
        cofre, mesa de trabalho, internet Wi-Fi de alta velocidade e camas box.
        <br />
        Venha vivenciar o que há de melhor no Dev's Rest!!!
      </p>

    </section>
  );
};
