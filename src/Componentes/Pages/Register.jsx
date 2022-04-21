import axios from "axios";
import { useState } from "react";
import {
    Form,
    InputGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
    Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./Register.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Register({ setToken }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [alert, setAlert] = useState("");
    const Navigate = useNavigate();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        console.log(form.checkValidity());
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            if (input.password === input.password1) {
                const { data } = await axios.post("/auth/register", input);
                console.log(data);

                localStorage.setItem("token", JSON.stringify(data));
                setToken(data.token);
                Navigate('/')
                // window.location.replace('/');
            } else {
                window.alert("Password no coinciden");
            }
        } catch (error) {
            console.log(error.response.data);
            error.response.data.msg
                ? setAlert(error.response.data.msg[0].msg)
                : setAlert(error.response.data);
        }
    };

    const handleChange = (e) => {
        setAlert("");
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <Container data-aos="fade-up">
            <Row>
                <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                    {alert && <Alert variant="danger">{alert}</Alert>}
                    <Card className="border Register-form">
                        <Card.Header className="text-white">
                            <h4 className="Titulo-register-principal">Crea tu cuenta</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group
                                    className="reginputconteiner"
                                    controlId="validationCustom01"
                                >
                                    <Form.Label className="Form-titulos">Nombre y Apellido</Form.Label>
                                    <Form.Control
                                        name="nombre"
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="text"
                                        placeholder="Nombre y Apellido"
                                        className="Input-register  text-uppercase"
                                        maxLength="25"
                                        minLength="6"
                                    />
                                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="Form-titulos">Celular</Form.Label>
                                    <Form.Control
                                        name="celular"
                                        required
                                        onChange={(e) => handleChange(e)}
                                        type="text"
                                        min="0"
                                        maxLength="15"
                                        pattern="[0-9,.]+"
                                        placeholder="Celular"
                                        className="Input-register "
                                    />
                                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="reginputconteiner"
                                    controlId="validationCustom02"
                                >
                                    <Form.Label className="Form-titulos">Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="email"
                                        placeholder="Email"
                                        maxLength="40"
                                        className="Input-register  text-uppercase"
                                    />
                                    <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="reginputconteiner"
                                    controlId="validationCustomUsername"
                                >
                                    <Form.Label className="Form-titulos">Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            minLength="6"
                                            name="password"
                                            onChange={(e) => handleChange(e)}
                                            type="password"
                                            placeholder="****"
                                            aria-describedby="inputGroupPrepend"
                                            className="Input-register"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password requiere un mínimo de 6 caracteres!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group
                                    className="reginputconteiner"
                                    controlId="validationCustomUsername"
                                >
                                    <Form.Label className="Form-titulos">Confirmar Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            minLength="6"
                                            name="password1"
                                            onChange={(e) => handleChange(e)}
                                            type="password"
                                            placeholder="****"
                                            aria-describedby="inputGroupPrepend"
                                            className="Input-register"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Password requiere un mínimo de 6 caracteres!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Row>
                                    <Button
                                        style={{ margin: "auto"}}
                                        className="Contacto-boton"
                                        variant="loginbut"
                                        type="submit"
                                    >
                                        Registrarme
                                    </Button>
                                </Row>
                                <Row>
                                    <Link className="mx-auto mt-2" to="/login">
                                        ¿Ya tiene una cuenta? Iniciar sesión
                                    </Link>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
