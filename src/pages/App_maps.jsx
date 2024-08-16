import { useState, useRef } from 'react'

function App_maps() {
  
  const miArray=()=>{
    const numeroArray = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
    return <p>
      {numeroArray.map((numero, index) => (
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2222329366.
        <span className='text-font' key={index}>[ Indice:{index}&nbsp;valor:{numero} ]&nbsp; &nbsp;</span>
      ))}
    </p>
  }

  const miArrayObjetos=()=>{
    const arrayObjetos = [
      {id: 1, nombre: 'Layla'},
      {id: 2, nombre: 'Maria'},
      {id: 3, nombre: 'Miya'},
      {id: 4, nombre: 'Asuka'},
      {id: 5, nombre: 'Kira'}
    ]
    return <p>
      {arrayObjetos.map((objeto, index) => (
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4094471416.
        <span className='text-font' key={index}> [clave:{objeto.id}&nbsp;valor:{objeto.nombre} ]&nbsp;&nbsp; &nbsp; </span>
      ))}
    </p>
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo react" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/src/assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Numeros del Array: </h2>
      <div className='c'>
      {miArray()}
      </div>
      <h2>Objetos del Array: </h2>
      <div className='c'>
      {miArrayObjetos()}
      </div>
      
    </>
  )
}

export default App_maps
