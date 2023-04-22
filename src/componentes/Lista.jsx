import React from 'react'

function Lista(character) {
  return (
    <div className="card" >
    <img src={character.image}   className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <h6 className="card-title">{character.status}</h6>
        <h6 className="card-title">{character.species}</h6>
        <h6 className="card-title">{character.gender}</h6>
      
      </div>
    </div>
  
  )
}

export default Lista