import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../assets/FLDSMDFR.png'

function Header() {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <div className="container">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-toggler">
                        <div className='d-flex justify-content-center align-items-center'>
                            <NavLink to="/" className='navbar-brand'>
                                <img src={logo} alt="Logo" className='logo-image' />
                            </NavLink>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h1 className='Potta-One'>FLDSMDFR Restaurante</h1>
                        </div>
                        <ul className="navbar-nav d-flex justify-content-center align-items-center">
                            <li className="nav-item">
                                <NavLink to="/" className='nav-link' aria-current="page">Sobre Nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/menu" className='nav-link'>Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/reservar" className="nav-link">Reservar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/reservas" className="nav-link">Reservas</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header