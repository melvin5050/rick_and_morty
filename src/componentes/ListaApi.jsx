import React from 'react'
import{ useState, useEffect } from 'react'
import Tarjeta from './Tarjeta';


const ListaApi =()=> {

const [rickandmorty, setRickandmorty] = useState([]);

const obtenerPersonajes = async () => {
    let respuesta= await fetch('https://rickandmortyapi.com/api/character?mame=');
    let datos = await respuesta.json();
    setRickandmorty(datos.results);
}
useEffect(() => {
    obtenerPersonajes();
},[]);

  return (
    <div className= 'container'>
      
        <div className= 'row d-flex '  >
            {
                rickandmorty.map((personajes, indice) => {
                    return (
                        <div className= 'col-md-3 d-flex lista-api '>
                           <Tarjeta key={indice} {...personajes}/>
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}


export default ListaApi