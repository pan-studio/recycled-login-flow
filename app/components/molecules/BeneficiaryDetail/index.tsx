import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import { Button, Form, InputGroup, FormControl, Row } from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classIcon?: any;
}

export const BeneficiaryDetail = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <BoxText className="title-box padding-lr-24" text="Beneficiary Details" />
      <Form className="separation padding-lr-24">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Name"
            aria-label="name"
            aria-describedby="name"
            className="item-input-simple"
            id="name"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            as="select"
            className="item-input-simple item-input-boxappend"
            id="benType"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
          <InputGroup.Append>
            <InputGroup.Text
              id="benType"
              className="input-boxappend item-input-simple"
            >
              !
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            as="select"
            className="item-input-simple item-input-boxappend"
            id="benCountry"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
          <InputGroup.Append>
            <InputGroup.Text
              id="benType"
              className="input-boxappend item-input-simple"
            >
              !
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Address"
            aria-label="address"
            aria-describedby="address"
            className="item-input-simple"
            id="address"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Beneficiary City"
            aria-label="beneficiaryCity"
            aria-describedby="beneficiaryCity"
            className="item-input-simple"
            id="benCity"
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default BeneficiaryDetail;
