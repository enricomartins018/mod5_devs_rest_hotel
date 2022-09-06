import React from "react";
import foto from "../../assets/quarto.jpg";
import C1 from "../../assets/C1.jpg";
import C2 from "../../assets/C2.jpg";
import C3 from "../../assets/C3.jpg";
import C4 from "../../assets/C4.jpg";
import C5 from "../../assets/C5.jpg";
import C6 from "../../assets/C6.jpg";
import C7 from "../../assets/C7.jpg";
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
            src={C1}
            position="top"
            alt="..."
          />
          <MDBCardBody className={S.textSide}>
            <MDBCardTitle>Suas reservas</MDBCardTitle>
            <MDBCardText>
              Acesse aqui todas as informações sobre as suas reservas!
            </MDBCardText>
            <MDBBtn href="#"></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div>
        <MDBCard>
          <MDBCardImage
            className={S.imageSide}
            src={C2}
            position="top"
            alt="..."
          />
          <MDBCardBody className={S.textSide}>
            <MDBCardTitle>Suas reservas</MDBCardTitle>
            <MDBCardText>
              Acesse aqui todas as informações sobre as suas reservas!
            </MDBCardText>
            <MDBBtn href="#"></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div>
        <MDBCard>
          <MDBCardImage
            className={S.imageSide}
            src={C3}
            position="top"
            alt="..."
          />
          <MDBCardBody className={S.textSide}>
            <MDBCardTitle>Suas reservas</MDBCardTitle>
            <MDBCardText>
              Acesse aqui todas as informações sobre as suas reservas!
            </MDBCardText>
            <MDBBtn href="#"></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div>
        <MDBCard>
          <MDBCardImage
            className={S.imageSide}
            src={C4}
            position="top"
            alt="..."
          />
          <MDBCardBody className={S.textSide}>
            <MDBCardTitle>Suas reservas</MDBCardTitle>
            <MDBCardText>
              Acesse aqui todas as informações sobre as suas reservas!
            </MDBCardText>
            <MDBBtn href="#"></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <div>
        <MDBCard>
          <MDBCardImage
            className={S.imageSide}
            src={C1}
            position="top"
            alt="..."
          />
          <MDBCardBody className={S.textSide}>
            <MDBCardTitle>Suas reservas</MDBCardTitle>
            <MDBCardText>
              Acesse aqui todas as informações sobre as suas reservas!
            </MDBCardText>
            <MDBBtn href="#"></MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
