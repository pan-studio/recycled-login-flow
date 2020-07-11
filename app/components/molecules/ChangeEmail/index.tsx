import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import ButtonWithNote from '../../molecules/ButtonWithNote';
import { Button, Form, InputGroup, FormControl, Row } from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classIcon?: any;
}

export const ChangeEmail = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <Row className="cpwd-box">
        <Form className="cpwd-max-width">
          <Form.Group controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="addUserEmail" className="tab-info-text">
                  Your current email
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="userEmail"
                aria-describedby="addUserEmail"
                type="email"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="newUserEmail">
            <Form.Control
              type="email"
              placeholder="Enter your new email"
              className="change-item-input"
            />
          </Form.Group>
          <Form.Group controlId="confirmEmail">
            <Form.Control
              type="password"
              placeholder="Confirm Email"
              className="change-item-input"
            />
          </Form.Group>
        </Form>
      </Row>
      <ButtonWithNote
        text="Save"
        textNote="This email will be used for all email correspondence related to eServices and for general information emails sent by FAO Credit Union."
        className="btn-note"
        classBox="margin-bottom-general"
        titleNote="Note"
      />
      
    </div>
  );
};

export default ChangeEmail;
