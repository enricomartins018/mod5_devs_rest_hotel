import React from "react";
import S from "./FormLogin.module.css";
import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BsPerson } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const FormLogin = () => {
  const navigate = useNavigate();
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
    try {
      api.post("/hospede/login", dadosForm).then((response) => {
        console.log(response);

        if (response.data.erro != true) {
          localStorage.setItem("id_Hospede", response.data.id);
          navigate("/");
        } else {
          throw new Error("Login inválido");
        }
        //console.log("teste: " + localStorage.getItem("id_Hospede"));
      });
    } catch (e) {
      // usestate para guardar a mensagem do erro e depois chamar na div depois do button(fazer para cadastro tbm)
    }
  }

  return (
    <section className={S.container}>
      <div className={S.banner}>
        <img className={S.logo} src={logo} />
        <h4 className={S.h4Login}>
          Bem vindo ao DEV's Rest Hotel! <br />
          Faça seu login para continuar a sua reserva!
        </h4>
      </div>
      <form className={S.formlogin}>
        <div className={S.cardLogin}>
          {/* <label for="usuario">Email</label> */}
          <BsPerson />
          <label className={S.labelLogin}>Email</label>
          <input
            className={S.input}
            type="text"
            value={dadosForm.nome}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>

        <div className={S.cardLogin}>
          <AiOutlineEyeInvisible />
          <label className={S.labelLogin}>Senha</label>
          <input
            className={S.input}
            type="password"
            // colocar botao para visualizar a senha, se der tempo
            value={dadosForm.senha}
            onChange={(e) => handleChange(e, "senha")}
          />
        </div>

        <button className={S.btnLogin} onClick={handleClick}>
          Entrar
        </button>
        <div className={S.linkCadastro}>
          <h5>Don`t have an account?</h5>
          <Link to="/cadastro">Sign Up</Link>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
