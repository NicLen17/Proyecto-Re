import React, { useState, useEffect } from "react";
import { Form, Button, Alert, NavDropdown } from "react-bootstrap";
import './EnvioConsulta.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";
import ScrollToTop from './ScrollToTop'
import { Link } from "react-router-dom";

export default function EnvioConsulta() {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [alert, setAlert] = useState("");
    const [alertSuccess, setalertSuccess] = useState("")
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productos = async () => {
            const { data } = await axios.get("/productos");
            setProducts(data);
        };
        productos()
    }, []);

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
            await axios.post("/consultas", input);
            formulario.reset()
            setalertSuccess("Consulta enviada. Gracias en breve le responderemos");
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
        const consulta = { ...input, [name]: value };
        setInput(consulta);
    }

    return (
        <div>
            <div style={{ overflow: "hidden" }} data-aos="fade-down">
                <div className="Consulta">
                    <div data-aos="fade" className="Consulta-form">
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
                                <Form.Group
                                    style={{ marginTop: "15px" }}
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label className="Form-titulos">Producto a consultar: </Form.Label>
                                    <select className="Select-consulta" required name="producto" onChange={(e) => handleChange(e)}aria-label="Default select example">
                                        <option defaultValue>Seleciona un producto</option>
                                        {products.map((prod) => {
                                            return (
                                                <option>{prod.nombre}</option>
                                            )
                                        })}
                                    </select>
                                </Form.Group>
                                <Form.Label className="Form-titulos">Consulta</Form.Label>
                                <Form.Control className="Input-contacto" minLength="15" maxLength="300" style={{ maxHeight: "200px" }} as="textarea" placeholder="Consulta sobre el producto (stock, color, tamaño, etc)" required rows={3} name="mensaje" onChange={(e) => handleChange(e)} />
                                <Form.Control.Feedback type="invalid">
                                    Se requiere mensaje y un minimo de 15 caracteres!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                            </Form.Group>
                            <Button className="Contacto-boton" variant="msgbut" type="submit"> Enviar </Button>
                            {alertSuccess && <Alert variant="dark">{alertSuccess}</Alert>}
                            <h2 className="Titulo-consulta-secundario">Tambien puedes realizar tu consulta por...</h2>
                            <section className="Conteiner-redeS-consultas">
                                <a href="https://www.facebook.com/amir.nazar.5"><img className='Redes-consultas' src="https://icongr.am/fontawesome/facebook-official.svg?size=128&color=355bd0" alt="" /></a>
                                <a href="https://www.instagram.com/zeta.ross.3d/"><img className='Redes-consultas' src="https://icongr.am/fontawesome/instagram.svg?size=128&color=ff24f8" alt="" /></a>
                                <a href="https://api.whatsapp.com/send?phone=543816072290"><img className='Redes-consultas' src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=1dcd3b" alt="" /></a>
                            </section>
                            <p style={{fontSize: "15px", color: "white", textAlign: "center"}}>-Seras contactado segun los datos completados-</p>
                        </Form>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
}
