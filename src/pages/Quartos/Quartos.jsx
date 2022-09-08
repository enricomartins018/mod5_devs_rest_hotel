import React from "react";
import CardQuartos2 from "../../components/CardQuartos2/CardQuartos2";
import { Header } from "../../components/Header/Header";
import S from "./Quartos.module.css";

const Quartos = () => {
  return (
    <div className={S.containerQuartos}>
      <Header />
      <CardQuartos2 />;
    </div>
  );
};

export default Quartos;
