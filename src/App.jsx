import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SuasReservas from "./pages/SuasReservas/SuasReservas";
import FacaSuaReserva from "./pages/FacaSuaReserva/FacaSuaReserva";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suasreservas" element={<SuasReservas />} />
        <Route path="/facasuareserva" element={<FacaSuaReserva/>} />
      </Routes>
    </Router>
  );
}

export default App;
