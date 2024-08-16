import { useRef, useState } from "react";

function a() {
  const seleccion = useRef(4);
  const dias = useRef(1);
  const [resultado, setResultado] = useState(null);
  let coste = 0;

  const Calcular = () => {
    if (dias.current.value === "") {

      setResultado(null);

    } else {
      if (seleccion.current.value === "Vehiculo") {

        coste = dias.current.value * 100;
        if (coste > 500)
          (coste -= 100),
            setResultado(
              <div>
                <p>Costo del Alquiler del Vehiculo: {coste}$.</p>
                <p> Se aplico un descueto de 100$</p>
              </div>
            ); //( - )
        else if (coste > 300)
          (coste -= 50),
            setResultado(
              <div>
                <p>Costo del Alquiler del Vehiculo: {coste}$.</p>
                <p> Se aplico un descueto de 50$</p>
              </div>
            ); //( - )
        else setResultado(<p>Costo del Alquiler del Vehiculo: {coste} $</p>);

      } else if (seleccion.current.value === "Pieza") {

        coste = dias.current.value * 50;
        if (coste > 500)
          (coste -= 100),
            setResultado(
              <div>
                <p>Costo del Alquiler de la pieza: {coste}$.</p>
                <p> Se aplico un descueto de 100$</p>
              </div>
            ); //( - )
        else if (coste > 300)
          (coste -= 70),
            setResultado(
              <div>
                <p>Costo del Alquiler del pieza: {coste}$.</p>
                <p> Se aplico un descueto de 70$</p>
              </div>
            ); //( - )
        else setResultado(<p>Costo del Alquiler del pieza: {coste} $</p>);

      } else if (seleccion.current.value === "Casa") {

        coste = dias.current.value * 200;
        if (coste > 800)
          (coste -= 150),
            setResultado(
              <div>
                <p>Costo del Alquiler de la casa: {coste}$.</p>
                <p> Se aplico un descueto de 150$</p>
              </div>
            ); //( - )
        else if (coste > 500)
          (coste -= 100),
            setResultado(
              <div>
                <p>Costo del Alquiler del casa: {coste}$.</p>
                <p> Se aplico un descueto de 100$</p>
              </div>
            ); //( - )
        else setResultado(<p>Costo del Alquiler del casa: {coste} $</p>);

      } else {

        setResultado(null);

      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Costo de Alquileres</h2>
      <div className="row justify-content-center">
        <div className="col-md-12 ">
          <div className="card p-4">
            <div className="form-group">
              <label htmlFor="Alquiler">Seleccione el Alquiler:</label>
              <select
                onChange={Calcular}
                ref={seleccion}
                id="Ser"
                className="form-control"
              >
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
              <div>{resultado != null && <p>{resultado} </p>}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default a;
