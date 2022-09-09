import React, { useState } from "react";
import S from "./Reservas.module.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../ModalDelete/ModalDelete";

const Reservas = ({
  id,
  id_Hospede,
  quarto,
  quantLeitos,
  quantAdultos,
  quantCrian,
  dataEntrada,
  dataSaida,
}) => {
  const navigate = useNavigate();
  const [openDelete, setOpenDelete] = useState(false);

  function abrirModal() {
    setOpenDelete(true);
  }

  function fecharModal() {
    setOpenDelete(false);
  }

  function deletaReserva() {
    api.delete(`reservas/${id}`).then((response) => {
      console.log(response);
      fecharModal();
      navigate("/");
    });
  }

  function setAtualizar() {
    navigate(`/atualizareserva/${id}`);
  }

  return (
    <div>
      <div className={S.text}>
        <h2 className={S.h2Reservas}>Id da reserva: {id}</h2>
        <h2 className={S.h2Reservas}>Seu Id: {id_Hospede}</h2>
        <h2 className={S.h2Reservas}>Quant. de quartos: {quarto}</h2>
        <h2 className={S.h2Reservas}>Quant. de camas: {quantLeitos}</h2>
        <h2 className={S.h2Reservas}>Quant. de adultos: {quantAdultos}</h2>
        <h2 className={S.h2Reservas}>Quant. de crianças: {quantCrian}</h2>
        <h2 className={S.h2Reservas}>Data de entrada: {dataEntrada}</h2>
        <h2 className={S.h2Reservas}>Data de saída: {dataSaida}</h2>
        <button onClick={setAtualizar} className={S.btn}>
          Atualizar
        </button>

        <button type="button" className={S.btnDelete} onClick={abrirModal}>
          Deletar
        </button>
        <ModalDelete
          open={openDelete}
          handleClose={fecharModal}
          deletaReserva={deletaReserva}
        />
      </div>
    </div>
  );
};

export default Reservas;
