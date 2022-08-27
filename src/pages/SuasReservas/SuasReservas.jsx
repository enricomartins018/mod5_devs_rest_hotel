import React, { useState, useEffect } from "react";
import Reservas from "../../components/Reservas/Reservas";
import { api } from "../../services/api";

const SuasReservas = () => {
  const [reserva, setReserva] = useState([]);

  // async function handleRequisicao() {
  //   const url = `https://hotel-api-s3.herokuapp.com/reservas`;
  //   const response = await fetch(url);
  //   const json = await response.json();

  //   if (json.reserva) {
  //     setReserva(json.reserva);
  //   }
  //   console.log(reserva);
  // }

  useEffect(() => {
    api.get("/reservas?idhospede=7").then((response) => {
      console.log(response);
      // para buscar por id
      const filtro = response.data.Reservas.filter((item) => {
        return item.idhospede == 7;
      });
      setReserva(filtro);
    });
    //
    // para buscar tudo
    // setReserva(resoponse.data.Reservas)
  }, []);
  // useEffect(() => {
  //   api.delete("reservas/:id").then((response) => {
  //     console.log(response);
  //     // para buscar por id
  //   });
  //   //
  //   // para buscar tudo
  //   // setReserva(resoponse.data.Reservas)
  // }, []);
  return (
    <main>
      <section>
        {reserva.map((item, index) => {
          return (
            <Reservas
              id={item.id}
              idhospede={item.idhospede}
              quarto={item.quarto}
              quantLeitos={item.quantLeitos}
              quantAdultos={item.quantAdultos}
              quantCrian={item.quantCrian}
              dataEntrada={item.dataEntrada}
              dataSaida={item.dataSaida}
              key={index}
            ></Reservas>
          );
        })}
      </section>
    </main>
  );
};

export default SuasReservas;
