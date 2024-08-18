import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importa las herramientas necesarias para manejar las rutas en React
import { Navegacion, NavbarExample } from "./components"; // Importa los componentes de navegación
import {
  Home,
  About,
  App_alquiler,
  DatosJson,
  App_maps,
  App_prueba_api,
  App_Uso_props2,
  App_usoComponents,
} from "./pages"; // Importa las diferentes páginas de la aplicación
import "./App.css"; // Importa los estilos CSS para la aplicación

// Componente principal de la aplicación
function App() {
  return (
    <Router>
      {/* Componente de Navegación que recibe un array de objetos que define las páginas y sus respectivos links */}
      <Navegacion
        pages={[
          { nombre_page: "Home", link: "/" }, // Define la ruta para la página de inicio
          { nombre_page: "About", link: "/About" }, // Define la ruta para la página About
          { nombre_page: "Alquiler", link: "/App_alquiler" }, // Define la ruta para la página de alquiler
          { nombre_page: "DatosJson", link: "/DatosJson" }, // Define la ruta para la página que muestra datos en JSON
          { nombre_page: "App_maps", link: "/App_maps" }, // Define la ruta para la página que usa map en arrays
          { nombre_page: "App_prueba_api", link: "/App_prueba_api" }, // Define la ruta para la página que interactúa con una API
          { nombre_page: "App_Uso_props2", link: "/App_Uso_props2" }, // Define la ruta para la página que muestra el uso de props
          { nombre_page: "App_usoComponents", link: "/App_usoComponents" }, // Define la ruta para la página que muestra el uso de componentes
        ]}
      />
      {/* Configuración de las rutas y sus componentes correspondientes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
        <Route path="/About" element={<About />} /> {/* Ruta para la página About */}
        <Route path="/App_alquiler" element={<App_alquiler />} /> {/* Ruta para la página de alquiler */}
        <Route path="/DatosJson" element={<DatosJson />} /> {/* Ruta para la página que muestra datos en JSON */}
        <Route path="/App_maps" element={<App_maps />} /> {/* Ruta para la página que usa map en arrays */}
        <Route path="/App_prueba_api" element={<App_prueba_api />} /> {/* Ruta para la página que interactúa con una API */}
        <Route path="/App_Uso_props2" element={<App_Uso_props2 />} /> {/* Ruta para la página que muestra el uso de props */}
        <Route path="/App_usoComponents" element={<App_usoComponents />} /> {/* Ruta para la página que muestra el uso de componentes */}
      </Routes>
    </Router>
  );
}

export default App; // Exporta el componente App como el componente principal de la aplicación
