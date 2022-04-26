import './Productos.css'
import React from 'react'
import { Button, Card, Dropdown, Form, NavDropdown } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import CategoriaDecoracion from './Llamados/CategoriaDecoracion'
import CategoriaFiguras from './Llamados/CategoriaFiguras'
import CategoriaOtros from './Llamados/CategoriaOtros'
import CategoriaLlaveros from './Llamados/CategoriaLlaveros'
import CategoriaPokemons from './Llamados/CategoriaPokemons'
import CategoriaDiseño from './Llamados/CategoriaDiseño'

export default function Productos() {
  const [products, setProducts] = useState([]);

  // const precioFiltro = products.filter(prod => prod.price < 500)

  useEffect(() => {
    const productos = async () => {
      const { data } = await axios.get("/productos");
      setProducts(data);
    };
    productos()
  }, []);

      Aos.init({ duration: 2000 });
  return (
    <div>
      <div data-aos="fade" className='Productos-inicio'>
        <div className='Filtros d-flex'>
          <div>
            <h1>Filtros</h1>
            <NavDropdown className='Botones-select' variant="Botones-select" title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos">Todos los Productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/llaveros">Llaveros</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/figuras">Figuras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/pokemon">Pokemons</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/decoracion">Decoracion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/disenos">Diseños de peizas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos/otros">Otros</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className='Todos-productos'>
          <div className="Cards-productos">
            <div>
          <CategoriaPokemons />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
