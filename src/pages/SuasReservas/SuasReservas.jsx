import React, { useState, useEffect, useNavigate } from "react";
import Reservas from "../../components/Reservas/Reservas";
import { api } from "../../services/api";
import S from "./SuasReservas.module.css";
import video from "../../assets/video.mp4";
import foto from "../../assets/logo.svg";

const SuasReservas = () => {
  if (!localStorage.getItem("id_Hospede")) {
    const navigate = useNavigate();
    navigate("/login");
  }

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
    //console.log("teste: " + localStorage.getItem("id_Hospede"));

    try {
      api
        .get("/reservas/hospede/" + localStorage.getItem("id_Hospede"))
        .then((response) => {
          console.log(response);
          // para buscar por id
          // const filtro = response.data.Reservas.filter((item) => {
          //   return item.idhospede == localStorage.getItem("id_Hospede");
          // });
          setReserva(response.data.mensage);
        });
    } catch (e) {
      console.log(e);
    }
    //
    // para buscar tudo
    // setReserva(resoponse.data.Reservas)
  }, []);

  return (
    <main>
      <section>
        {reserva.map((item, index) => {
          console.log(reserva);
          return (
            <div className={S.loginPage}>
              <div className={S.overlay}></div>
              <video src={video} autoPlay loop muted />
              <div className={S.cardContainer}>
                <div className={S.imageContainer}>
                  <img className={S.imgFoto} src={foto}></img>
                </div>
                <div className={S.cardTitle}>Suas reservas</div>
                <div className={S.cardBody}>
                  <Reservas
                    id={item.id}
                    id_Hospede={item.id_Hospede}
                    quarto={item.quarto}
                    quantLeitos={item.quantLeitos}
                    quantAdultos={item.quantAdultos}
                    quantCrian={item.quantCrian}
                    dataEntrada={item.dataEntrada}
                    dataSaida={item.dataSaida}
                    key={index}
                  ></Reservas>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default SuasReservas;
