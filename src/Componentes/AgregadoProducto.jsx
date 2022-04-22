import React, { useState } from 'react'
import './AgregadoProducto.css'
import axios from "axios";
import {
    Form,
    InputGroup,
    Button,
    Row,
    Col,
    Card,
    Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import { getBase64 } from './utils/img';


export default function AgregadoProducto({ productos }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});
    const [alert, setAlert] = useState("");
    const [imagenes, setImagenes] = useState({})
    const [alertSuccess, setalertSuccess] = useState("")
    const handleSubmit = async (event) => {
        const formulario = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (formulario.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            await axios.post("/productos", input);
            formulario.reset();
            setalertSuccess(`PRODUCTO CREADO EXITOSAMENTE`);
            setValidated(false);

        } catch (error) {
            error.response.data.msg
                ? setAlert(error.response.data.msg)
                : setAlert(error.response.data);
        }
        productos();
        setTimeout(() => { setalertSuccess("") }, 5000);
    };
    const onChangeImg = async (e) => {
        const imagenesArray = [];
        const imagenesInput = e.target.files;
        for (let i = 0; i < imagenesInput.length; i++) {
            const base64 = await getBase64(imagenesInput[i]);
            imagenesArray.push(base64);
            const iman = { img: imagenesArray }
            setImagenes(iman);
        };
    }

    const handleChange = (e) => {
        setAlert("");
        const { name, value } = e.target;
        const productoInput = { ...input, ...imagenes, [name]: value.toUpperCase() };
        setInput(productoInput);
    };

    return (
        <div>
            <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                {alert && <Alert variant="danger">{alert}</Alert>}
                {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                <Card style={{ height: "880px" }} className="border Form-agregado">
                    <Card.Header className="text-whiteagregado">
                        <h4 style={{ color: "white" }} className="Titulo-agregado-principal">Ingresar Producto</h4>
                    </Card.Header>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="reginputconteineragregado" controlId="validationCustom02">
                                <Form.Label className='Form-titulos'>Marca</Form.Label>
                                <Form.Control
                                    name="nombre"
                                    onChange={(e) => handleChange(e)}
                                    required
                                    type="text"
                                    placeholder="Fabricante del producto"
                                    className="Input-register"
                                    maxLength="20"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Se requiere el fabricante del producto!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='Form-titulos'>Precio</Form.Label>
                                <Form.Control
                                    min="0"
                                    name="price"
                                    onChange={(e) => handleChange(e)}
                                    type="number"
                                    placeholder="$$$"
                                    className="Input-register"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Precio obligatorio!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="reginputconteineragregado" controlId="validationCustomUsername">
                                <Form.Label className='Form-titulos' >Caracteristicas</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        minLength="6"
                                        name="descripcion"
                                        onChange={(e) => handleChange(e)}
                                        as="textarea"
                                        placeholder="Caracteristicas principales del producto"
                                        aria-describedby="inputGroupPrepend"
                                        className="Input-register"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Las caracteristicas son obligarorias!
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className='Form-titulos Input-register'>Agregar imagen del producto de forma local</Form.Label>
                                <Form.Group controlId="formFileMultiple" className="mb-3" onChange={(e) => onChangeImg(e)}>
                                    <Form.Control type="file" multiple />
                                </Form.Group>
                                <Form.Control.Feedback type="invalid">
                                    La imagen es obligaroria!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='Form-titulos'>Stock Disponible</Form.Label>
                                <Form.Control
                                    name="stock"
                                    onChange={(e) => handleChange(e)}
                                    type="number"
                                    placeholder="stock"
                                    className="Input-register w-25"
                                    required
                                    min="0"
                                    max="100"
                                />
                                <Form.Control.Feedback type="invalid">
                                    La cantidad disponible es obligatoria! STOCK
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="selectsa">
                                <select className="registerbut" aria-label="Default select example"
                                    name="categoria" onChange={(e) => handleChange(e)} required>
                                    <option defaultValue >Categoria</option>
                                    <option value="Diseño" >Diseño de piezas</option>
                                    <option value="Decoracion">Decoracion</option>
                                    <option value="Figuras">Figuras</option>
                                    <option value="Llaveros">Llaveros</option>
                                    <option value="Pokemon">Pokemon</option>
                                    <option value="Otros">Otros</option>
                                </select>
                            </Form.Group>
                            <Row>
                                <Button className="Contacto-boton" variant="hasd" type="submit">
                                    Agregar
                                </Button>
                            </Row>
                            <Row>
                                <Link className="mx-auto mt-2" to="/productos">
                                    Ver productos agregados
                                </Link>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    )
}
