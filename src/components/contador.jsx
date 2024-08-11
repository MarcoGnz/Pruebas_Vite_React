import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contador = () => {
    const [cuenta, setCuenta] = useState(1);

    const aumentar = () => {
        setCuenta(cuenta + 1);
    };

    const disminuir = () => {
        setCuenta(cuenta - 1);
    };

    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap p-3">
            <button className="btn btn-primary m-2" onClick={aumentar}>
                Aumentar
            </button>
            <input
                type="number"
                value={cuenta}
                size="2"
                className="form-control text-center m-2"
                style={{ width: "80px" }}
                readOnly
            />
            <button className="btn btn-danger m-2" onClick={disminuir}>
                Disminuir
            </button>
        </div>
    );
};

export default Contador;
