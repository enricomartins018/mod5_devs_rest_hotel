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
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <div className={S.footer}>
      <div className={S.primeiraDivisao}>
        <img className={S.img} src={image} alt="logo" />
        <Carrossel />
      </div>
      <div className={S.container}>
        <div className={S.containerTexto}>
          <p>
            Horário de funcionamento:
            <br />
            Dom à Dom: 24 horas
          </p>
          <p>
            Endereço:
            <br />
            Rua 1, 100, Bairro:Leblon, Rio de Janeiro - RJ Cep 22441-020
          </p>
          <p className={S.contato}>
            Contato:
            <br />
            E-mail: DevsRestHotel@gmail.com
            <br />
            Telefone: 21 00000000
          </p>
        </div>
        <FormNewsLetter />
      </div>
      <div className={S.redes}>
        <p className={S.direitos}>
          <b>2022 © Direitos Reservados - Dev´s Rest Hotel</b>
        </p>
        <nav className={S.nav}>
          <Link
            href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
            color="inherit"
            variant="body2"
          >
            Política de privacidade
          </Link>
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
      <div className={S.politica}></div>
    </div>
  );
};
