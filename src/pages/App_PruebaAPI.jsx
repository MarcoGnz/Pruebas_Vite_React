import React, { useState, useRef, useEffect } from 'react';

function getRandomInt(max) {
  let number = Math.floor(Math.random() * max) + 1;
  return number;
}
function App_prueba_api() {
  // API pokemon
  const [imagenPokemon, setImagenPokemon] = useState(null);
  const nombrePokemon = useRef();

  const llamadaAPIpokemon = async () => {
    try {
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomInt(1025));
      const datos = await respuesta.json();
      console.log(datos);
      return datos;
    } catch (error) {
      console.log("Error al acceder a la API: ", error);
    }
  };

  const BuscarPokemon = async () => {
    const datosPokemon = await llamadaAPIpokemon();
    if (datosPokemon) {
      nombrePokemon.current.innerHTML = datosPokemon.forms[0].name;
      const imagenPokemon = datosPokemon.sprites.front_default;
      setImagenPokemon(imagenPokemon);
      console.log(imagenPokemon);
    }
  };

  return (
    <div className='contenedor'>
      <h1 className='centrar-titulo'>¿Quién es ese Pokémon?</h1>
      <button onClick={BuscarPokemon} className='centrar-button'>Buscar Pokémon</button>
      <div ref={nombrePokemon}></div>
      <div className='cuandro-imagen'>{imagenPokemon && <img style={{ width: '200px', height: '200px' }}  src={imagenPokemon} alt="Pokemon" />}</div>
    </div>
  );
}

export default App_prueba_api;



/*
function App_prueba_api() {
  //Ejemplo de useState
  const [resultado , setResultado] = useState(null);

  const elmento = <h1 className='centrar-titulo'>Hola mundo</h1>
  const elemento2 = <strong>{suma(10, 5000)}</strong>

  const botonPulsado=()=>{
    const r = suma(4,4)

    setResultado(r)

  }

  return <div>

    <button onClick={sumador} style={{marginTop : "10px", marginLeft : "10px"}}> Apretar </button>
    <button onClick={botonPulsado} style={{marginTop : "10px", marginLeft : "10px"}}> Resultado </button>
    <div>{elmento}</div>

    <h2>Gano {elemento2}$ al año</h2> 
    
    <div> {resultado!=null && <h3>El resultado es: {resultado}</h3>}</div>

    <div> {true && <h3>Hola true</h3>}</div>
    <div> {false && <h3>Hola false</h3>}</div>

    </div>

}

const sumador=()=>{
  alert(suma(50, 50000))
}

function suma(a,b) {
  return a * b
}
 */

/* 
function App_prueba_api() {
  // Ejemplo de useRef
  const videoRef = useRef(null)
  const videoPlay=()=>{
    videoRef.current.play()
  }
  const videoPause=()=>{
    videoRef.current.pause()
  }


  return (
    <div>
      <div>
        <video ref={videoRef} width="300px">
          <source src={video} type='video/mp4'></source>
        </video>
      </div>
      <button onClick={videoPlay}> play</button>
      <button onClick={videoPause}> Pause</button>
    </div>
  )

}*/

/*
function App_prueba_api() {
  // Ejercicio: Conversión de guaraníes a dólares
  const inputRef = useRef(null);
  const input = <input 
  ref={inputRef} 
  className='centrar-input' 
  type='number' 
  placeholder='Ingrese monto en guaraníes'></input>
  const [resultado , setResultado] = useState(null);
  const botonPulsado=()=>{
    const r = convertidor_G_a_US(inputRef.current.value)
    setResultado(r)
  }
  const mostrarValor=()=>{
    console.log(inputRef.current.value) 
  }
  const titulo = <h1 className='centrar-titulo'> Conversor Guaranies a Dolares</h1>
  const boton = <button onClick={botonPulsado} className='centrar-button'>Convertir</button>
  const boton2 = <button onClick={mostrarValor} className='centrar-button'>Mostrar</button>
  return <div className='contenedor' >
    {titulo}
    {input}
    {boton}
    {boton2}
    <div> {resultado!=null && <h3>{resultado} $</h3>}</div>
    </div>
}

function convertidor_G_a_US(a) {
  const resultado = a / 7600;
  return resultado.toFixed(2);
} 
*/

/* 
function App_prueba_api() {
  //conversor Euro dollar 
  const euroRef= useRef()
  const resultado = useRef()
  const calcular = () => {
    const euroValor = euroRef.current.value
    const dollares = euroValor*1.08
    resultado.current.innerHTML = dollares.toFixed(2) + " $"
  }
  return <div className='contenedor'>
    <h1 className='centrar-titulo' >Conversor Euro-Dollar</h1>
    <input ref={euroRef} className='centrar-input'></input>
    <button onClick={calcular} className='centrar-button'>Convertir</button>
    <div ref={resultado}></div>
  </div>
}
*/