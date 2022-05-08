import '../Productos.css'
import React from 'react'
import { Card } from 'react-bootstrap'
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
export default function CategoriaDecoracion() {
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
    <div className="Cards-productos">
      {products.map((prod) => {
        return (prod.categoria === "DECORACION" && (
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
                    <img style={{ objectFit: "cover" }} className="Cardp-img" src={prod.img[0]} alt="" />
                  </div>
                  <b st><Card.Title>{prod.nombre}</Card.Title></b>
                  <Card.Text className="module line-clamp">
                    {prod.descripcion}
                  </Card.Text>
                  <Card.Text className="module line-clamp">
                    <b>${prod.price}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </NavLink>)
        );
      })}
    </div>
  )
}
