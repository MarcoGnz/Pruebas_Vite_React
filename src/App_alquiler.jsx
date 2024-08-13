
import { useRef, useState } from "react";
import "./App.css";


function a() {
  const seleccion = useRef(4);
  const dias = useRef(1);
  const [resultado, setResultado] = useState(null);

  const Calcular = () => {
    if (dias.current.value === "") {
      setResultado(null);
    } else {
      if (seleccion.current.value === "Vehiculo") {
        setResultado(dias.current.value * 100);
      } else if (seleccion.current.value === "Pieza") {
        setResultado(dias.current.value * 50);
      } else if (seleccion.current.value === "Casa") {
        setResultado(dias.current.value * 200);
      } else {
        setResultado(null);
      }
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Costo de Alquileres</h2>
      <div className="row justify-content-center">
        <div className="col-md-12 ">
          <div className="card p-4">
            <div className="form-group">
              <label htmlFor="Alquiler">Seleccione el Alquiler:</label>
              <select onChange={Calcular} ref={seleccion} id="Ser" className="form-control">
                <option value="Vehiculo">Vehiculo</option>
                <option value="Pieza">Pieza</option>
                <option value="Casa">Casa</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <input
                ref={dias}
                id="dias"
                type="number"
                className="form-control"
                placeholder="Número de días"
                min="0"
                step="01"
                onChange={Calcular}
              />
            </div>
            <div className="text-center mt-4">
              <div>{resultado != null && <p>{resultado} $</p>}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default a