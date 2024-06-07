import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FormExample from './SignUp';

export function OffCanvasExample2({ name, ...props }) {
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
            <Offcanvas.Title>Регистрация</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            
          <FormExample></FormExample>
  
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }