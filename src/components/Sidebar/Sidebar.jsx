import React from "react";
import S from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav className={S.sidebar}>
      <div className={S.brand}>
        <h2 className={S.h2Side}>
          Para acessar suas reservas, atualizar ou deletar, acese o link abaixo
        </h2>
        <Link to="/suasreservas">Reservas</Link>
      </div>
    </nav>
  );
};
