import React from "react";
import S from "./FormLogin.module.css";
import { useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const FormLogin = () => {
  //1 - Crie um estado para o forms
  const [dadosForm, setDadosForm] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e, nomeDaChave) {
    setDadosForm({
      ...dadosForm,
      [nomeDaChave]: e.target.value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("response");
    try {
      api.post("/hospede/login", dadosForm).then((response) => {
        console.log(response);

        localStorage.setItem("id_Hospede", response.data.id);
      });
    } catch (e) {}
  }

  return (
    <section className={S.container}>
      <div className={S.banner}>
        <img className={S.logo} src={logo} />
        <h4>
          Bem vindo ao DEV's Rest Hotel! <br />
          Faça seu login para continuar a sua reserva!
        </h4>
      </div>
      <form className={S.formlogin}>
        <input
          className={S.input1}
          type="text"
          placeholder="email"
          value=""
          onChange={(e) => handleChange(e, "email")}
        />
        {/* <BsPerson />
      </input> */}
        <input
          className={S.input2}
          type="text"
          placeholder="senha"
          value=""
          onChange={(e) => handleChange(e, "senha")}
        />
        {/* <AiOutlineEyeInvisible />
      </input> */}
        <button className={S.btnLogin} onClick={handleClick}>
          Entrar
        </button>
        <div className={S.linkCadastro}>
          <Link to="/cadastro">Cadastro</Link>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
