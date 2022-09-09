import React from "react";
import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import S from "./CardSpa.module.css";
import pedras from "../../assets/image/pedras.jpg";

export default function CardSpa() {
  return (
    <MDBCard className={S.cardSpa}>
      <MDBCardImage src={pedras} className={S.imageSpa} fluid />

      <div className={S.bodySpa}>
        <h3>Massagem com pedras quentes</h3>
        <p className={S.pTitleSpa}>
          Massagem que proporciona profundo relaxamento, limpeza energética e
          drenagem de toxinas através do uso de barras de bambu de diversos
          tamanhos.
        </p>
      </div>
    </MDBCard>
  );
}
