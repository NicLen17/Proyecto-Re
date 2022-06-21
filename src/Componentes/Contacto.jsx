import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';
import './Contacto.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";
import ScrollToTop from './ScrollToTop'
import Logo from '../img/01.jpg'


SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Contacto() {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const [alert, setAlert] = useState("");
  const [alertSuccess, setalertSuccess] = useState("")

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, [])

  const handleSubmit = async (e) => {
    const formulario = e.currentTarget;
    e.preventDefault();
    setValidated(true);
    if (formulario.checkValidity() === false) {
      return e.stopPropagation();
    }
    try {
      await axios.post("/mensajes", input);
      formulario.reset()
      setalertSuccess("Mensaje enviado. Gracias en breve le responderemos");
      setValidated(false);
    } catch (error) {
      error.response.data.msg
        ? setAlert(error.response.data.msg)
        : setAlert("este error");
    }
    setTimeout(() => {
      setAlert("");
    }, 5000);
  };
  const handleChange = (e) => {
    setAlert("");
    const { name, value } = e.target;
    const mensaje = { ...input, [name]: value };
    setInput(mensaje);
  }

  return (
    <div>
      <div style={{ overflow: "hidden" }} data-aos="fade-down">
        <h1 className="Titulo-contacto-principal">Contacto</h1>
        <div className="Contacto">
          <div data-aos="fade-right" className="Contacto-form">
            {alert && <Alert variant="danger">{alert}</Alert>}
            <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="Form-titulos">Nombre y Apellido</Form.Label>
                <Form.Control className="Input-contacto" type="name" placeholder="Nombre y Apellido" required name="nombreyapellido" maxLength="50" onChange={(e) => handleChange(e)} />
                <Form.Control.Feedback type="invalid">
                  Se requiere nombre y apellido!
                </Form.Control.Feedback>
                <Form.Control.Feedback>Recibido</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlInput1"       >
                <Form.Label className="Form-titulos">Correo electronico</Form.Label>
                <Form.Control className="Input-contacto" type="email" placeholder="Correo@example.com" required maxLength="30" name="email" onChange={(e) => handleChange(e)} />
                <Form.Control.Feedback type="invalid">
                  Se requiere correo Electronico!
                </Form.Control.Feedback>
                <Form.Control.Feedback>Recibido</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="Form-titulos">Telefono</Form.Label>
                <Form.Control className="Input-contacto" maxLength="10" type="number" placeholder="codigo de area + numero sin 15" required max="999999999999" name="tel" onChange={(e) => handleChange(e)} />
                <Form.Control.Feedback type="invalid">
                  Se requiere telefono valido!
                </Form.Control.Feedback>
                <Form.Control.Feedback>Recibido</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                style={{ marginTop: "15px" }}
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="Form-titulos">Mensaje</Form.Label>
                <Form.Control className="Input-contacto" minLength="20" maxLength="300" style={{ maxHeight: "200px" }} as="textarea" placeholder="Mensaje" required rows={3} name="mensaje" onChange={(e) => handleChange(e)} />
                <Form.Control.Feedback type="invalid">
                  Se requiere mensaje y un minimo de 20 caracteres!
                </Form.Control.Feedback>
                <Form.Control.Feedback>Recibido</Form.Control.Feedback>
              </Form.Group>
              <Button className="Contacto-boton" variant="msgbut" type="submit"> Enviar </Button>
              {alertSuccess && <Alert variant="dark">{alertSuccess}</Alert>}
            </Form>
          </div>
          <div data-Aos="fade-left" className="Otros-contactos">
            <img className="Logo-contacto mt-1" src={Logo} alt="" />
            <div className="Titulo-otrasR">
              <h2 >
                Tambien puedes contactarme por mis redes sociales!
              </h2>
            </div>
            <section className="Conteiner-redeS">
              <a href="https://www.facebook.com/amir.nazar.5"><img className='Redes-contacto' src="https://icongr.am/fontawesome/facebook-official.svg?size=128&color=355bd0" alt="" /></a>
              <a href="https://www.instagram.com/zeta.ross.3d/"><img className='Redes-contacto' src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="" /></a>
              <a href="https://api.whatsapp.com/send?phone=543816072290"><img className='Redes-contacto' src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="" /></a>
            </section>
            <div className="Conteiner-titulo-redeS">
              <a className='Redes-titulos' href="https://www.facebook.com/amir.nazar.5">Amir Nazar</a>
              <a className='Redes-titulos' href="https://www.instagram.com/zeta.ross.3d/">zeta.ross.3d</a>
              <a className='Redes-titulos' href="https://api.whatsapp.com/send?phone=543816072290">3816072290</a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
