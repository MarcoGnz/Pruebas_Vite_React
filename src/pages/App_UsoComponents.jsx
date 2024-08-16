import { useState, useRef } from 'react'
import Contador from '../components/contador'
import Saludos from '../components/pruebaCompornente'


function App_usoComponents() {



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="react.svg" className="logo react" alt="React logo" />
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

export default App_usoComponents
