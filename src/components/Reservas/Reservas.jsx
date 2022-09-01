import React from "react";
import S from "./Reservas.module.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import foto from "../../assets/quarto.jpg";

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
  const navigate = useNavigate();

  function deletar() {
    api.delete(`reservas/${id}`).then((response) => {
      console.log(response);
      navigate("/");
    });
  }

  return (
    <div>
      <div className={S.text}>
        <h2 className={S.h2Reservas}>Id da reserva: {id}</h2>
        <h2 className={S.h2Reservas}>Seu Id: {id_Hospede}</h2>
        <h2 className={S.h2Reservas}>Número do seu quarto: {quarto}</h2>
        <h2 className={S.h2Reservas}>Quant. de camas: {quantLeitos}</h2>
        <h2 className={S.h2Reservas}>Quant. de adultos: {quantAdultos}</h2>
        <h2 className={S.h2Reservas}>Quant. de crianças: {quantCrian}</h2>
        <h2 className={S.h2Reservas}>Data de entrada: {dataEntrada}</h2>
        <h2 className={S.h2Reservas}>Data de saída: {dataSaida}</h2>
        <button className={S.btn}>Atualizar</button>
        <button onClick={deletar} className={S.btnDelete}>
          Deletar
        </button>
      </div>
    </div>
  );
};

export default Reservas;
