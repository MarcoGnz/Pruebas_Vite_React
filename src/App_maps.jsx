import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const miArray=()=>{
    const numeroArray = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
    return <p>
      {numeroArray.map((numero, index) => (
        <span className='text-font' key={index}> clave:{index}&nbsp;valor:{numero}&nbsp; </span>
      ))}
    </p>
  }

  const miArrayObjetos=()=>{
    const arrayObjetos = [
      {id: 1, nombre: 'Layla'},
      {id: 2, nombre: 'Maria'},
      {id: 3, nombre: 'Miya'}
    ]
    return <p>
      {arrayObjetos.map((objeto, index) => (
        <span className='text-font' key={index}> clave:{objeto.id}&nbsp;valor:{objeto.nombre}&nbsp; </span>
      ))}
    </p>
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
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

export default App
