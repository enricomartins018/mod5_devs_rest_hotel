import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormAtualizacaoReserva from "../../components/FormAtaulizacaoReserva/FormAtualizacaoReserva";

const AtualizacaoReserva = () => {
  const [reserva, setReserva] = useState({
    quarto: "",
    quantLeitos: "",
    quantAdultos: "",
    quantCrian: "",
    dataEntrada: "",
    dataSaida: "",
  });

  if (!localStorage.getItem("id_Hospede")) {
    const navigate = useNavigate();
    navigate("/login");
  }

  let result = new Object();

  const params = useParams();

  useEffect(() => {
    api.get("/reservas/" + params.id).then((response) => {
      result.quarto = response.data.mensage[0].quarto;
      result.quantLeitos = response.data.mensage[0].quantLeitos;
      result.quantAdultos = response.data.mensage[0].quantAdultos;
      result.quantCrian = response.data.mensage[0].quantCrian;
      result.dataEntrada = response.data.mensage[0].dataEntrada;
      result.dataSaida = response.data.mensage[0].dataSaida;

      console.log(result);
      console.log("----");

      setReserva(response.data.mensage[0]);

      // setReserva((reserva) => [...reserva, ...result]);

      console.log(reserva);
    });
  }, []);

  useEffect(() => {
    setReserva(reserva);
    console.log("teste" + reserva.quarto);
    console.log(reserva);
  }, [reserva]);

  return (
    <main>
      <section>
        {
          <FormAtualizacaoReserva>
            quarto={reserva.quarto}
            quantLeitos={reserva.quantLeitos}
            quantAdultos={reserva.quantAdultos}
            quantCrian={reserva.quantCrian}
            dataEntrada={reserva.dataEntrada}
            dataSaida={reserva.dataSaida}
          </FormAtualizacaoReserva>
        }
      </section>
    </main>
  );
};

export default AtualizacaoReserva;
