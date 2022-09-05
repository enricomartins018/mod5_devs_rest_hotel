import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormAtualizacaoReserva from "../../components/FormAtaulizacaoReserva/FormAtualizacaoReserva";

const AtualizacaoReserva = () => {
  const [reserva, setReserva] = useState({});

  if (!localStorage.getItem("id_Hospede")) {
    const navigate = useNavigate();
    navigate("/login");
  }

  const params = useParams();

  useEffect(() => {
    api.get("/reservas/" + params.id).then((response) => {
      setReserva(response.data.mensage[0]);
    });
  }, []);

  if (!reserva.quarto) {
    return (
      <main>
        <section></section>
      </main>
    );
  }

  return (
    <main>
      <section>
        {
          <FormAtualizacaoReserva
            quarto={reserva.quarto}
            quantLeitos={reserva.quantLeitos}
            quantAdultos={reserva.quantAdultos}
            quantCrian={reserva.quantCrian}
            dataEntrada={reserva.dataEntrada}
            dataSaida={reserva.dataSaida}
          ></FormAtualizacaoReserva>
        }
      </section>
    </main>
  );
};

export default AtualizacaoReserva;
