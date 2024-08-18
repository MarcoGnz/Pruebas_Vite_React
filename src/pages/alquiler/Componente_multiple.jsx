const Componente_multiple = ({ option, dias }) => {
  const calculoCostoHotel = () => {
    let coste = dias * 50;

    if (dias > 5) coste -= 35;
    else if (dias > 3) coste -= 25;

    return <p>Coste estacias Hotel: {coste} $</p>;
  };

  const calculoAlquilerCoche = () => {
    let coste = dias * 45;

    if (dias > 7) coste -= 30;
    else if (dias > 3) coste -= 15;

    return <p>Coste alquiler coche: {coste} $</p>;
  };


  return <div> {option===1 ? calculoCostoHotel() : option===2 ? calculoAlquilerCoche() : ""} </div>
};

export default Componente_multiple;