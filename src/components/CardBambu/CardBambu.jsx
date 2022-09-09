import React from "react";
import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import S from "./CardBambu.module.css";
import bambu from "../../assets/image/bambu.jpeg";

export default function CardBambu() {
  return (
    <MDBCard className={S.cardSpa}>
      <MDBCardImage src={bambu} className={S.imageSpa} fluid />

      <div className={S.bodyBambu}>
        <h3>Bambuterapia</h3>
        <p className={S.pTitleBambu}>
          Massagem que proporciona profundo relaxamento, limpeza energética e
          drenagem de toxinas através do uso de barras de bambu de diversos
          tamanhos.
        </p>
      </div>
    </MDBCard>
  );
}
