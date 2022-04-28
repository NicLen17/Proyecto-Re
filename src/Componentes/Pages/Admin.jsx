import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Tabs,
    Tab,
    Table,
    Alert,
    Modal,
    Button,
    Form,
    Container,
    InputGroup,
    ToggleButton,
} from "react-bootstrap";
import "./Admin.css";
import { getBase64 } from "../utils/img";
import { NavLink, useNavigate } from "react-router-dom";
import AgregadoProducto from '../AgregadoProducto'
import ScrollToTop from '../ScrollToTop'

function Admin() {
    const Navigate = useNavigate();
    const localToken = JSON.parse(localStorage.getItem("token"))?.token || "";
    const [token, setToken] = useState(localToken); //cuando no tenemos un token generado la const Token es un string vacio.
    const [products, setProducts] = useState([]);
    const [mensajes, setMensajes] = useState([]);
    const [consultas, setConsultas] = useState([]);
    const [imagenes, setImagenes] = useState({});
    const [lusers, setLusers] = useState([]);
    const [alertSuccess, setalertSuccess] = useState("");
    const [alertSuccessM, setalertSuccessM] = useState("");
    const [alert, setAlert] = useState("");
    const [productEncontrado, setProductEncontrado] = useState({});
    const [mensajeEncontrado, setmensajeEncontrado] = useState({});
    const [consultaEncontrado, setconsultaEncontrado] = useState({});
    const [input, setInput] = useState({});
    const [responderDuda, setresponderDuda] = useState([]);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (token) {
            const request = async () => {
                axios.defaults.headers = { "x-auth-token": token }; //> en el midleware/auth está definido el header que va a ser cabecera
                const { data } = await axios.get("/auth");
                if (data.category !== "A") {
                    window.location = "/";
                }
            };
            request(); //realiza el pedido
        } else {
            Navigate('/login');
        }
        consulta();
        mensaje();
        productos();
        getListaUsuarios();
    }, [token, Navigate, imagenes]); //se pone "token" como parámetro para que llame a useEffect cada vez que cambie

    const productos = async () => {
        const { data } = await axios.get("/productos");
        setProducts(data);
    };
    const mensaje = async () => {
        const { data } = await axios.get("/mensajes");
        setMensajes(data);
    };
    const consulta = async () => {
        const { data } = await axios.get("/consultas");
        setConsultas(data);
    };

    async function deleteProducto(id) {
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/productos/${id}`);
            productos();
            setalertSuccess("Producto eliminado correctamente");
        }
        setTimeout(() => {
            setalertSuccess("");
        }, 5000);
    }

    async function deleteMensajes(id) {
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/mensajes/${id}`);
            mensaje();
            setalertSuccessM("Mensaje eliminado correctamente");
        }
        setTimeout(() => {
            setalertSuccess("");
        }, 5000);
    }
    async function deleteConsulta(id) {
        if (window.confirm("Estas seguro que deseas eliminar?")) {
            await axios.delete(`/consultas/${id}`);
            consulta();
            setalertSuccessM("Consulta eliminada correctamente");
        }
        setTimeout(() => {
            setalertSuccess("");
        }, 5000);
    }
    const getListaUsuarios = async () => {
        const { data } = await axios.get("usuarios");
        setLusers(data);
    };
    async function stateUser(id) {
        if (window.confirm("Seguro desea modificar el estado?")) {
            try {
                await axios.put(`/usuarios/${id}`);
                setalertSuccess("Estado modificado correctamente");
                getListaUsuarios();
            } catch (error) {
                error.response.data.msg[0].msg
                    ? setalertSuccess(error.response.data.msg[0].msg)
                    : setalertSuccess(error.response.data.msg);
                window.alert(error.response.data.msg);
            }
        }
    }
    const updateProduct = async (id) => {
        const productoEncontrado = await products.find((p) => p._id === id);
        setShow(true);
        setProductEncontrado(productoEncontrado)
        setImagenes(productoEncontrado.img)
        setInput(productoEncontrado)
    };

    const handleSubmit = async (event) => {
        const formulario = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (formulario.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            await axios.put(`/productos/${productEncontrado._id}`, input);
            setShow(false);
            setalertSuccess(`PRODUCTO MODIFICADO EXITOSAMENTE`);
            setValidated(false);
        } catch (error) {
            error.response.data.msg
                ? setAlert(error.response.data.msg)
                : setAlert(error.response.data);
        }
        productos();
    };
    const onChangeImg = async (e) => {
        const imagenesArray = [];
        const imagenesInput = e.target.files;
        for (let i = 0; i < imagenesInput.length; i++) {
            const base64 = await getBase64(imagenesInput[i]);
            imagenesArray.push(base64);
            const iman = { ...input, img: imagenesArray };
            setInput(iman);
        }
    };

    const handleChange = (e) => {
        setAlert("");
        const { name, value } = e.target;
        const productoInput = {
            ...input,
            ...imagenes,
            [name]: value.toUpperCase(),
        };
        console.log(productoInput)
        setInput(productoInput);
    };

    const borrarImagen = (index) => {
        console.log(productEncontrado.img);
        const removeImg = productEncontrado.img.splice(index, 1);
        setImagenes(removeImg);
    }

    const verMensaje = async (id) => {
        const mensajeEncontrado = await mensajes.find((m) => m._id === id);
        setShow1(true);
        setmensajeEncontrado(mensajeEncontrado)
        setInput(mensajeEncontrado);
    };

    const verConsulta = async (id) => {
        const consultaEncontrado = await consultas.find((c) => c._id === id);
        setShow3(true);
        setconsultaEncontrado(consultaEncontrado)
        setInput(consultaEncontrado);
    };

    const responder = async (id) => {
        const responderDuda = await lusers.find((u) => u._id === id);
        setShow2(true);
        setresponderDuda(responderDuda)
    };

    const handleClose = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);

    return (
        <div>
            <div className="tablacont">
                <Tabs
                    fill
                    variant="tabs"
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 Tabs-adm"
                >
                    <Tab className="colortab" eventKey="home" title="Productos">
                        <div>
                            <AgregadoProducto productos={productos} />
                            {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                            <Table responsive striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Descripcion</th>
                                        <th>imagen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => (
                                            <tr key={product._id}>
                                                <td>{product.categoria}</td>
                                                <td>{product.nombre}</td>
                                                <td>{product.price}</td>
                                                <td>{product.descripcion}</td>
                                                <td>
                                                    {product.img.map((e) => (
                                                        <img
                                                            style={{ width: "150px", height: "120px" }}
                                                            src={e}
                                                            alt="imagen celulares"
                                                        />
                                                    ))}{" "}
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-success mr-1"
                                                        onClick={() => updateProduct(product._id)}
                                                    >
                                                        Editar
                                                    </button>{" "}
                                                    <NavLink
                                                        className="btn btn-primary"
                                                        style={{ textDecorationLine: "none" }}
                                                        to={`/individual/${product._id}`}
                                                        exact
                                                        as={NavLink}
                                                    >
                                                        Ver
                                                    </NavLink>{" "}
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => deleteProducto(product._id)}
                                                    >
                                                        eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Usuarios">
                        <div>
                            {alertSuccess && <Alert variant="success">{alertSuccess}</Alert>}
                            <Table responsive striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Teléfono</th>
                                        <th>Email</th>
                                        <th>Estado</th>
                                        <th>Funciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {lusers.map((usuarios) => (
                                        <tr key={usuarios._id}>
                                            <td>{usuarios.nombre}</td>
                                            <td>{usuarios.celular}</td>
                                            <td>{usuarios.email}</td>
                                            <td>
                                                <ToggleButton
                                                    id="toggle-check"
                                                    type="checkbox"
                                                    variant="secondary"
                                                    checked={usuarios.estado}
                                                ></ToggleButton>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => stateUser(usuarios._id)}
                                                    type="button"
                                                    className="btn btn-primary"
                                                >
                                                    Habil./Deshab.
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Mensajeria">
                        <div>
                            {alertSuccessM && (<Alert variant="success">{alertSuccessM}</Alert>)}
                            <Table className="tabla-admin" responsive variant="dark">
                                <thead>
                                    <tr className="tabla-admin">
                                        <th>Nombre y apellido</th>
                                        <th>correo electronico</th>
                                        <th>telefono</th>
                                        <th>mensaje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mensajes.map((msj) => (
                                        <tr key={msj.id}>
                                            <td>{msj.nombreyapellido}</td>
                                            <td>
                                                <a href={msj.email}>{msj.email}</a>
                                            </td>
                                            <td>{msj.tel}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success mr-1 ms-2"
                                                    onClick={() => verMensaje(msj._id)}
                                                >
                                                    Ver Mensaje
                                                </button>{" "}
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteMensajes(msj._id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab eventKey="consult" title="Consultas">
                        <div>
                            {alertSuccessM && (<Alert variant="success">{alertSuccessM}</Alert>)}
                            <Table className="tabla-admin" responsive variant="dark">
                                <thead>
                                    <tr className="tabla-admin">
                                        <th>Nombre y apellido</th>
                                        <th>correo electronico</th>
                                        <th>telefono</th>
                                        <th>mensaje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {consultas.map((cst) => (
                                        <tr key={cst.id}>
                                            <td>{cst.producto}</td>
                                            <td>
                                                <a href={cst.email}>{cst.email}</a>
                                            </td>
                                            <td>{cst.tel}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success mr-1 ms-2"
                                                    onClick={() => verConsulta(cst._id)}
                                                >
                                                    Ver Consulta
                                                </button>{" "}
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => deleteConsulta(cst._id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            {
                <Modal show={show} backdrop="static" keyboard={false}>
                    <Modal.Header
                        className="editarformtitulo"
                        closeButton={() => setShow(false)}
                    >
                        <Modal.Title>
                            Editar {productEncontrado.nombre}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="editarform" style={{ width: "100%" }}>
                        <Container>
                            {alert && <Alert variant="danger">{alert}</Alert>}
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="" controlId="validationCustom02">
                                    <Form.Control.Feedback type="invalid">
                                        Se requiere el fabricante del producto!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="" controlId="validationCustom01">
                                    <Form.Label>Nombre del producto</Form.Label>
                                    <Form.Control
                                        name="nombre"
                                        onChange={(e) => handleChange(e)}
                                        required
                                        type="text"
                                        placeholder="Nombre del producto"
                                        className="registerlabel"
                                        defaultValue={productEncontrado.nombre}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Se requiere el nombre del producto!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Recibido</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        name="price"
                                        onChange={(e) => handleChange(e)}
                                        type="number"
                                        min="0"
                                        placeholder="$$$"
                                        className="registerlabel"
                                        required
                                        defaultValue={productEncontrado.price}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Precio obligatorio!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="" controlId="validationCustomUsername">
                                    <Form.Label>Caracteristicas</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            minLength="6"
                                            name="descripcion"
                                            onChange={(e) => handleChange(e)}
                                            as="textarea"
                                            placeholder="Caracteristicas principales del producto"
                                            aria-describedby="inputGroupPrepend"
                                            className="registerlabel"
                                            required
                                            defaultValue={productEncontrado.descripcion}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Las caracteristicas son obligarorias!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label className="">
                                        Agregar imagen del producto de forma local
                                    </Form.Label>
                                    <Form.Group
                                        controlId="formFileMultiple"
                                        className="mb-3"
                                        onChange={(e) => { onChangeImg(e); }}
                                    >
                                        <Form.Control type="file" multiple />
                                    </Form.Group>
                                    <Form.Control.Feedback type="invalid">
                                        la imagen es obligaroria!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="selectsa">
                                    <select className="registerbut" aria-label="Default select example"
                                        name="categoria" onChange={(e) => handleChange(e)} required>
                                        <option defaultValue>{productEncontrado.categoria} </option>
                                        <option value="Diseño" >Diseño de piezas</option>
                                        <option value="Decoracion">Decoracion</option>
                                        <option value="Figuras">Figuras</option>
                                        <option value="Llaveros">Llaveros</option>
                                        <option value="Pokemon">Pokemon</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </Form.Group>
                                <div className="d-flex flex-wrap">
                                    {productEncontrado.img?.map((i, index) => (
                                        <div>
                                            <Button variant="btn btn-white" style={{ position: "absolute" }} onClick={() => borrarImagen(index)}><img src="https://icongr.am/fontawesome/remove.svg?size=15&color=currentColor" alt="cerrar" /></Button>
                                            <img style={{ width: "200px", height: "200px" }} src={i} alt="imagen del celular" />
                                        </div>
                                    ))}
                                </div>
                                <Modal.Footer className="editarformtitulo">
                                    <Button
                                        className="registerbut"
                                        variant="registerbut"
                                        onClick={() => { setShow(false); setInput({}); setAlert(""); setValidated(false) }}
                                    >
                                        Cerrar
                                    </Button>
                                    <Button
                                        className="registerbut"
                                        variant="registerbut"
                                        type="submit"
                                    >
                                        Listo
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Container>
                    </Modal.Body>
                </Modal>
            }
            {
                <div>
                    <Modal
                        show={show1}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Mensaje</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Datos del cliente:</p>
                            <div>
                                Nombre: {mensajeEncontrado.nombreyapellido}
                                <br />
                                Mail: {mensajeEncontrado.email}
                                <br />
                                Tel: {mensajeEncontrado.tel}
                                <br />
                                <br />
                                Mensaje: <br />
                                {mensajeEncontrado.mensaje}
                                <br /><br />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            }
            {
                <div>
                    <Modal
                        show={show3}
                        onHide={handleClose3}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Consulta</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Datos del cliente:</p>
                            <div>
                                Nombre: {consultaEncontrado.nombreyapellido}
                                <br />
                                Mail: {consultaEncontrado.email}
                                <br />
                                Tel: {consultaEncontrado.tel}
                                <br />
                                <br />
                                Producto: {consultaEncontrado.producto}
                                <br />
                                <br />
                                Consulta: <br />
                                {consultaEncontrado.mensaje}
                                <br /><br />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose3}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            }
            {lusers.map((usuarios) => (
                <div>
                    <Modal
                        show={show2}
                        onHide={handleClose2}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Mensaje</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}
             <ScrollToTop />
        </div>
    );
}

export default Admin;
