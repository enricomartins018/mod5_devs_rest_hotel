import React, { useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import S from "./FormAtualizacaoReserva.module.css";
import { Link } from "react-router-dom";
import x_voltar from "../../assets/x_voltar.svg";
import { api } from "../../services/api";

const FormAtualizacaoReserva = ({
  id,
  quarto,
  quantLeitos,
  quantAdultos,
  quantCrian,
  dataEntrada,
  dataSaida,
}) => {
  const navigate = useNavigate();
  const [dadosFormReserva, setDadosReserva] = useState({
    id: id,
    id_Hospede: localStorage.getItem("id_Hospede"),
    quarto: quarto,
    quantLeitos: quantLeitos,
    quantAdultos: quantAdultos,
    quantCrian: quantCrian,
    dataEntrada: dataEntrada.split("/").reverse().join("-"),
    dataSaida: dataSaida.split("/").join("-"),
  });

  const params = useParams();

  function handleChange(e, nomeDaChave) {
    setDadosReserva({
      ...dadosFormReserva,
      [nomeDaChave]: e.target.value,
    });
    console.log(dadosFormReserva);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(dadosFormReserva);
    try {
      api.put(`/reservas/${id}`, dadosFormReserva).then((response) => {
        console.log(response);

        navigate("/suasreservas");
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <section className={S.section}>
      <form className={S.form}>
        <div className={S.selectDate}>
          <div>
            <h1 className={S.titleForm}>Selecione suas datas</h1>
          </div>
          <div className={S.containerDatas}>
            <div className={S.dataEntrada}>
              <label>
                <h2>Chegada</h2>
              </label>
              <input
                className={S.inputPattern}
                type="date"
                name="entrada"
                id="entrada"
                value={dadosFormReserva.dataEntrada}
                onChange={(e) => handleChange(e, "dataEntrada")}
              />
            </div>
            <div className={S.dataSaida}>
              <label>
                <h2>Partida</h2>
              </label>
              <input
                className={S.inputPattern}
                type="date"
                name="saida"
                id="saida"
                value={dadosFormReserva.dataSaida}
                onChange={(e) => handleChange(e, "dataSaida")}
              />
            </div>
          </div>
        </div>
        {/* <img className={S.logo} src={logo} /> */}
        <div className={S.containerSelectPattern}>
          <div className={S.containerVoltar}>
            <Link to="/">
              <img className={S.x_voltar} src={x_voltar} />
            </Link>
          </div>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quarto}
            onChange={(e) => handleChange(e, "quarto")}
          >
            <option className={S.optionPattern} value="">
              Selecione
            </option>
            <option className={S.optionPattern} value="1">
              1 Quarto
            </option>
            <option className={S.optionPattern} value="2">
              2 Quartos
            </option>
            <option className={S.optionPattern} value="3">
              3 Quartos
            </option>
            <option className={S.optionPattern} value="4">
              4 Quartos
            </option>
            <option className={S.optionPattern} value="5">
              5 Quartos
            </option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantLeitos}
            onChange={(e) => handleChange(e, "quantLeitos")}
          >
            <option className={S.optionPattern} value="">
              Selecione
            </option>
            <option className={S.optionPattern} value="1">
              1 Leito
            </option>
            <option className={S.optionPattern} value="2">
              2 Leitos
            </option>
            <option className={S.optionPattern} value="3">
              3 Leitos
            </option>
            <option className={S.optionPattern} value="4">
              4 Leitos
            </option>
            <option className={S.optionPattern} value="5">
              5 Leitos
            </option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantAdultos}
            onChange={(e) => handleChange(e, "quantAdultos")}
          >
            <option className={S.optionPattern} value="">
              Selecione
            </option>
            <option className={S.optionPattern} value="1">
              1 Adulto
            </option>
            <option className={S.optionPattern} value="2">
              2 Adultos
            </option>
            <option className={S.optionPattern} value="3">
              3 Adultos
            </option>
            <option className={S.optionPattern} value="4">
              4 Adultos
            </option>
            <option className={S.optionPattern} value="5">
              5 Adultos
            </option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantCrian}
            onChange={(e) => handleChange(e, "quantCrian")}
          >
            <option className={S.optionPattern} value="0">
              Selecione
            </option>
            <option className={S.optionPattern} value="1">
              1 Criança
            </option>
            <option className={S.optionPattern} value="2">
              2 Crianças
            </option>
            <option className={S.optionPattern} value="3">
              3 Crianças
            </option>
            <option className={S.optionPattern} value="4">
              4 Crianças
            </option>
            <option className={S.optionPattern} value="5">
              5 Crianças
            </option>
          </select>
          <div className={S.containerCodigos}>
            <input
              className={S.containerCodCorporativo}
              type="text"
              name="text"
              placeholder="Código Corporativo/Promo"
            />
            <input
              className={S.containerCodGrupo}
              type="text"
              name="text"
              placeholder="Código De Grupo"
            />
          </div>
          <div className={S.containerCheckBox}>
            <input className={S.inputCheckBox} type="checkbox" name="" id="" />
            <label className={S.labelCheckBox}>
              Casas e apartamentos inteiros
            </label>
          </div>
          <div className={S.containerCheckBox}>
            <input className={S.inputCheckBox} type="checkbox" name="" id="" />
            <label className={S.labelCheckBox}>Vou viajar a trabalho</label>
          </div>
          <button
            className={S.btnEnviarReserva}
            type="submit"
            id="enviarReserva"
            onClick={handleClick}
          >
            Atualizar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormAtualizacaoReserva;
