import React from "react";
import FormFacaSuaReserva from "../../components/FormFacaSuaReserva/FormFacaSuaReserva";
import S from "./FacaSuaReserva.module.css";
import { useNavigate } from "react-router-dom";

const FacaSuaReserva = () => {
  if (!localStorage.getItem("id_Hospede")) {
    const navigate = useNavigate();
    navigate("/login");
  }
  return (
    <div className={S.containerPage}>
      <FormFacaSuaReserva />
    </div>
  );
};

export default FacaSuaReserva;
