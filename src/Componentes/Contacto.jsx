import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';
import './Contacto.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";



SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Contacto() {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});
  const [alert, setAlert] = useState("");
  const [alertSuccess, setalertSuccess] = useState("")

  useEffect(() => {
    Aos.init({ duration: 1000 });
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
    <div data-aos="fade-down-right">
      <div className="body" style={{ marginBottom: "160px", maxWidth: "100%" }}>
        <div className="p-3 contacto" style={{ textAlign: "center", marginTop: "45px" }}>
          <h1>CONTACTA CON NOSOTROS</h1>
          <h3>Podes enviarnos tu consulta</h3>
          <p>
            Completa el formulario con tu consulta y nuestros asesores responderan
            dentro de las 48hs habiles. Tambien podes contactarnos mediante los
            enlaces directos de nuestras redes sociales!
          </p>
        </div>
        <div className="formulario" style={{ maxWidth: "100%" }}>
          <div className="row d-flex flex-wrap" style={{ maxWidth: "100%" }}>
            <div className="d-flex flex-wrap col" style={{ maxWidth: "100%" }}>
              <div
                className="p-5 mx-auto"
                style={{ textAlign: "left", width: "700px" }}
              >{alert && <Alert variant="danger">{alert}</Alert>}
                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>

                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control className="labelform" type="name" placeholder="Nombre y Apellido" required name="nombreyapellido"  maxLength="50" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere nombre y apellido!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlInput1"       >
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control className="labelform" type="email" placeholder="Correo@example.com" required maxLength="30" name="email" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere correo Electronico!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control className="labelform" maxLength="10" type="number" placeholder="codigo de area + numero sin 15" required max="999999999999" name="tel" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere telefono valido!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    style={{ marginTop: "15px" }}
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control className="labelform" minLength="20" maxLength="300" as="textarea" placeholder="Mensaje" required rows={3} name="mensaje" onChange={(e) => handleChange(e)} />
                    <Form.Control.Feedback type="invalid">
                      Se requiere mensaje y un minimo de 20 caracteres!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                  </Form.Group>
                  <Button className="msgbut"
                  variant="msgbut"
                    type="submit"
                    style={{ marginTop: "10px", width: "100%" }}
                  >
                    Enviar
                    <img
                      src="https://icongr.am/octicons/comment.svg?size=25&color=ffffff"
                      className="mr-3"
                      alt="imagen no disponible"
                    />
                  </Button>
                </Form>
                <br />
                <p className="msgtext" style={{ fontSize: "12px", textAlign: "justify" }}>
                  Phone Pixels te informa que los datos de caracter personal que
                  proporciones rellenando este formulario seran tratados de manera
                  confidencial. La finalidad de la recogida y tratamiento de los
                  mismos es dar respuesta a solicitudes de contacto y envio de
                  contenidos. La legitimación se realiza a través de tu
                  consentimiento. Los datos que me facilites estarán ubicados en los
                  servidores de nuestro proveedor de hosting XXXX
                  (https://www.phonepixels.com/) en EEUU. Podras acceder,
                  rectificar, limitar y suprimir tus datos a través del email
                  phonepixels@gmail.com asi como el derecho a presentar una
                  reclamación ante una autoridad de control.
                </p>
                <hr />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
