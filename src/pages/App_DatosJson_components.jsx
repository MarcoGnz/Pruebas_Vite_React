import React, { useState, useEffect } from "react";

import Cartas from "/src/components/carts.jsx";

function DatosJson() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const llamarDatos = async () => {
            try {
                const respuesta = await fetch('/src/assets/datos.json'); // Ajusta la ruta si es necesario
                const info = await respuesta.json();
                setDatos(info); // Guarda los datos en el estado
            } catch (error) {
                console.log(error);
            }
        };
        llamarDatos();
    }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <div>
            <Cartas datos={datos}/>
        </div>
    );
}

export default DatosJson;
