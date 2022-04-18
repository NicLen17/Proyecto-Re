import './Productos.css'
import React from 'react'
import { Button, Card, Dropdown, Form } from 'react-bootstrap'

export default function Productos() {
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

        </div>
      </div>
    </div>
  )
}
