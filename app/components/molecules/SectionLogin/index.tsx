import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import A from '../../atoms/Button/A';
import Img from '../../atoms/Img';
import Icon from '../../atoms/Icon';
import { ContactPage } from '../../../containers/HomePage/ContactPage';
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';
import { CONSTANTS } from '../../../constants';
import { request, parseJson } from '../../../../utils/request';
import { resolve } from 'path';
interface Props {
  text?: string;
  className?: string;
  imgLogo?: any;
  btnText?: any;
  textButtonOne?: any;
  textButtonTwo?: any;
}

export const SectionLogin = ({
  className: parentClassName,
  text = '',
  imgLogo = '',
  btnText = '',
  textButtonOne = '',
  textButtonTwo = '',
}: Props) => {
  const [isLogged, setIsLogged] = React.useState(false);
  return isLogged == false ? (
    <div>
      <Img src={imgLogo} className="img-fluid" />
      <div style={{ width: '430px' }}>
        <BoxText text="Welcome to the FAO Credit Union" className="lg-title" />
        <BoxText text="Sign in to continue" className="lg-subtitle" />
        <Form className="">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="7 digit number" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password is case sensitive"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Col sm="12" xs="12" className="lg-colforgotpwd{">
              <A href="#" className="lg-forgortrpwd">
                Forgot Password?
              </A>
            </Col>
          </Form.Group>
          <Button
            onClick={() => {
              request(CONSTANTS.LOGIN_ENDPOINT).then(r => {
                let a = parseJson(r);
                setIsLogged(a.response);
              });
            }}
            variant="primary"
            className="lg-btnlogin"
          >
            Login
          </Button>
        </Form>
        <Col sm="12" style={{ marginTop: '24px', padding: 0 }}>
          <span className="lg-eservice">Not yet eServices User?</span>
          <A className="lg-linkoranage" href="#">
            Login
          </A>
        </Col>
        <Col sm="12" style={{ marginTop: '320px' }}>
          <span className="lg-eservice">Not yet eServices User?</span>
          <A className="lg-linkblue">Join the FAO Credit Union now</A>
        </Col>
      </div>
    </div>
  ) : (
    <div>
      <ContactPage />
    </div>
  );
};

export default SectionLogin;
