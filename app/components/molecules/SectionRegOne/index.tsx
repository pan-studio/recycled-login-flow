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

export const SectionRegOne = ({
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
        <BoxText text="Welcome to the FAO Credit Union" className="lg-title" />
        <BoxText text="Secured Registration Form" className="lg-subtitle" />
        <Form className="padding-top-40">
          <Form.Group controlId="formIndexNumber">
            <Form.Control type="text" placeholder="Index Number" className="input-reg"/>
          </Form.Group>
          <Form.Group controlId="formDateBirth">
            <Form.Control
              type="date"
              placeholder="Date of Birth"
              className="input-reg"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-next-login">
            Next
          </Button>
        </Form>
        <Col sm="12" style={{ marginTop: '24px', padding: 0 }}>
          <span className="lg-eservice">Already a eServices user?</span>
          <A className="lg-linkoranage" href="#">
            Login
          </A>
        </Col>
      </div>
    </div>
  );
};

export default SectionRegOne;
