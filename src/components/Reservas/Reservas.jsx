import React from "react";
import S from "./Reservas.module.css";
import { api } from "../../services/api";

const Reservas = ({
  id,
  id_Hospede,
  quarto,
  quantLeitos,
  quantAdultos,
  quantCrian,
  dataEntrada,
  dataSaida,
}) => {
  function deletar() {
    api.delete(`reservas/${id}`).then((response) => {
      console.log(response);
    });
  }

  return (
    <div className={S.container}>
      <h1>Reservas</h1>
      <div className={S.text}>
        <h2>Id da reserva: {id}</h2>
        <h2>Seu Id: {id_Hospede}</h2>
        <h2>Número do seu quarto: {quarto}</h2>
        <h2>Quantidade de camas: {quantLeitos}</h2>
        <h2>Quantidade de adultos: {quantAdultos}</h2>
        <h2>Quantidade de crianças: {quantCrian}</h2>
        <h2>Data de entrada: {dataEntrada}</h2>
        <h2>Data de saída: {dataSaida}</h2>
        <button className={S.btn}>Atualizar</button>
        <button onClick={deletar} className={S.btnDelete}>
          Deletar
        </button>
      </div>
    </div>
  );
};

export default Reservas;
