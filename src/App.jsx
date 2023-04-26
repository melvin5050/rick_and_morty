import React from 'react'
import Lista from "./componentes/Lista"
import ListaRicks from "./componentes/ListaRicks"
import Navbar from './componentes/Navbar'
import Login from './componentes/login'
import { useAuth0 } from '@auth0/auth0-react';
import Logout from './componentes/logout';


function App() {
/**validar si esta logeado */
const {user, isAuthenticated} = useAuth0()
console.log(window.location.origin);

  return (
    <div>

      {
        isAuthenticated ? (
        <div>
        <h1 className='text-center'>Rick and Morty</h1>
        <Navbar name="Kenia Paiz" />    
        <Logout/> 
        <ListaRicks />
        <Lista/>
      </div>
        ) : (<Login />)
      }
    </div>
  )

}

export default App