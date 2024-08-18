import React from "react"; // Importa React, necesario para usar JSX
import Card from "react-bootstrap/Card"; // Importa el componente Card de React Bootstrap para crear tarjetas
import Button from "react-bootstrap/Button"; // Importa el componente Button de React Bootstrap
import { Link } from "react-router-dom"; // Importa Link para navegar entre rutas sin recargar la página
import Row from "react-bootstrap/Row"; // Importa Row de React Bootstrap para organizar las tarjetas en filas
import Col from "react-bootstrap/Col"; // Importa Col de React Bootstrap para definir las columnas dentro de Row

function Home() {
  // Definición de las páginas disponibles y sus detalles
  const pages = [
    {
      name: "Alquiler", // Nombre de la página
      link: "/App_alquiler", // Ruta a la que navegará al hacer clic en el botón
      descripción: "Calcula el alquiler de un vehículo, pieza o casa.", // Breve descripción de la página
    },
    {
      name: "DatosJson",
      link: "/DatosJson",
      descripción: "Muestra los datos de un JSON en una tabla.",
    },
    {
      name: "App_maps",
      link: "/App_maps",
      descripción: "Ejemplo del uso de la funcion map en un array.",
    },
    {
      name: "App_prueba_api",
      link: "/App_prueba_api",
      descripción: "Muestra datos aleatorios de una API pokemons en una tabla.",
    },
    {
      name: "About",
      link: "/About",
      descripción: "Acerca de mi pagina de pruebas",
    },
    {
      name: "App_Uso_props2",
      link: "/App_Uso_props2",
      descripción: "Ejemplo de uso de props en un componente.",
    },
    {
      name: "App_usoComponents",
      link: "/App_usoComponents",
      descripción: "Ejemplo de uso de componentes.",
    },
  ];

  return (
    // Estilo del contenedor principal
    <div style={{ padding: "20px", margin: "100px", maxWidth: "1250px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {/* Uso de Row para organizar las tarjetas en una cuadrícula adaptable */}
      <Row xs={1} md={2} md={3} lg={4} className="g-4">
        {/* Itera sobre las páginas y genera una tarjeta para cada una */}
        {pages.map((page, index) => (
          <Col key={index}> {/* Cada tarjeta está envuelta en un Col para que se organice correctamente en la cuadrícula */}
            <Card>
              <Card.Body>
                <Card.Title>{page.name}</Card.Title> {/* Título de la tarjeta basado en el nombre de la página */}
                <Card.Text>{page.descripción}</Card.Text> {/* Descripción de la tarjeta */}
                <Button variant="primary" as={Link} to={page.link}> {/* Botón que navega a la página correspondiente */}
                  Ir a {page.name}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home; // Exporta el componente Home como el componente principal para esta página
