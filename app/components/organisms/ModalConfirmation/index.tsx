import React from 'react';
import { Button,Modal } from 'react-bootstrap';

function ModalConfirmation(props) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="lg-btnlogin">
          Test Modale Confirmation
        </Button>
  
        <Modal show={show} onHide={handleClose} className={props.className}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} className="mdc-btnsecondary">
              Close
            </Button>
            <Button variant="success" onClick={handleClose} className="mdc-btnsuccess">
              {props.textButtonPrimary}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default ModalConfirmation;
