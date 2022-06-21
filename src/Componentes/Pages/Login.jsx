import axios from "axios";
import { useState,useEffect } from "react";
import { Alert, Button, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Login.css";
import Aos from 'aos'
import "aos/dist/aos.css"
import ScrollToTop from "../ScrollToTop";

export default function Login({ setUser, setToken }) {
  const [input, setInput] = useState({});
  const [alert, setAlert] = useState("");
  const Navigate = useNavigate();

  const handleChange = (event) => {
    setAlert("");
    const { value, name } = event.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", input);
      localStorage.setItem("token", JSON.stringify(data)); //almacena en localhost el token generado a traves axios
      setToken(data.token);
      // setUser(admin.name);
      Navigate('/');
    } catch (error) {
      console.log(error.response.data.msg);
      error.response.data.msg[0].msg
        ? setAlert(error.response.data.msg[0].msg)
        : setAlert(error.response.data.msg);
    }
  };

 useEffect(() => {
    Aos.init({ duration: 1000 });
}, [])

  return (
    <div data-aos="fade-up" className="container loginForm">
      <Form
        onSubmit={handleSubmit}
        className="card mx-auto p-4 mt-5 login-form"
      >
        {alert && <Alert variant="danger">{alert}</Alert>}
        <h1 className="Titulo-login-principal">Ingresa!</h1>
        <Form.Group controlId="formBasicEmail" className="forminputconteiner">
          <Form.Label className="Form-titulos">Ingrese su Email</Form.Label>
          <Form.Control
            className="Input-login"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Ingrese su Email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="Form-titulos">Ingrese su Password</Form.Label>
          <Form.Control
            className="Input-login"
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Ingrese su Password (Min. 6 digitos)"
            required
          />
        </Form.Group>
        <Button className="Contacto-boton" variant="msgbut" type="submit">
          Enviar
        </Button>
        <Row>
          <Link className="mx-auto mt-2" to="/register">
            ¿No tienes una cuenta?   Registrate!
          </Link>
        </Row>
      </Form>
      <ScrollToTop />
    </div>
  );
}
