import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalView(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="lg-btnlogin">
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} className={props.className}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {props.textButtonPrimary}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalView;
