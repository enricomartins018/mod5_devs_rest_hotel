import React from "react";
import Button from "../Button/Button";
import S from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <a className={S.a} href="#">
          Sobre nós
        </a>
        <a className={S.a} href="#">
          Acomodações
        </a>
        <a className={S.a} href="#">
          Serviços
        </a>
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
