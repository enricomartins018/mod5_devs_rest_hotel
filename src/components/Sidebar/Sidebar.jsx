import S from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import quarto from "../../assets/esse.jpg";
import React from "react";
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
        src={quarto}
        position="top"
        alt="..."
      />
      <MDBCardBody className={S.textSide}>
        <MDBCardTitle>Suas reservas</MDBCardTitle>
        <MDBCardText>
          Acesse aqui todas as informações sobre as suas reservas!
        </MDBCardText>
        <MDBBtn href="#">
          {localStorage ? (
            <Link to="/suasreservas">Reservas</Link>
          ) : (
            <h1>Reservas</h1>
          )}
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
