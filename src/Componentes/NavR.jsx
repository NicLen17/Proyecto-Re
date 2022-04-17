import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function NavR() {
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/"><img style={{width: "35px", height: "35px"}} src="https://www.disaileco.com/wp-content/uploads/2013/12/1200x800.gif" alt="" /></Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                        <input placeholder='Busqueda...' type="text" /><Button></Button>
                            <Nav.Link as={Link} to="/productos" >Productos</Nav.Link>
                            <Nav.Link as={Link} to="/contacto" >Contacto</Nav.Link>
                            <Nav.Link as={Link} to="/carrito" >Carrito</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
