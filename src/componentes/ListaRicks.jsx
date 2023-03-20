import React from 'react'
import { useEffect,useState } from "react"
import Lista from "./Lista"

function ListaRicks() {

  const [characters, setcharacters] = useState([]);


  const obtenerLista = async () => {
    let respuesta = await fetch('https://rickandmortyapi.com/api/character');
    let datos = await respuesta.json();
   
    setcharacters(datos.results);

}

    useEffect(()=>{
      obtenerLista()
    },[])
    
    return (
      <div>
          <h1>Lista Rick and Morty</h1>
          <div className='container bg-dark'>
             <div className='row'>
             {
                  characters.map((character, indice) => {
                    
                      return <div className='col-md-4 m-4'>
                        <Lista key={indice} {...character}/>
                    </div>
                  })
              }
             </div>
          </div>
      </div>
  )
}




export default ListaRicks