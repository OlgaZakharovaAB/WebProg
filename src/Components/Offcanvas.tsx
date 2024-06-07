/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Form, FormCheck, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function OffCanvasExample1({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
      <>
      <Button variant="primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Вход</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <FormGroup className="mb-3" controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Запомнить меня"></FormCheck>
        </FormGroup>
        <Button type="submit">Войти</Button>
      </Form>
  
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }