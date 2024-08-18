import React, { useState, useEffect } from "react";
import Cartas from "../components/carts.jsx"; // Importa el componente Cartas que se usará para mostrar los datos

function DatosJson() {
    // Define el estado 'datos' para almacenar los datos que se obtendrán del archivo JSON
    const [datos, setDatos] = useState([]);

    // useEffect se usa para realizar una acción después de que el componente se haya montado
    useEffect(() => {
        // Definimos una función asíncrona para obtener los datos del archivo JSON
        const llamarDatos = async () => {
            try {
                // Realizamos una solicitud para obtener el archivo JSON
                const respuesta = await fetch('datos.json'); // La ruta puede necesitar ajustes según la estructura del proyecto
                // Convertimos la respuesta en un objeto JavaScript
                const info = await respuesta.json();
                // Guardamos los datos obtenidos en el estado 'datos'
                setDatos(info);
            } catch (error) {
                // En caso de error, se mostrará en la consola
                console.log(error);
            }
        };
        // Llamamos a la función para obtener los datos
        llamarDatos();
    }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <div>
            {/* Renderizamos el componente Cartas pasando los datos obtenidos como propiedad */}
            <Cartas datos={datos}/>
        </div>
    );
}

export default DatosJson;
