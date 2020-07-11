import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import ButtonWithNote from '../../molecules/ButtonWithNote';
import BoxListQuestions from '../../molecules/BoxListQuestions';
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

export const QuestionsRegistration = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <Form className="cpwd-max-width padding-40">
        <Row className="marginTop40 background-field"> 
          <Col sm="12">
            <BoxText
              className="text-bold-black"
              text="Challenge Questions and Answers"
            />
            <BoxText
              className="sub-title-box"
              text="Please create 3 question and answers. Click on 'Info' icon to view some examples of typical questions."
            />
          </Col>
          <Col sm="6" xs="12" className="marginTop40">
            <Form.Group controlId="questions-one">
              <Form.Control
                type="text"
                placeholder="1) Add your question here *"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6" xs="12" className="marginTop40" >
            <Form.Group controlId="answer-one">
              <Form.Control
                type="text"
                placeholder="Answer *"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6" xs="12" className="marginTop40" >
            <Form.Group controlId="questions-two">
              <Form.Control
                type="text"
                placeholder="2) Add your question here *"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6" xs="12" className="marginTop40" >
            <Form.Group controlId="answer-two">
              <Form.Control
                type="text"
                placeholder="Answer *"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6" xs="12" className="marginTop40" >
            <Form.Group controlId="questions-three">
              <Form.Control
                type="text"
                placeholder="3) Add your question here *"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
          <Col sm="6" xs="12" className="marginTop40" >
            <Form.Group controlId="answer-three">
              <Form.Control
                type="text"
                placeholder="Answer *"
                className="item-input-simple"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default QuestionsRegistration;
