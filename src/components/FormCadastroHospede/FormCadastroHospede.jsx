import React from "react";
import { useState } from "react";
import S from "./FormCadastroHospede.module.css";
import { api } from "../../services/api";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import PasswordChecklist from "react-password-checklist";
import validator from "validator";

const FormCadastroHospede = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const [dadosForm, setDadosForm] = useState({
    nome: "",
    genero: "",
    nasc: "",
    email: "",
    celular: "",
    senha: "",
  });

  function handleChange(e, nomeDaChave) {
    setDadosForm({
      ...dadosForm,
      [nomeDaChave]: e.target.value,
    });
  }
  function handleChangePassword(e, nomeDaChave) {
    setDadosForm({
      ...dadosForm,
      [nomeDaChave]: e.target.value,
    });
    setPassword(e.target.value);
  }

  function handleChangeEmail(e, nomeDaChave) {
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

  async function handleClick(e) {
    e.preventDefault();

    try {
      await api.post("/hospede", dadosForm).then((response) => {
        console.log(response);

        if (response.data.hospede.id) {
          localStorage.setItem("id_Hospede", response.data.hospede.id);
          alert("Cadastro concluído com sucesso");
          navigate("/login");
        }
      });
    } catch (e) {
      console.log(e);
      alert("Cadastro não concluído");
    }
  }

  return (
    <div className={S.containerCadastro}>
      <form className={S.formCadastroHospede}>
        <br></br>{" "}
        <h4 className={S.h4TitleCasdastro}>
          Preencha todos os campos para realizar seu cadastro!
        </h4>
        <TextField
          id="standard-basic"
          label="Nome"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="nome"
          required
          value={dadosForm.nome}
          onChange={(e) => handleChange(e, "nome")}
        />
        <TextField
          id="standard-basic"
          label="Gênero"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="genero(F, M ou NB)"
          required
          value={dadosForm.genero}
          onChange={(e) => handleChange(e, "genero")}
        />
        <TextField
          id="standard-basic"
          label="Data de nascimento"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="data de nascimento"
          required
          value={dadosForm.nasc}
          onChange={(e) => handleChange(e, "nasc")}
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          className={S.input1}
          type="email"
          placeholder="email"
          required
          value={dadosForm.email}
          onChange={(e) => handleChangeEmail(e, "email")}
        />
        <span
          style={{
            color: "black",
            fontSize: "12px",
          }}
        >
          {emailError}
        </span>
        <TextField
          id="standard-basic"
          label="celular"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="celular"
          required
          value={dadosForm.celular}
          onChange={(e) => handleChange(e, "celular")}
        />
        {/* <BsPerson />
          </input> */}
        <TextField
          id="standard-basic"
          label="Senha"
          variant="standard"
          className={S.input1}
          type="password"
          placeholder="senha"
          required
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
        {/* <AiOutlineEyeInvisible />
          </input> */}
        {/* <button
          type="button"
          className={S.btnCadastrar}
          onClick={() => setOpen((o) => !o)}
        >
          Cadastrar
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div>
            Cadastro concluído com sucesso! */}
        <button type="button" className={S.btnCadastrar} onClick={handleClick}>
          Ir para login
        </button>
        {/* </div>
        </Popup> */}
      </form>
    </div>
  );
};

export default FormCadastroHospede;
