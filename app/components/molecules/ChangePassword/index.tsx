import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import ButtonWithNote from '../../molecules/ButtonWithNote';
import Icon from '../../atoms/Icon';
import { Button, Form, InputGroup, FormControl, Row } from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classIcon?: any;
}

export const ChangePassword = ({
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
                <InputGroup.Text id="addUserIndex" className="tab-info-text">User Index</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="userIndex" aria-describedby="addUserIndex" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="currentPassword">
            <Form.Control
              type="password"
              placeholder="Current Password"
              className="item-input"
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Control
              type="password"
              placeholder="New Password"
              className="item-input"
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="item-input"
            />
          </Form.Group>
        </Form>
      </Row>
      <Row className="cpwd-box-note">
        <BoxText
          text="All passwords should meet these requirements"
          className="cpwd-subtitle"
        />
        <BoxText
          text="- at least 8 alphanumeric characters (passwords of 12 characters or more are recommended);"
          className="cpwd-note"
        />
        <BoxText
          text="- both upper and lower case letters;"
          className="cpwd-note"
        />
        <BoxText text="- at least one number (0-9); " className="cpwd-note" />
        <BoxText
          text="- at least one special character from the following: , . # $ @ ! % * ? ( ) _ ; : = -"
          className="cpwd-note"
        />
      </Row>
      <ButtonWithNote
        text="Save"
        textNote=""
        className="btn-note"
        classBox="margin-bottom-general"
        titleNote=""
      />
    </div>
  );
};

export default ChangePassword;
