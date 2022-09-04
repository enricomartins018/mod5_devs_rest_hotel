import React from "react";
import S from "./SectionSobre.module.css";
import hote1 from "../../assets/image/hotel1.jpeg";
import hotel2 from "../../assets/image/hotel2.jpeg";
export const SectionSobre = () => {
  return (
    <section className={S.section}>
      <h2 className={S.subtitulo}>
        Venha vivenciar uma experiêcia incrivél no Dev's Rest Hotel!
      </h2>
      <p className={S.p}>
        O Hotel Dev's Rest está na melhor localização do Rio de Janeiro, no
        Centro da cidade próximo às principais lojas, bares e restaurantes. O
        Hotel Dev's Rest dispõe de excelente estrutura para hospedagem.
      </p>
      <p>
        São 60 apartamentos, distribuídos em 8 andares. Todos os apartamentos
        são equipados com TV a cabo, ar-condicionado split, frigobar, telefone,
        cofre, mesa de trabalho, internet Wi-Fi de alta velocidade e camas box.
        Venha vivenciar o que há de melhor no Dev's Rest!!!
      </p>

      <div className={S.divImg}>
        <img className={S.img} src={hote1} alt="" />
        <img className={S.img} src={hotel2} alt="" />
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};
