import { StrictMode } from 'react'; // Importa StrictMode, una herramienta de desarrollo que ayuda a identificar posibles problemas en la aplicación
import { createRoot } from 'react-dom/client'; // Importa createRoot, una nueva API de React para inicializar la aplicación

import Prueba from './Prueba.jsx'; // Importa el componente Prueba
import App from './App.jsx'; // Importa el componente principal de la aplicación
//import './index.css'; // Importa los estilos globales de la aplicación

// Crea el "root" o raíz de la aplicación React y la renderiza dentro del elemento con id 'root' en el HTML
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/* StrictMode actúa como un envoltorio que ayuda a identificar problemas potenciales en la aplicación durante el desarrollo */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </StrictMode>,
);
