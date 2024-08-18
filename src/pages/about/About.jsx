import React from "react";
import "./about.css"; // Archivo CSS que incluirá los estilos personalizados

function About() {
  return (
    <div className="about-background">
      <div className="about-content">
        <h1>Acerca de Este Proyecto</h1>
        <p>
          Este proyecto es una plataforma de prácticas diseñada para experimentar y aprender sobre el desarrollo web con React. Aquí estoy probando diferentes conceptos como la gestión de rutas, la creación de componentes, el manejo de estado y el uso de APIs.
        </p>
        <h2>Tecnologías Utilizadas</h2>
        <ul>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>React Router DOM</li>
          <li>Vite</li>
        </ul>
        <h2>Objetivos</h2>
        <p>
          El objetivo de este proyecto es mejorar mis habilidades en desarrollo front-end, especialmente en la creación de aplicaciones SPA (Single Page Applications) utilizando React.
        </p>
        <h2>Descripción de Páginas</h2>
        <p>
          En este proyecto, encontrarás varias páginas que demuestran el uso de componentes, llamadas a APIs, manejo de datos JSON, entre otros ejemplos.
        </p>
        <p>
          Puedes encontrar el código fuente en mi <a href="https://github.com/MarcoGnz/Pruebas_Vite_React.git" target="_blank" rel="noopener noreferrer">repositorio de GitHub</a>.
        </p>
      </div>
    </div>
  );
}

export default About;

