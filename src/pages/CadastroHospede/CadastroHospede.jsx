import React from "react";
import FormCadastroHospede from "../../components/FormCadastroHospede/FormCadastroHospede";
import S from "./CadastroHospede.module.css";
import quarto from "../../assets/quarto.jpg";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const CadastroHospede = () => {
  return (
    <div className={S.divCadastroHospede}>
      <img className={S.quarto} src={quarto} />

      <div className={S.sectionContent}>
        <div className={S.sectionText}>
          <img className={S.logo} src={logo} />
          <h2 className={S.h2Hospede}>
            O Hotel possui 141 espaçosos apartamentos, sendo 59 suítes, todos
            com lindas vistas para o parque. Ele ainda oferece nove salas
            funcionais sendo um salão de festas com capacidade para até 400
            convidados um Spa e um fitness center, além de piscinas interna e
            externa e um Kids Club.
          </h2>
          <Link to="/">Voltar para página principal</Link>
        </div>
      </div>

      <div className={S.sectionFormHospede}>
        <div className={S.sectionForm}>
          <FormCadastroHospede />
        </div>
      </div>
    </div>
  );
};

export default CadastroHospede;
