import React from "react";
import S from "./Footer.module.css";
import image from "../../assets/logo.svg";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FormNewsLetter } from "../FormNewsLetter/FormNewsLetter";
import Button from "@mui/material/Button";
import { Carrossel } from "../Carrosselfooter/Carrosselfooter";

export const Footer = () => {
  return (
    <div className={S.footer}>
      <Carrossel />
      <div className={S.container}>
        <img className={S.img} src={image} alt="logo" />
        <div className={S.containerTexto}>
          <p>
            <b>
              Horário de funcionamento:
              <br />
              Dom à Dom: 24 horas
            </b>
          </p>
          <p>
            <b>
              Endereço:
              <br />
              Rua 1, 100, Bairro:Leblon, Rio de Janeiro - RJ Cep 22441-020
            </b>
          </p>
          <p className={S.contato}>
            <b>
              Contato:
              <br />
              E-mail: DevsRestHotel@gmail.com
              <br />
              Telefone: 21 00000000
            </b>
          </p>
        </div>
      </div>
      {/* <FormNewsLetter/> */}
      <div className={S.redes}>
        <p className={S.direitos}>
          <b>2022 © Direitos Reservados - Dev´s Rest Hotel</b>
        </p>
        <nav className={S.nav}>
          <Button href="#text-buttons">
            <AiOutlineFacebook size={20} className={S.icons} />
          </Button>
          <Button href="#text-buttons">
            <AiOutlineTwitter size={20} className={S.icons} />
          </Button>
          <Button href="#text-buttons">
            <AiOutlineYoutube size={20} className={S.icons} />
          </Button>
          <Button href="#text-buttons">
            <AiOutlineLinkedin size={20} className={S.icons} />
          </Button>
          <Button href="#text-buttons">
            <AiOutlineInstagram size={20} className={S.icons} />
          </Button>
          <Button href="#text-buttons">
            <AiOutlineWhatsApp size={20} className={S.icons} />
          </Button>
        </nav>
      </div>
    </div>
  );
};
