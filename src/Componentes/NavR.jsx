import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import './NavR.css'

export default function NavR() {
    return (
        <div>
            <div className='Nav-entera'>
                <Navbar className='Nav-bar fixed-top'  expand="lg" bg="dark" variant="dark">
                    <div className='Nav-cont'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='Nav-item' as={Link} to="/" >Inicio</Nav.Link>
                            <Nav.Link className='Nav-item' as={Link} to="/productos" >Productos</Nav.Link>
                            <Nav.Link className='Nav-item' as={Link} to="/contacto" >Contacto</Nav.Link>
                            <Nav.Link className='Nav-item' as={Link} to="/carrito" >Carrito</Nav.Link>
                        </Nav>
                        <input className='Input-Nav' placeholder='Busqueda...' type="text" /><Button className='Boton-busqueda'><img style={{ height: "15px" }} src="https://icongr.am/octicons/search.svg?size=128&color=currentColor" alt="" /></Button>
                        <Navbar.Brand className='Logo-nav' as={Link} to="/"><img className='Logo-nav-img' src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></Navbar.Brand>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
