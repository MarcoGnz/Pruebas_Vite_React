import React from 'react';
import PropTypes from 'prop-types';

function Cartas(props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Iteramos sobre el array de datos usando .map() */}
            {props.datos.map((dato, index) => (
                <div className="col" key={dato.id}>
                    <div className="card h-100">
                        {/* Mostramos una imagen en la parte superior de la tarjeta */}
                        <img src={dato.url_image} className="card-img-top" alt={dato.nombre} />
                        <div className="card-body">
                            {/* Si el nombre está presente, lo mostramos, de lo contrario mostramos "Sin Datos" */}
                            {
                            dato.nombre ?
                             (<h5 className="card-title">{dato.nombre}</h5>) :
                              <h5 className="card-title">Sin Datos</h5>
                            }
                            {/* Mostramos la edad y otra información del objeto */}
                            <p className="card-text">Edad: {dato.edad} años<br />{dato.info}</p>
                        </div>
                        <div className="card-footer">
                            {/* Mostramos la franquicia en el pie de la tarjeta */}
                            <small className="text-body-secondary">{dato.franquicia}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Definición de PropTypes para el componente Cartas
Cartas.propTypes = {
    datos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,           // ID único de cada dato, es obligatorio
            nombre: PropTypes.string.isRequired,       // Nombre del dato, es obligatorio
            edad: PropTypes.number.isRequired,         // Edad del dato, es obligatorio
            info: PropTypes.string.isRequired,         // Información adicional, es obligatorio
            url_image: PropTypes.string.isRequired,    // URL de la imagen, es obligatorio
            franquicia: PropTypes.string.isRequired,   // Franquicia a la que pertenece, es obligatorio
        })
    ).isRequired, // Se espera un array de objetos, cada uno con las propiedades definidas
};

export default Cartas;
