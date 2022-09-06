import React from "react";
import foto from "../../assets/quarto.jpg";
import side from "../../assets/separator.jpeg";
import S from "../Card/Card.module.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Sidebar() {
  return (
    <div className={S.containerCards}>
      <div>
        <MDBCard>
          <MDBCardImage
            className={S.imageSide}
            src={side}
            position="top"
            alt="..."
          />
          <MDBCardBody className={S.textSide}>
            <MDBCardTitle>Suas reservas</MDBCardTitle>
            <MDBCardText>
              <p>Responsabilidade Social Coorporativa</p>
              <h2>Save the Bees </h2>O Palácio Tangará está comprometido com a
              manutenção da fauna nativa, especialmente das abelhas sem ferrão,
              que são fundamentais para uma melhor polinização da vegetação.
              Desde 2019, temos duas colmeias de abelhas sem ferrão na área
              externa de nosso Hotel.
            </MDBCardText>
            <MDBBtn href="#"></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
