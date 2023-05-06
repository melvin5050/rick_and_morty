import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Lista from './Lista'



/** pasando por parametro las props */
export default function Navbar(props) {
    /**
   
     */
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* pasando la prop name en el menu */}
                    <a className="navbar-brand" href="#">Bienvenido, {props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/**
                         * => asignamos el nombre del a ruta (path)
                         */}
                        <ul className='navbar-nav'> 
                            <li className='nav-item'>
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/formulario" className='nav-link'>Formulario</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/lista2" className='nav-link'>Personajes</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
            <Routes>
                {/** asignando las rutas Home y formulario 
       
                */}
                <Route path='/' element={<Lista />}/>
                <Route path='/formulario' element = {<Formulario/>}/>
              
            </Routes>
        </BrowserRouter>
    )
}

