import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/contador'
import Saludos from './components/pruebaCompornente'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



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
      <h2 className='text-white'>Vite + React</h2>
      <div>
        <Contador></Contador>
      </div>
      <div>
        <Saludos></Saludos>
      </div>

    </>
  )
}

export default App
