import React from "react";
import { Button } from "../Button/Button";
import S from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { RiUser3Line } from "react-icons/ri";

export const Header = () => {
  return (
    <header>
      <img className={S.logo} src={logo} alt="" />
      <nav>
        <a href="#">Sobre nós</a>
        <a href="#">Acomodações</a>
        <a href="#">Serviços</a>
        <a href="#">Reservar</a>
      </nav>
        <div className={S.btnReserva}>
          <RiUser3Line className={S.icon} />
          <Button className={S.Button} texto="Login" />
        </div>
    </header>
  );
};
