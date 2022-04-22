import './Productos.css'
import React from 'react'
import { Button, Card, Dropdown, Form, NavLink } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

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
        <div className='Filtros'> <br />
          <h1>Filtros</h1>
          <div className='Filtro-opciones'>
          <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Dropdown.Menu style={{ width: "400px" }} show>
              <Dropdown.Header>Dropdown header</Dropdown.Header>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="4">Something else here</Dropdown.Item>
              <h4>Tipo</h4>
              <Dropdown.Item eventKey="5">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="6">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="7">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </div>
        <div className='Todos-productos'>
        <div className="Cards-productos">
                {products.map((prod) => {
                    return (prod && (
                        <NavLink
                            key={prod._id}
                            style={{ textDecorationLine: "none" }}
                            to={`/individual/${prod._id}`}
                            exact
                            as={NavLink}
                        >
                            <div data-aos="fade-up" className="CardP-style">
                                <Card className="card-cont2">
                                    <Card.Body>
                                        <div className="Cardp-imgcont">
                                            <img style={{ objectFit: "cover" }} className="Cardp-img" src={prod.img[0]} alt="" />
                                        </div>
                                        <Card.Title>{prod.nombre}</Card.Title>
                                        <Card.Text className="module line-clamp">
                                            {prod.descripcion}
                                        </Card.Text>
                                        <Card.Text className="module line-clamp">
                                            {prod.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </NavLink>)
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  )
}
