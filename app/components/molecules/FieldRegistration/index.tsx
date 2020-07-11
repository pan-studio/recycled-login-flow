import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import ButtonWithNote from '../../molecules/ButtonWithNote';
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classIcon?: any;
}

export const FieldRegistration = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <Row className="padding-40">
        <Col sm="12">
          <span className="arrow-back">{'<'}</span>
          <BoxText
            className="title-black"
            text="Personal Details"
          />
          <BoxText
            className="sub-title-box"
            text="This email address will be used for all email correspondence related to eServices and for general information emails sent by FAO Credit Union."
          />
        </Col>
      </Row>
      <Form className="cpwd-max-width padding-40">
        <Row className=" background-field">
          <Col sm="4" xs="12">
            <Form.Group>
              <Form.Control
                id="userEmail"
                aria-describedby="addUserEmail"
                placeholder="Email"
                type="email"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="4" xs="12">
            <Form.Group controlId="newUserEmail">
              <Form.Control
                id="confirmUserEmail"
                type="email"
                placeholder="Re-Enter your new email"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="4" xs="12">
            <InputGroup>
              <Form.Control
                type="tel"
                placeholder="Telephone number"
                className="item-input-simple item-input-boxappend"
              />
              <InputGroup.Append>
                <InputGroup.Text
                  id="telephone"
                  className="input-boxappend item-input-simple"
                >
                  !
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FieldRegistration;
