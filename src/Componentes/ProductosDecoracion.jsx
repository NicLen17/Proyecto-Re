import './Productos.css'
import React from 'react'
import { NavDropdown, Spinner } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CategoriaDecoracion from './Llamados/CategoriaDecoracion'
import ScrollToTop from './ScrollToTop';
import Filtros from './Llamados/Filtros';

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [cargador, setCargador] = useState(false);

  useEffect(() => {
    setCargador(true)
    setTimeout(() => {
      setCargador(false)
    }, 1250);
  }, [])
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
          {
            cargador ?

              <div className='Cargador-cont'>
                <Spinner className='mt-2 Cargador-productos' animation="border" variant="danger" />
                <div>
                  <p style={{ color: "white", marginTop: "20px" }}>La carga puede llevar un momento...</p>
                </div>
              </div>

              :

              <div className="Cards-productos">
                <div>
                  <CategoriaDecoracion />
                </div>
              </div>

          }
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
