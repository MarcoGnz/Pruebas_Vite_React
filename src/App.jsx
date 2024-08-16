import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navegacion, NavbarExample } from "./components";
import {
  Home,
  About,
  App_alquiler,
  DatosJson,
  App_maps,
  App_prueba_api,
  App_Uso_props2,
  App_usoComponents,
} from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Navegacion
        pages={[
          { nombre_page: "Home", link: "/" },
          { nombre_page: "About", link: "/About" },
          { nombre_page: "Alquiler", link: "/App_alquiler" },
          { nombre_page: "DatosJson", link: "/DatosJson" },
          { nombre_page: "App_maps", link: "/App_maps" },
          { nombre_page: "App_prueba_api", link: "/App_prueba_api" },
          { nombre_page: "App_Uso_props2", link: "/App_Uso_props2" },
          { nombre_page: "App_usoComponents", link: "/App_usoComponents" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/App_alquiler" element={<App_alquiler />} />
        <Route path="/DatosJson" element={<DatosJson />} />
        <Route path="/App_maps" element={<App_maps />} />
        <Route path="/App_prueba_api" element={<App_prueba_api />} />
        <Route path="/App_Uso_props2" element={<App_Uso_props2 />} />
        <Route path="/App_usoComponents" element={<App_usoComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
