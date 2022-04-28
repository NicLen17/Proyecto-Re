import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, Outlet, useSearchParams } from 'react-router-dom'
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
                                    <Nav.Link as={Link} to="/admin" className='Nav-item'>
                                        Administracion
                                    </Nav.Link>)}
                                <Nav.Link className='Nav-item' as={Link} to="/contacto" >Contacto</Nav.Link>
                                {!userName && (
                                        <Nav.Link as={Link} to="/login" className='Nav-item'>
                                            Login{" "}
                                        </Nav.Link>
                                    )}
                                <NavDropdown className='Nav-drop' variant="Nav-drop" title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/productos">Todos los Productos</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/productos/llaveros">Llaveros</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/productos/figuras">Figuras</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/productos/pokemon">Pokemons</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/productos/decoracion">Decoracion</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/productos/disenos">Diseños de peizas</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/productos/otros">Otros</NavDropdown.Item>
                                </NavDropdown>
                                <div className="iconosnav">
                                    {/* muestra el nombre del usuario, con la codicion que si no está logueado no muestre nada */}
                                </div>
                            </Nav>
                            {userName && (
                                <Nav.Link href="perfil" className='Nav-item'>
                                    <img
                                        src="https://icongr.am/fontawesome/user.svg?size=35&color=ffffff"
                                        alt="imagen"
                                    />{" "}
                                </Nav.Link>
                            )}
                            {userName && (
                                <Button style={{ color: "black" }} className='Boton-cuenta' onClick={logout}>
                                    Cerrar Sesión
                                </Button>
                            )}
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
