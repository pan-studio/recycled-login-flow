import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import ButtonConfirm from '../../molecules/ButtonConfirm';
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
  titleSection?: any;
}

export const DetailTransaction = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
  titleSection = '',
}: Props) => {
  return (
    <div>
      <Row className="padding-40">
        <Col sm="12">
          <span className="arrow-back">{'<'}</span>
          <BoxText
            className="title-back-orange"
            text="eWithdrawal Transaction"
          />
        </Col>
        <Row className="padding-40">
          <Col sm="3">
            <div className="box-balance">
              <BoxText text="Available Balance" className="label-input" />
              <BoxText text="8,350.00" className="value-green-bold" />
              <BoxText text="Available Balance" className="label-input-bold" />
            </div>
          </Col>
          <Col sm="9">
            <Form className="cpwd-max-width">
              <Row className="box-background padding-16">
                <Col sm="4">
                  <Form.Group controlId="transferAmount">
                    <Form.Label className="label-input">
                      Transfer amount
                    </Form.Label>
                    <Form.Control type="text" placeholder="EUR" />
                  </Form.Group>
                </Col>
                <Col sm="4">
                  <Form.Group controlId="transferTo">
                    <Form.Label className="label-input">To</Form.Label>
                    <Form.Control type="text" placeholder="to" />
                  </Form.Group>
                </Col>
                <Col sm="4">
                  <Form.Group controlId="transferAccounr">
                    <Form.Label className="label-input">
                      Account Number
                    </Form.Label>
                    <Form.Control type="text" placeholder="insert here" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="box-background padding-16">
                <Col sm="6">
                  <Form.Group controlId="transferReference">
                    <Form.Label className="label-input">
                      Your Reference (optional)
                    </Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
                <Col sm="6">
                  <Form.Group controlId="transferReferenceTwo">
                    <Form.Label>
                      <br />
                    </Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Col>
                <Col sm="12">
                  <Form.Text className="text-muted">
                    Please avoid the use of abbreviations(i.e. CU), be concise
                    and try to use only the first box
                  </Form.Text>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
      <ButtonConfirm
        text="Transfer"
        textNote="You will be glad to know that our intermediary bank executes this type of transfer FREE of charges."
        className=""
        classBox="margin-bottom-general"
        titleNote=""
      />
    </div>
  );
};

export default DetailTransaction;
