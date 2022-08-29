import React from "react";
import { useState } from "react";
import S from "./FormCadastroHospede.module.css";
import { api } from "../../services/api";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const FormCadastroHospede = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
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

  function handleClick(e) {
    e.preventDefault();
    try {
      api.post("/hospede", dadosForm).then((response) => {
        console.log(response);
        if (response.data.id) {
          localStorage.setItem("id_Hospede", response.hospede.id);
          setOpen((o) => !o);
          setTimeout(() => {
            window.location.href = "home";
          }, "5000");
        }

        // todo: verificar como mostrar a mensagem de validacao da api no preenchimento do formulário
        // window.location.href = "home";
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form className={S.formlogin}>
      <input
        className={S.input1}
        type="text"
        placeholder="nome"
        value={dadosForm.nome}
        onChange={(e) => handleChange(e, "nome")}
      />
      <input
        className={S.input1}
        type="text"
        placeholder="genero"
        value={dadosForm.genero}
        onChange={(e) => handleChange(e, "genero")}
      />
      <input
        className={S.input1}
        type="text"
        placeholder="data de nascimento"
        value={dadosForm.nasc}
        onChange={(e) => handleChange(e, "nasc")}
      />
      <input
        className={S.input1}
        type="text"
        placeholder="email"
        value={dadosForm.email}
        onChange={(e) => handleChange(e, "email")}
      />
      <input
        className={S.input1}
        type="text"
        placeholder="celular"
        value={dadosForm.celular}
        onChange={(e) => handleChange(e, "celular")}
      />
      {/* <BsPerson />
          </input> */}
      <input
        className={S.input1}
        type="text"
        placeholder="senha"
        value={dadosForm.senha}
        onChange={(e) => handleChange(e, "senha")}
      />
      {/* <AiOutlineEyeInvisible />
          </input> */}
      <button className={S.btnLogin} onClick={handleClick}>
        Entrar
      </button>

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div>
          <a onClick={closeModal}>&times;</a>
          Sucesso
        </div>
      </Popup>
    </form>
  );
};

export default FormCadastroHospede;
