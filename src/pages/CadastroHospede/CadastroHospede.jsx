import React from "react";
import FormCadastroHospede from "../../components/FormCadastroHospede/FormCadastroHospede";
import S from "./CadastroHospede.module.css";
import quarto from "../../assets/quarto.jpg";

const CadastroHospede = () => {
  return (
    <div className={S.div}>
      <img className={S.quarto} src={quarto} />

      <div className={S.sectionContent}>
        <div className={S.sectionText}>
          <h2 className={S.h2Hospede}>
            O K-DRH Hotel está localizado no coração do Rio. São 12
            restaurantes, área de eventos, estacionamento 24h, lojas e serviços
            para os hóspedes.<br></br>O hotel está a menos de 7km do centro do
            Rio de Janeiro, no bairro Copacabana.. São 120 apartamentos com
            suítes exclusivas.<br></br>
            Os quartos são amplos e trazem design sofisticado. Oferece internet
            wi-fi, TVs Smart em todos os apartamentos, serviços Pet Friendly e
            quartos conjugados para famílias.
          </h2>
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
