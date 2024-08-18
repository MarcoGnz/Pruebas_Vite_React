import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navegacion } from "./components";
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
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login/Login";
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
          <Route path="/login" element={<Login />} />{" "}
          {/* Ruta para el inicio de sesión */}
          <Route
            path="/App_alquiler"
            element={
              <ProtectedRoute>
                <App_alquiler />
              </ProtectedRoute>
            }
          />
          <Route
            path="/DatosJson"
            element={
              <ProtectedRoute>
                <DatosJson />
              </ProtectedRoute>
            }
          />
          <Route
            path="/App_maps"
            element={
              <ProtectedRoute>
                <App_maps />
              </ProtectedRoute>
            }
          />
          <Route
            path="/App_prueba_api"
            element={
              <ProtectedRoute>
                <App_prueba_api />
              </ProtectedRoute>
            }
          />
          <Route
            path="/App_Uso_props2"
            element={
              <ProtectedRoute>
                <App_Uso_props2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/App_usoComponents"
            element={
              <ProtectedRoute>
                <App_usoComponents />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    
  );
}

export default App;
