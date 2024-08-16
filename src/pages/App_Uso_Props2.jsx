import React, { useEffect, useState } from "react";

function App_Uso_props2() { 

    const [datos, setDatos] = useState([])
    
    useEffect(() => {
      const llamarDatos = async () => {
        try {
          const respuesta = await fetch('src/assets/datos.json');
          const info = await respuesta.json();
          setDatos(info);
        } catch (error) {
          console.log(error);
        }
      };
      llamarDatos();
    }, [])

  return (
    <div>
       <Info informacion={datos}></Info>
    </div>
  );
}

function Info({ informacion }) {

  // Verificar si hay datos en el array antes de desestructurar
  if (informacion.length === 0) {
    return <p>Cargando...</p>; // O cualquier otro mensaje de carga
  }

  const { nombre, edad, info, franquicia } = informacion[0];

  return (
    <div>
      {nombre && edad && (
         <p><strong>Nombre: </strong>{nombre} <strong>Edad: </strong>{edad} años</p>
      )}
      {info && <p><strong>Info: </strong>{info}</p>}
      {franquicia && (
        <p><strong>Franquicia: </strong>{franquicia}</p>
      )}
    </div>
  );
}



export default App_Uso_props2;