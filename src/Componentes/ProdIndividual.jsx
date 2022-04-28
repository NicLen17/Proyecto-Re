import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import './ProdIndividual.css';
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './ScrollToTop';

export default function ProdIndividual() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {

    const producto = async () => {
      const { data } = await axios.get(`/productos/${id}`);
      setProduct(data);
    }
    producto()
  }, [id])

  return (
    <div>
      <br />
      <div className="ProdInd">
        <div className="ProdInd-Cont">
          <div className="Img-ProdCont">
            <img className="Img-ProdInd" src={product.img?.[0]} alt="Producto principal" />
          </div>
        </div>
        <div className='ProdInd-Info'>
          <h1>{product.nombre}</h1>
          <h5>{product.categoria}</h5>
          <h2><b style={{ color: "#fe8a39" }}>$</b>{product.price}</h2>
          <p style={{ fontSize: "15px", maxInlineSize: "415px", marginTop: "20px", textJustify: "initial" }}>
            {product.descripcion}
          </p>
          <NavLink to='/consultas' as={NavLink}><Button className="Botones-precio" variant="btncompra"> Realizar consulta</Button></NavLink>
        </div>
      </div>
      <NavLink to='/productos' as={NavLink}><img className="Boton-volver" src="https://icongr.am/fontawesome/arrow-circle-left.svg?size=50&color=000000" alt="atras" /></NavLink>
      <ScrollToTop />
    </div>
  )
}