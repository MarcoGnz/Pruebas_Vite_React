import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const pages = [
    {
      name: "Alquiler",
      link: "/App_alquiler",
      descripción: "Calcula el alquiler de un vehículo, pieza o casa.",
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
    <div style={{ padding: "20px", margin: "100px", maxWidth: "1250px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Row xs={1} md={2} md={3} lg={4} className="g-4">
        {pages.map((page, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{page.name}</Card.Title>
                <Card.Text>{page.descripción}</Card.Text>
                <Button variant="primary" as={Link} to={page.link}>
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

export default Home;
