import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import A from '../../atoms/Button/A';
import Img from '../../atoms/Img';
import Icon from '../../atoms/Icon';
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
  imgLogo?: any;
  btnText?: any;
  textButtonOne?: any;
  textButtonTwo?: any;
}

export const SectionCreatePassword = ({
  className: parentClassName,
  text = '',
  imgLogo = '',
  btnText = '',
  textButtonOne = '',
  textButtonTwo = '',
}: Props) => {
  return (
    <div>
      <Img src={imgLogo} className="img-fluid" />
      <div style={{ width: '430px' }}>
        <BoxText text="Create Password" className="lg-title" />
        <BoxText text="Use this password to login" className="lg-subtitle" />
        <Form className="padding-top-40">
          <Form.Group controlId="formCreatePassword">
            <Form.Control
              type="password"
              placeholder="Create Password"
              className="input-reg"
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="input-reg"
            />
          </Form.Group>
          <Col sm="12" className="cpwd-box-pwd">
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
            <BoxText
              text="- at least one number (0-9); "
              className="cpwd-note"
            />
            <BoxText
              text="- at least one special character from the following: , . # $ @ ! % * ? ( ) _ ; : = -"
              className="cpwd-note"
            />
          </Col>
          <Button variant="primary" type="submit" className="btn-confirm-pwd marginTop40">
            Confirm
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SectionCreatePassword;
