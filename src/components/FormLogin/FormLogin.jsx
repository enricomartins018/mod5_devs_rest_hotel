import React from "react";
import S from "./FormLogin.module.css";
import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BsPerson } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import PasswordChecklist from "react-password-checklist";
import validator from "validator";

const FormLogin = () => {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [dadosForm, setDadosForm] = useState({
    email: "",
    senha: "",
  });

  function handleChange(e, nomeDaChave) {
    setDadosForm({
      ...dadosForm,
      [nomeDaChave]: e.target.value,
    });
    if (validator.isEmail(e.target.value)) {
      setEmailError("Email válido :)");
    } else {
      setEmailError("Insira uma email válido!");
    }
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
          alert("Login inválido");
        }
        //console.log("teste: " + localStorage.getItem("id_Hospede"));
      });
    } catch (e) {
      alert("Login inválido");
      // usestate para guardar a mensagem do erro e depois chamar na div depois do button(fazer para cadastro tbm)
    }
  }
  function handleChangePassword(e, nomeDaChave) {
    setDadosForm({
      ...dadosForm,
      [nomeDaChave]: e.target.value,
    });
    setPassword(e.target.value);
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
          <BsPerson />
          <label className={S.labelLogin}>Email</label>
          <input
            className={S.input}
            type="text"
            value={dadosForm.nome}
            onChange={(e) => handleChange(e, "email")}
          />
          <span
            style={{
              color: "black",
              fontSize: "12px",
            }}
          >
            {emailError}
          </span>
        </div>
        <div className={S.cardLogin}>
          <AiOutlineEyeInvisible />
          <label className={S.labelLogin}>Senha</label>
          <input
            className={S.input}
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
            // colocar botao para visualizar a senha, se der tempo
            value={dadosForm.senha}
            onChange={(e) => handleChangePassword(e, "senha")}
          />
          <PasswordChecklist
            className={S.validaSenha}
            rules={["minLength", "capital"]}
            minLength={8}
            value={password}
            messages={{
              minLength: "A senha precisa ter mais de 8 caracteres.",
              capital: "A senha precisa ter uma letra maiúscula.",
            }}
          />
        </div>

        <button className={S.btnLogin} onClick={handleClick}>
          Entrar
        </button>
        <div className={S.linkCadastro}>
          <h5>Não possui um cadastro?</h5>
          <Link to="/cadastro">Cadastre-se aqui!</Link>
        </div>
      </form>
    </section>
  );
};

export default FormLogin;
