import React from 'react'
import Lista from "./componentes/Lista"
import ListaRicks from "./componentes/ListaRicks"
import Navbar from './componentes/Navbar'

function App() {


  return (
    <div>
      <h1 className='text-center'>Rick and Morty</h1>
      <Navbar name="Kenia Paiz" />    
      <ListaRicks />
      <Lista/>

    </div>
  )
}

export default App