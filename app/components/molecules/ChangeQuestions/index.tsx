import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import ButtonWithNote from '../../molecules/ButtonWithNote';
import { Button, Form, InputGroup, FormControl, Row } from 'react-bootstrap';
import { truncateSync } from 'fs';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classIcon?: any;
}

export const ChangeQuestions = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  const [show_tmp, setShow] = React.useState(false);
  const [change, setChange] = React.useState(true);

  //const [answerone, setFirstName] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  //const handleChange = () => setFirstName(console.log("dddd"));
  //const handleEmpty = () => setFirstName(true);

 

  return (
    <div>
      <Row className="cquest-box">
        <Form className="cpwd-max-width">
          <Form.Group controlId="questions-one">
            {show_tmp ? (
              <Form.Label className="label-show">1) Add your question here <span>*</span></Form.Label>
            ) : (
              <Form.Label className="label-notshow">1) Add your question here <span>*</span></Form.Label>
            )}

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
      </Row>
      <ButtonWithNote
        text="Save"
        textNote="These challenge questions will allow you to reset password should you forget it."
        className="btn-note"
        classBox="margin-bottom-general"
        titleNote="Note"
      />
    </div>
  );
};

export default ChangeQuestions;
