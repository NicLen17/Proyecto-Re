import './Productos.css'
import React from 'react'
import { Button, Card, Dropdown, Form, NavDropdown, Spinner } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Filtros from './Llamados/Filtros'

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
                  <p style={{color: "white", marginTop: "20px"}}>La carga puede llevar un momento...</p>
                </div>
              </div>
              

              :

              <div className="Cards-productos">
                {products.map((prod) => {
                  return (
                    <NavLink
                      key={prod._id}
                      style={{ textDecorationLine: "none" }}
                      to={`/individual/${prod._id}`}
                      exact
                      as={NavLink}
                    >
                      <div>
                        <Card className="CardP-style">
                          <Card.Body>
                            <div className="Cardp-imgcont">
                              <img loading="lazy" style={{ objectFit: "cover" }} className="Cardp-img" src={prod.img} alt="" />
                            </div>
                            <b><Card.Title>{prod.nombre}</Card.Title></b>
                            <Card.Text className="module line-clamp">
                              {prod.descripcion}
                            </Card.Text>
                            <Card.Text className="module line-clamp">
                              <b style={{ color: "#fe8a39" }}>${prod.price}</b>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </NavLink>)
                })}
              </div>

          }
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
