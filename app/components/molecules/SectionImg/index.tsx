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
  imgDefault?: any;
  btnText?: any;
  textButtonOne?: any;
  textButtonTwo?: any;
}

export const SectionImg = ({
  className: parentClassName,
  text = '',
  imgDefault = '',
  btnText = '',
  textButtonOne = '',
  textButtonTwo = '',
}: Props) => {
  return (
    <div>
      <Img src={imgDefault} className="img-fluid lg-imgprincipal" />
      <Row className="lg-rowbtncontact">
        <Col sm="10" xs="12" className="lg-colpositioncontact">
          <A className="lg-btncontactus" href="#">
            {btnText}
          </A>
        </Col>
      </Row>
      <Row sm="12" xs="12" className="lg-positiontextinimage">
        <div className="lg-alignright">
          <BoxText text={textButtonOne} className="lg-textservice"></BoxText>
          <BoxText
            text={textButtonOne}
            className="uppercase overline underline lg-textsince"
          ></BoxText>
        </div>
      </Row>
    </div>
  );
};

export default SectionImg;
