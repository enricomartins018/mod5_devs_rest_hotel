import React, { useState } from "react";
import S from "./FormFacaSuaReserva.module.css";
import logo from "../../assets/logo.svg";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import x_voltar from '../../assets/x_voltar.svg'

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
      <form className={S.form}>
        <div className={S.selectDate}>
          <h2 className={S.titleForm}>
            <b>Selecione suas datas</b>
          </h2>
          <div className={S.dataEntrada}>
            <label>
              <b>ENTRADA</b>
            </label>
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
              <b>SAÍDA</b>
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
        <img className={S.logo} src={logo} />
        <div className={S.containerSelectPattern}>
        <div className={S.containerVoltar}>
          <Link to="/"><img className={S.x_voltar} src={x_voltar} /></Link>
        </div>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quarto}
            onChange={(e) => handleChange(e, "quarto")}
          >
            <option className={S.optionPattern} value="1">1 Quarto</option>
            <option className={S.optionPattern} value="2">2 Quartos</option>
            <option className={S.optionPattern} value="3">3 Quartos</option>
            <option className={S.optionPattern} value="4">4 Quartos</option>
            <option className={S.optionPattern} value="5">5 Quartos</option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantLeitos}
            onChange={(e) => handleChange(e, "quantLeitos")}
          >
            <option className={S.optionPattern} value="1">1 Leito</option>
            <option className={S.optionPattern} value="2">2 Leitos</option>
            <option className={S.optionPattern} value="3">3 Leitos</option>
            <option className={S.optionPattern} value="4">4 Leitos</option>
            <option className={S.optionPattern} value="5">5 Leitos</option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantAdultos}
            onChange={(e) => handleChange(e, "quantAdultos")}
          >
            <option className={S.optionPattern} value="1">1 Adulto</option>
            <option className={S.optionPattern} value="2">2 Adultos</option>
            <option className={S.optionPattern} value="3">3 Adultos</option>
            <option className={S.optionPattern} value="4">4 Adultos</option>
            <option className={S.optionPattern} value="5">5 Adultos</option>
          </select>
          <select
            className={S.selectPattern}
            value={dadosFormReserva.quantCrian}
            onChange={(e) => handleChange(e, "quantCrian")}
          >
            <option className={S.optionPattern} value="0">0 Criança</option>
            <option className={S.optionPattern} value="1">1 Criança</option>
            <option className={S.optionPattern} value="2">2 Crianças</option>
            <option className={S.optionPattern} value="3">3 Crianças</option>
            <option className={S.optionPattern} value="4">4 Crianças</option>
            <option className={S.optionPattern} value="5">5 Crianças</option>
          </select>
          <div className={S.containerCodigos}>
            <input className={S.containerCodCorporativo} type="text" name="text" placeholder="Código Corporativo/Promo" />
            <input className={S.containerCodGrupo} type="text" name="text" placeholder="Código De Grupo" />
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
