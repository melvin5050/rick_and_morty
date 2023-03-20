import React from 'react'
import Lista from "./componentes/Lista"
import ListaRicks from "./componentes/ListaRicks"

function App() {


  return (
    <div>
      <h1 className='text-center'>Rick and Morty</h1>

   
      <ListaRicks />
      <Lista/>

    </div>
  )
}

export default App