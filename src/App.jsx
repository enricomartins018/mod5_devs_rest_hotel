import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SuasReservas from "./pages/SuasReservas/SuasReservas";

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suasreservas" element={<SuasReservas />} />
      </Routes>
    </Router>
  );
}


export default App;
