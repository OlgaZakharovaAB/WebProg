import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Иванов"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Иван"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Логин</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control type="text" placeholder="01.01.2001" required />
          <Form.Control.Feedback type="invalid">
            Укажите дату рождения в формате ДД.ММ.ГГГГ.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Согласен с условиями пользования"
          feedback="Вы должны согласиться с условиями, прежде чем закончить регистрацию."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Зарегестрироваться</Button>
    </Form>
  );
}

export default FormExample;