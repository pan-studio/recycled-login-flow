import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Icon from '../../atoms/Icon';
import BoxText from '../../atoms/BoxText';

function ModalSuccess(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="lg-btnlogin">
        Test Modale Success
      </Button>

      <Modal show={show} onHide={handleClose} className={props.className}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Icon />
            <BoxText text={props.title} className="modal-text-success" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BoxText text={props.textBody} className={props.classBody} />
          <BoxText text={props.textBodyBis} className={props.classBody} />
        </Modal.Body>
        <Modal.Footer>
          <BoxText text={props.textFooter} className={props.classFooterBold} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSuccess;
