import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='container text-center'>
            <h1 className='Potta-One text-danger'>404: Not Found</h1>
            <p className='mb-0'>Lo sentimos, la pagina que desea ingresar no existe.</p>
            <p className='mb-0'>Prueba mejor con estos links:</p>
            <div className="row justify-content-center">
                <NavLink className="col-12"to='/'>Sobre Nosotros</NavLink>
                <NavLink className="col-12"to='/menu'>Menu</NavLink>
                <NavLink className="col-12"to='/reservar'>Reservar</NavLink>
            </div>
        </div>
    )
}

export default NotFound