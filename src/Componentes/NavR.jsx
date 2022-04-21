import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import './NavR.css'
import Logo from '../img/01.jpg'

export default function NavR({
    userName,
    userCategory,
    logout,
}) {
    return (
        <div>
            <div className='Nav-entera'>
                <Navbar className='Nav-bar fixed-top' expand="lg" variant="dark">
                    <div className='Nav-cont'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Navbar.Brand className='Logo-nav' as={Link} to="/"><img className='Logo-nav-img my-2' src={Logo} alt="" /></Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link className='Nav-item' as={Link} to="/" >Inicio</Nav.Link>
                                {userName && userCategory && (
                                    <Nav.Link as={Link} to="/admin"className='Nav-item'>
                                        Administracion
                                    </Nav.Link>)}
                                <Nav.Link className='Nav-item' as={Link} to="/productos" >Productos</Nav.Link>
                                <Nav.Link className='Nav-item' as={Link} to="/contacto" >Contacto</Nav.Link>
                                <Nav.Link className='Nav-item' as={Link} to="/register" >Registro</Nav.Link>
                                <div className="iconosnav">
                                    {userName && (
                                        <h2 style={{ width: "150px", maxWidth: "100%" }} className='Nav-item'>
                                            {userName}
                                        </h2>
                                    )}
                                    {/* muestra el nombre del usuario, con la codicion que si no está logueado no muestre nada */}
                                    {userName && (
                                        <Button className='Nav-item' onClick={logout}>
                                            Cerrar Sesión
                                        </Button>
                                    )}
                                    {!userName && (
                                        <Nav.Link as={Link} to="/login" className='Nav-item'>
                                            Login{" "}
                                        </Nav.Link>
                                    )}
                                    {userName && (
                                        <Nav.Link href="perfil" className='Nav-item'>
                                            <img
                                                src="https://icongr.am/fontawesome/user.svg?size=35&color=currentColor"
                                                alt="imagen"
                                            />{" "}
                                        </Nav.Link>
                                    )}
                                </div>
                            </Nav>
                            <input className='Input-Nav' placeholder='Busqueda...' type="text" /><Button className='Boton-busqueda'><img style={{ height: "15px" }} src="https://icongr.am/octicons/search.svg?size=128&color=currentColor" alt="" /></Button>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
