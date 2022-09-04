import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import S from "./FormAtualizacaoReserva.module.css";

const FormAtualizacaoReserva = ({
  quarto,
  quantLeitos,
  quantAdultos,
  quantCrian,
  dataEntrada,
  dataSaida,
}) => {
  const navigate = useNavigate();
  const [dadosFormReserva, setDadosReserva] = useState({
    id: localStorage.getItem("id"),
    quarto: quarto,
    quantLeitos: quantLeitos,
    quantAdultos: quantAdultos,
    quantCrian: quantCrian,
    dataEntrada: dataEntrada,
    dataSaida: dataSaida,
  });

  const params = useParams();

  function handleChange(e, nomeDaChave) {
    setDadosReserva({
      ...dadosFormReserva,
      [nomeDaChave]: e.target.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(dadosFormReserva);
    try {
      api.put("/reservas", dadosFormReserva).then((response) => {
        console.log(response);

        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }

    useEffect(() => {
      console.log(dataEntrada);
    }, [dadosFormReserva]);
  }
  return (
    <section className={S.section}>
      <form className={S.form}>
        <div className={S.selectDate}>
          <h2 className={S.titleForm}>
            <b>Selecione suas datas</b>
          </h2>
          <h1>{dataSaida}</h1>
          <div className={S.dataEntrada}>
            <label>Data de Entrada</label>
            <input
              value={dadosFormReserva.dataEntrada}
              className={S.inputPattern}
              type="date"
              name="date"
              id="entrada"
              // value={dadosFormReserva.dataEntrada}
              onChange={(e) => handleChange(e, "dataEntrada")}
            />
          </div>
          <div className={S.dataSaida}>
            <label>
              <b>Data de Saída</b>
            </label>
            <input
              className={S.inputPattern}
              type="date"
              name="date"
              id="saida"
              value={dadosFormReserva.dataSaida}
              onChange={(e) => handleChange(e, "dataSaida")}
            />
          </div>
        </div>
        <div className={S.containerSelectPattern}>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quarto}
            onChange={(e) => handleChange(e, "quarto")}
          >
            <option>Selecione a quantidade de quartos:</option>
            <option value="1">1 Quarto</option>
            <option value="2">2 Quartos</option>
            <option value="3">3 Quartos</option>
            <option value="4">4 Quartos</option>
            <option value="5">5 Quartos</option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantLeitos}
            onChange={(e) => handleChange(e, "quantLeitos")}
          >
            <option>Selecione a quantidade de leitos:</option>
            <option value="1">1 Leito</option>
            <option value="2">2 Leitos</option>
            <option value="3">3 Leitos</option>
            <option value="4">4 Leitos</option>
            <option value="5">5 Leitos</option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantAdultos}
            onChange={(e) => handleChange(e, "quantAdultos")}
          >
            <option>Selecione a quantidade de adultos:</option>
            <option value="1">1 Adulto</option>
            <option value="2">2 Adultos</option>
            <option value="3">3 Adultos</option>
            <option value="4">4 Adultos</option>
            <option value="5">5 Adultos</option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantCrian}
            onChange={(e) => handleChange(e, "quantCrian")}
          >
            <option>Selecione a quantidade de crianças:</option>
            <option value="1">1 Criança</option>
            <option value="2">2 Crianças</option>
            <option value="3">3 Crianças</option>
            <option value="4">4 Crianças</option>
            <option value="5">5 Crianças</option>
          </select>

          <button
            className={S.btnEnviarReserva}
            type="submit"
            id="enviarReserva"
            onClick={handleClick}
          >
            Atualizar a reserva
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormAtualizacaoReserva;
