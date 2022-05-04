import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Filtros() {
    return (
        <div>      <div className='Filtros d-flex'>
            <div className='Filtro-Productios'>
                <h1>Filtros</h1>
                <NavDropdown className='Botones-select' variant="Botones-select" title="Categorias" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/productos">Todos los Productos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/llaveros">Llaveros</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/figuras">Figuras</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/pokemon">Pokemons</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/decoracion">Decoracion</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/diseño">Diseños de peizas</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/otros">Otros</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div></div>
    )
}
