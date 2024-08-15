import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Sobre from "./components/Sobre.jsx";
import Navegacion from "./components/Navegacion.jsx";
import NavbarExample from "./components/NavbarExample.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navegacion/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
