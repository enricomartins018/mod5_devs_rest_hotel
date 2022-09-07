import React, { useState } from "react";
import S from "./FormFacaSuaReserva.module.css";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import x_voltar from "../../assets/x_voltar.svg";
import Separator from '../../assets/separator.svg'

const FormFacaSuaReserva = () => {
  const navigate = useNavigate();
  const [dadosFormReserva, setDadosReserva] = useState({
    id_Hospede: localStorage.getItem("id_Hospede"),
    quarto: 0,
    quantLeitos: 0,
    quantAdultos: 0,
    quantCrian: 0,
    dataEntrada: 0,
    dataSaida: 0,
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
    alert("Reserva concluída com sucesso!");
    navigate("/");


    try {
      api.post("/reservas", dadosFormReserva).then((response) => {
        console.log(response);
        if (response.data.error) {
          localStorage.setItem("id_Hospede", response.data.hospede.id);
          alert("Reserva inserida concluído com sucesso");
          navigate("/login");
        }
      });
    } catch (e) {
      console.log(e);
      alert("Reserva não realizada");
    }
  }

  return (
    <section className={S.section}>
      <form className={S.form}>
        <div className={S.selectDate}>
          <div>
            <img className={S.separator} src={Separator}></img>
            <h1 className={S.titlesForms}>Selecione suas datas</h1>
          </div>
          <div className={S.containerDatas}>
            <div className={S.dataEntrada}>
              <label>
                <h4 className={S.titleDate}>Check-In</h4>
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
                <h4 className={S.titleDate}>Check-Out</h4>
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
          <img className={S.separator} src={Separator}></img>
        </div>
        <img className={S.logo} src={logo} />
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
              Selecione a quantidade de Quartos:
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
              Selecione a quantidade de Leitos:
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
              Selecione a quantidade de Adultos:
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
              Selecione a quantidade de Crianças:
            </option>
            <option className={S.optionPattern} value="">
              0 Criança
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
              name="number"
              placeholder="Código Corporativo / Promo"
            />
            <input
              className={S.containerCodGrupo}
              type="text"
              name="number"
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
              Reservar Agora
            </button>
        </div>
      </form>
    </section>
  );
};

export default FormFacaSuaReserva;
