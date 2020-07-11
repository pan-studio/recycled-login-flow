import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ModalConfirmation(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="lg-btnlogin">
        Test Modale Questions
      </Button>

      <Modal show={show} onHide={handleClose} className={props.className}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="padding-40">
          {props.text}
          <Form className="marginTop40">
            <Form.Group controlId="questions-one">
              <Form.Control
                type="text"
                placeholder="1) Add your question here *"
                className="change-quest-input"
                onSelect={handleClose}
                onBlur={handleShow}
              />
            </Form.Group>
            <Form.Group controlId="answerone">
              <Form.Control
                type="text"
                placeholder="Answer *"
                className="change-quest-input"
              />
            </Form.Group>
            <Form.Group controlId="questions-two">
              <Form.Control
                type="text"
                placeholder="2) Add your question here *"
                className="change-quest-input"
              />
            </Form.Group>
            <Form.Group controlId="answer-two">
              <Form.Control
                type="text"
                placeholder="Answer *"
                className="change-quest-input"
              />
            </Form.Group>
            <Form.Group controlId="questions-three">
              <Form.Control
                type="text"
                placeholder="3) Add your question here *"
                className="change-quest-input"
              />
            </Form.Group>
            <Form.Group controlId="answer-three">
              <Form.Control
                type="text"
                placeholder="Answer *"
                className="change-quest-input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="mdc-btnsecondary"
          >
            Modify
          </Button>
          <Button
            variant="success"
            onClick={handleClose}
            className="mdc-btnsuccess"
          >
            {props.textButtonPrimary}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirmation;
