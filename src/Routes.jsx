import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SuasReservas from "./pages/SuasReservas/SuasReservas";
import FacaSuaReserva from "./pages/FacaSuaReserva/FacaSuaReserva";
import Login from "./pages/Login/Login";
import CadastroHospede from "./pages/CadastroHospede/CadastroHospede";
import AtualizacaoReserva from "./pages/AtualizacaoReserva/AtualizacaoReserva";


const App = () => {
  const [loading, setLoading] = useState(true);
  const preLoad = document.getElementById("preLoad");
  if (preLoad) {
    setTimeout(() => {
      preLoad.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<CadastroHospede />} />
          <Route path="/suasreservas" element={<SuasReservas />} />
          <Route path="/facasuareserva" element={<FacaSuaReserva />} />
          <Route path="/atualizareserva/:id" element={<AtualizacaoReserva />} />
          <Route path="/reservas"></Route>
        </Routes>
      </Router>
    )

  );
}

export default App;
