import React from "react";
import { useState } from "react";
import S from "./FormCadastroHospede.module.css";
import { api } from "../../services/api";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const FormCadastroHospede = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
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

  async function handleClick(e) {
    e.preventDefault();

    try {
      await api.post("/hospede", dadosForm).then((response) => {
        console.log(response);

        if (response.data.hospede.id) {
          localStorage.setItem("id_Hospede", response.data.hospede.id);
          navigate("/login");
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={S.containerCadastro}>
      <form className={S.formCadastroHospede}>
        <TextField
          id="standard-basic"
          label="Nome"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="nome"
          value={dadosForm.nome}
          onChange={(e) => handleChange(e, "nome")}
        />
        {/* <input
          className={S.input1}
          type="text"
          placeholder="nome"
          value={dadosForm.nome}
          onChange={(e) => handleChange(e, "nome")}
        /> */}
        <TextField
          id="standard-basic"
          label="Gênero"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="genero"
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
          value={dadosForm.nasc}
          onChange={(e) => handleChange(e, "nasc")}
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="email"
          value={dadosForm.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <TextField
          id="standard-basic"
          label="celular"
          variant="standard"
          className={S.input1}
          type="text"
          placeholder="celular"
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
          value={dadosForm.senha}
          onChange={(e) => handleChange(e, "senha")}
        />
        {/* <AiOutlineEyeInvisible />
          </input> */}

        <button
          type="button"
          className={S.btnCadastrar}
          onClick={() => setOpen((o) => !o)}
        >
          Cadastrar
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div>
            Sucesso
            <button className={S.btnCadastrar} onClick={handleClick}>
              Ir para login
            </button>
          </div>
        </Popup>
      </form>
    </div>
  );
};

export default FormCadastroHospede;
