import React from "react";
import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import S from "./CardArgilo.module.css";
import argilo from "../../assets/image/argilo.jpeg";

export default function CardArgilo() {
  return (
    <MDBCard className={S.cardSpa}>
      <MDBCardImage src={argilo} className={S.imageSpa} fluid />

      <div className={S.bodyArgilo}>
        <h3>Argiloterapia</h3>
        <p className={S.pTitleArgilo}>
          O poder desintoxicante, purificante, clareador de manchas, hidratante
          e rejuvenescedor das argilas em todo o corpo, para os vários tipos de
          pele. Esfopação e massagem complementam esta terapia milenar do
          Ayurveda para o tratamento da pele.
        </p>
      </div>
    </MDBCard>
  );
}
