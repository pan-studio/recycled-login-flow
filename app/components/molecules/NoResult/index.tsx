import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import A from '../../atoms/Button/A';
import { Button, Row, Col } from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classBox?: any;
  classNoteText?: any;
  classHeader?: any;
}

export const NoResult = ({
  className: parentClassName,
  text = '',
  icon = '',
  classBox = '',
  classNoteText = '',
  classHeader = '',
}: Props) => {
  return (
    <Row className={classnames('padding-40', classBox)}>
      <Col sm="12" className={classnames('', classHeader)}></Col>
      <Col
        sm="12"
        className={classnames(
          'sub-title-text-center padding-24',
          classNoteText,
        )}
      >
        {text}
      </Col>
      <Col sm="12" className="text-align-center">
        <A className={'table-active-add'} >+ Add new account</A>
      </Col>
    </Row>
  );
};

export default NoResult;
