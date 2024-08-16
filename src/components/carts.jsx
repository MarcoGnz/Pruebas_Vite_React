import React from 'react';
import PropTypes from 'prop-types';

function Cartas(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.datos.map((dato, index) => (
                <div className="col" key={dato.id}>
                    <div className="card h-100">
                        <img src={dato.url_image} className="card-img-top" alt={dato.nombre} />
                        <div className="card-body">
                            {
                            dato.nombre ?
                             (<h5 className="card-title">{dato.nombre}</h5>) :
                              <h5 className="card-title">Sin Datos</h5>
                            }
                            <p className="card-text">Edad: {dato.edad} años<br />{dato.info}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">{dato.franquicia}</small>
                        </div>
                    </div>
                </div>
            )
            )
            }
        </div>
    );
}

// Definición de PropTypes
Cartas.propTypes = {
    datos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            edad: PropTypes.number.isRequired,
            info: PropTypes.string.isRequired,
            url_image: PropTypes.string.isRequired,
            franquicia: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Cartas;
