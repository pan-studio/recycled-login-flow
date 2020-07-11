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

export const ItemLoanApplication = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <Row className="panel-loan">
        <Col sm="6">
          <Form className="">
            <Form.Group controlId="loanReason">
              <Form.Label className="label-input">1. Loan Reason</Form.Label>
              <Form.Control
                type="text"
                placeholder="www"
                className="item-input-simple margin-bottom-general"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="label-input margin-bottom-general">
                2. For the purpose of loan insurance I hereby declare that I
                have taken certified sick leave in the last 12 months, as
                follows:
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Less than 29 consecutive work days"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  className="radio-item"
                />
                <Form.Check
                  type="radio"
                  label="20 consecutive work days or more"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  className="radio-item"
                />
                <Form.Check
                  type="radio"
                  label="30 non-consecutive work days"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  className="radio-item"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <ButtonWithNote
        text="Next"
        textNote=""
        className="mdc-btnsuccess"
        classBox="margin-bottom-general background-next"
        titleNote=""
      />
    </div>
  );
};

export default ItemLoanApplication;
