import './Productos.css'
import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CategoriaLlaveros from './Llamados/CategoriaLlaveros'
import ScrollToTop from './ScrollToTop';
import { Link } from 'react-router-dom';
import Filtros from './Llamados/Filtros'

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
      <Filtros />
      <div data-aos="fade" className='Productos-inicio'>
        <div className='Todos-productos'>
          <div className="Cards-productos">
            <div>
              <CategoriaLlaveros />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
