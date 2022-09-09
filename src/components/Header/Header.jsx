import React from "react";
import Button from "../Button/Button";
import S from "./Header.module.css";
import logoHeader from "../../assets/logoHeader.svg";
import { RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate();
  let showLoginButton = false;
  let showLogoutButton = false;

  function login() {
    navigate("/login");
  }

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  if (localStorage.getItem("id_Hospede")) {
    showLogoutButton = true;
  } else {
    showLoginButton = true;
  }

  return (
    <header className={S.header}>
      <img className={S.logoHeader} src={logoHeader} alt="" />
      <nav className={S.nav}>

        <Link className={S.a} to="/">Home</Link>
        <Link className={S.a} to="/quartos">Acomodações</Link>

        <Link to="/facasuareserva" className={S.a} href="#">
          Reservar
        </Link>
        <Link to="/suasreservas" className={S.a} href="#">
          Suas Reservas
        </Link>
      </nav>
      <div className={S.btnReserva}>
        <RiUser3Line className={S.icon} />

        <Button
          className={S.Button}
          texto="Login"
          onClick={login}
          visible={showLoginButton}
        />
        <Button
          className={S.Button}
          texto="Logout"
          onClick={logout}
          visible={showLogoutButton}
        />
      </div>
    </header>
  );
};
