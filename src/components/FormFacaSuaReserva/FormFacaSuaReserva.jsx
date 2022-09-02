import React, { useState } from "react";
import S from "./FormFacaSuaReserva.module.css";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const FormFacaSuaReserva = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [dadosFormReserva, setDadosReserva] = useState({
    id_Hospede: localStorage.getItem("id_Hospede"),
    quarto: "",
    quantLeitos: "",
    quantAdultos: "",
    quantCrian: "",
    dataEntrada: "",
    dataSaida: "",
  });

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
      api.post("/reservas", dadosFormReserva).then((response) => {
        console.log(response);

        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <section className={S.section}>
      <img className={S.logo} src={logo} />
      <form className={S.form}>
        <div className={S.selectDate}>
          <h2 className={S.titleForm}>
            <b>Selecione suas datas</b>
          </h2>
          <div className={S.dataEntrada}>
            <label>Data de Entrada</label>
            <input
              className={S.inputPattern}
              type="date"
              name="date"
              id="entrada"
              value={dadosFormReserva.dataEntrada}
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
            Reservar Agora
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormFacaSuaReserva;
