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

  const [reservas, setReservas] = useState();

  useEffect(() => {
    try {
      api
        .get("/reservas/hospede/" + localStorage.getItem("id_Hospede"))
        .then((response) => {
          console.log(response);

          if (response.data.mensage !== "undefined") {
            setReservas(response.data.mensage);
          }
          console.log(reservas);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!reservas) {
    return (
      <main>
        <section>Nenhuma reserva encontrada</section>
      </main>
    );
  }

  return (
    <main>
      <section>
        {reservas.map((item, index) => {
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
