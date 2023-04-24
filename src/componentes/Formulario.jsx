import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [origen, setOrigen] = useState('');
  const [estado, setEstado] = useState('');
  const [personajes, setPersonajes] = useState([]);
  const [error, setError] = useState(null);

  const handleName = (e) => {
    setNombre(e.target.value);
  }

  const handleUbicacion = (e) => {
    setUbicacion(e.target.value);
  }

  const handleOrigen = (e) => {
    setOrigen(e.target.value);
  }

  const handleEstado = (e) => {
    setEstado(e.target.value);
  }

  const obtenerPersonajes = async () => {
    try {
      const params = new URLSearchParams({
        name: nombre,
        location: ubicacion,
        origin: origen,
        status: estado,
      });
      const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?${params.toString()}`);
      const datos = await respuesta.json();

      if (datos.results.length === 0) {
        setError(`No se encontró ningún personaje con los filtros proporcionados`);
        setPersonajes([]);
      } else {
        setPersonajes(datos.results);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setError(`Hubo un error al buscar los personajes. Por favor, inténtalo de nuevo.`);
      setPersonajes([]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    obtenerPersonajes();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre del personaje' className='form-control' onChange={handleName} /><br />
        <input type="text" placeholder='Ubicación' className='form-control' onChange={handleUbicacion} /><br />
        <input type="text" placeholder='Origen' className='form-control' onChange={handleOrigen} /><br />
        <select className='form-control' onChange={handleEstado}>
          <option value=''>Seleciona una opcion</option>
          <option value='alive'>Vivo</option>
          <option value='dead'>Muerto</option>
          <option value='unknown'>Desconocido</option>
        </select><br />
        <button className='btn btn-dark btn-search' type='submit'>Buscar Personajes</button>
      </form>
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      <div className='buscadorPersonajes'>
        {personajes.map((personaje) => (
          <div className='buscadorItem' key={personaje.id}>
            <div className='buscadorItem2'>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Formulario;
