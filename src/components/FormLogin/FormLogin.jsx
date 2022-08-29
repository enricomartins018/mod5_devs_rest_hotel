import React from "react";
import S from "./FormLogin.module.css";
import { useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

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
  );
};

export default FormLogin;
