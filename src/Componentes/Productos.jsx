import './Productos.css'
import React from 'react'
import { Card, Dropdown, Form } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productos = async () => {
      const { data } = await axios.get("/productos");
      setProducts(data);
    };
    productos()

    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className='Productos-inicio'>
        <div className='Filtros'>
          <h1>Filtros</h1>
          <div>
            <select className="registerbut" aria-label="Default select example"
              name="categoria">
              <option defaultValue >Categoria</option>
              <option value="Diseño" >Diseño de piezas</option>
              <option value="Decoracion">Decoracion</option>
              <option value="Figuras">Figuras</option>
              <option value="Llaveros">Llaveros</option>
              <option value="Pokemon">Pokemon</option>
              <option value="Otros">Otros</option>
            </select>
          </div>
        </div>
        <div className='Todos-productos'>
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
                  <div data-aos="fade-up">
                    <Card className="CardP-style">
                      <Card.Body>
                        <div className="Cardp-imgcont">
                          <img style={{ objectFit: "cover" }} className="Cardp-img" src={prod.img[0]} alt="" />
                        </div>
                        <Card.Title>{prod.nombre}</Card.Title>
                        <Card.Text className="module line-clamp">
                          {prod.descripcion}
                        </Card.Text>
                        <Card.Text className="module line-clamp">
                          <b>${prod.price}</b>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
