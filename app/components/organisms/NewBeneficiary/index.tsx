import React from 'react';
import { Button, Modal, Nav, Navbar, Row, Col } from 'react-bootstrap';

import Icon from '../../atoms/Icon';
import Img from '../../atoms/Img';
import BoxText from '../../atoms/BoxText';
import BankDetails from '../../molecules/BankDetails';
import BeneficiaryDetail from '../../molecules/BeneficiaryDetail';
import ButtonConfirm from '../../molecules/ButtonConfirm';

function NewBeneficiary(props) {
  return (
    <Row className="padding-40">
      <Col sm="12">
        <span className="arrow-back">{'<'}</span>
        <BoxText className="title-back-orange" text="New Beneficiary Accont" />
        <BoxText className="sub-title-box" text="Your account will normally be approved within 1 working day." />
      </Col>
      <Row className="padding-40">
        <Col sm="4" className="padding-0">
          <BeneficiaryDetail />
        </Col>
        <Col sm="8" className="padding-0">
          <BankDetails />
        </Col>
        <Col sm="9">
        </Col>
        <Col sm="3" className="text-align-right">
          <Button variant="primary" type="submit" className="mdc-btnsecondary btn-dimension btn-margin-cofirm">
            {"Cancel"}
          </Button>
          <Button variant="success" type="submit" className="mdc-btnsuccess btn-dimension btn-margin-cofirm">
            {"Submit"}
          </Button>
        </Col>
      </Row>
    </Row>
  );
}

export default NewBeneficiary;
