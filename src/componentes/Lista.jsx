import React from 'react'

function Lista(character) {
  return (
    <div  >
    <h2 className='bg-white'>{character.name}</h2>
    <img src={character.image} alt={character.name} />
    <h3 className='bg-white'>{character.status}</h3>
    <h3 className='bg-white'>{character.species}</h3>
    <h3 className='bg-white'>{character.gender}</h3>
   
  </div>

  )
}

export default Lista