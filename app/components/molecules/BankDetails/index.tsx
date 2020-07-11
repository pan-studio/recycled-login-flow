import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
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
  icon?: any;
  classIcon?: any;
}

export const BankDetail = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <BoxText className="title-box padding-lr-24" text="Bank Details" />
      <Form className="padding-lr-24">
        <Row>
          <Col sm="6">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Bank"
                aria-label="bank"
                aria-describedby="bank"
                className="item-input-simple item-input-boxappend"
                id="bank"
              />
              <InputGroup.Append>
                <InputGroup.Text
                  id="bank"
                  className="input-boxappend item-input-simple"
                >
                  !
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm="6">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Branch"
                aria-label="branch"
                aria-describedby="branch"
                className="item-input-simple item-input-boxappend"
                id="branch"
              />
              <InputGroup.Append>
                <InputGroup.Text
                  id="branch"
                  className="input-boxappend item-input-simple"
                >
                  !
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm="6">
            <Form.Group controlId="accountNumber">
              <Form.Control
                type="text"
                placeholder="Account Number"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group controlId="ccy">
              <Form.Control as="select" className="item-input-simple">
                <option>CCY</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm="6">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Bank Code"
                aria-label="bankCode"
                aria-describedby="bankCode"
                className="item-input-simple item-input-boxappend"
                id="bankCode"
              />
              <InputGroup.Append>
                <InputGroup.Text
                  id="branch"
                  className="input-boxappend item-input-simple"
                >
                  !
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm="6">
            <Form.Group controlId="addressBank">
              <Form.Control
                type="text"
                placeholder="Address Bank"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group controlId="bankCity">
              <Form.Control
                type="text"
                placeholder="Bank City"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6">
            <Form.Group controlId="bankCountry">
              <Form.Control as="select" className="item-input-simple">
                <option>Bank Country</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm="12">
            <Form.Group controlId="addintionalAccontInfo">
              <Form.Control
                type="text"
                placeholder="Additional Account Information (Optional)"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BankDetail;
