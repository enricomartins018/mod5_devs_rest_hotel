import React from "react";
import Button from "../Button/Button";
import S from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {Link as Scroll} from "react-scroll"

export const Header = () => {
  const navigate = useNavigate();

  function handlechange() {
    // if (!localStorage.getItem("id_Hospede")) {
    //   navigate("/login");
    // }
    navigate("/login");
  }

  return (
    <header className={S.header}>
      <img className={S.logo} src={logo} alt="" />
      <nav className={S.nav}>
        <Scroll className={S.a} to="sobre" smooth={true} duration={1000}>
          Sobre nós
        </Scroll>
        <Scroll className={S.a} to="acomodacoes" smooth={true} duration={1000}>
          Acomodações
        </Scroll>
        <Scroll className={S.a} to="servicos" smooth={true} duration={1000}>
          Serviços
        </Scroll>
        <Link to="/facasuareserva" className={S.a} href="#">
          Reservar
        </Link>
      </nav>
      <div className={S.btnReserva}>
        <RiUser3Line className={S.icon} />

        <Button className={S.Button} texto="Login" onClick={handlechange} />
      </div>
    </header>
  );
};
