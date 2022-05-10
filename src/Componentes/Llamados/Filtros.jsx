import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Filtros() {
    return (
        <div>
            <div className='Filtros d-flex'>
            <h1>Filtros</h1>
                <div className='Filtro-Productios'>
                    <NavDropdown className='Botones-select' variant="Botones-select" title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/productos">Todos los Productos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/llaveros">Llaveros</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/figuras">Figuras</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/pokemon">Pokemons</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/decoracion">Decoracion</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/disenos">Diseños de peizas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/otros">Otros</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className='Botones-select' variant="Botones-select" title="Precios" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/productos/precios/bajos">Hasta $3500</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/productos/precios/altos">$3500 a $5000</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </div>
    )
}
