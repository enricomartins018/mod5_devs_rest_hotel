import S from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import quarto from "../../assets/esse.jpg";
import React from "react";
import foto from "../../assets/logo readme.svg";
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
    <MDBCard>
      <MDBCardImage
        className={S.imageSide}
        src={foto}
        position="top"
        alt="..."
      />
      <MDBCardBody className={S.textSide}>
        <MDBCardTitle>Responsabilidade Social Coorporativa</MDBCardTitle>
        <br></br>
        <MDBCardText>
          <h3>Save the Bees</h3> <br></br>O Dev`s Rest hotel está comprometido
          com a manutenção da fauna nativa, especialmente das abelhas sem
          ferrão, que são fundamentais para uma melhor polinização da vegetação.
          Desde 2019, temos duas colmeias de abelhas sem ferrão na área externa
          de nosso Hotel.
        </MDBCardText>
        <br></br>
        <h3>Hora do Planeta</h3>
        <br></br>
        <MDBCardText>
          Anualmente, durante a Hora do Planeta, velas são acesas nas áreas
          comuns do Hotel e nossa fachada também tem sua iluminação desligada. A
          iluminação do Palácio Tangará é majoritariamente LED, a exceção das
          saídas de emergência.
        </MDBCardText>
        <MDBBtn href="#"></MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
