import React, { useState, useEffect } from "react";
import Reservas from "../../components/Reservas/Reservas";
import { api } from "../../services/api";
import S from "./SuasReservas.module.css";
import video from "../../assets/video.mp4";
import foto from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { getReservas } from "/src/services/api.js";

const SuasReservas = () => {
  const [reservas, setReservas] = useState();
  const navigate = useNavigate();

  async function handleRequest() {
    if (!localStorage.getItem("id_Hospede")) {
      navigate("/login");
    }
    setReservas(await getReservas());
  }

  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    console.log(reservas);
  }, [reservas]);

  if (!reservas) {
    return (
      <main>
        <section>Nenhuma reserva encontrada</section>
      </main>
    );
  }
  // localStorage.clear();

  return (
    <main>
      <Header />
      <section>
        <div className={S.loginPage}>
          <div className={S.overlay}></div>
          <video src={video} autoPlay loop muted />
          <div className={S.cardContainer}>
            <div className={S.imageContainer}>
              <img className={S.imgFoto} src={foto}></img>
            </div>
            <div className={S.cardTitle}>Suas reservas</div>

            {reservas &&
              reservas.map((item, index) => {
                return (
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
                    <Link to="/">Voltar para a Home</Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuasReservas;
