import React, { useEffect, useState } from 'react'

export default function Tarjeta(props) {
    const [personaje, setPersonaje] = useState({});
    const [image, setImage] = useState({});
    const [origen, setOrigen] = useState({});
    const [Ubicacion, setUbicacion]= useState ({});

    const obtenerPersonajeByUrl = async (url) => {
        let respuesta= await fetch(url);
        let datos = await respuesta.json();
        setPersonaje(datos);
        setImage(datos.image);
        setOrigen(datos.origin);
        setUbicacion(datos.location);
    }
    useEffect(() => {``
        obtenerPersonajeByUrl(props.url);
    }, []);
    
    const idModal = `#${personaje.id}`;
  return (
    <div>
        <div className="card">
            <div className="card-body">
               <h5 className="card-title">{personaje.name}</h5>
             <img src={image} alt="" />
             <button type="button" className="btn btn-primary btn-targeta" data-bs-toggle="modal" data-bs-target={idModal}>
                Ver informacion de personaje
              </button>
              </div>
        </div>
       



<div className="modal fade" id={personaje.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{personaje.name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img src={image} alt={personaje.name} />
      <p>Estado: {personaje.status}</p>
      <p>Origen: {origen.name} </p>
      <p>Especie: {personaje.species}</p>
      <p>Ubicacion: {Ubicacion.name}</p>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}