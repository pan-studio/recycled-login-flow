import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import { Button, Row, Col } from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classBox?: any;
  classNoteSubtitle?: any;
  classNoteText?: any;
  textMessage?: any;
  titleNote?: any;
}


export const ButtonConfirm = ({
  className: parentClassName,
  text = '',
  icon = '',
  classBox = '',
  classNoteSubtitle = '',
  classNoteText = '',
  textMessage = '',
  titleNote= '',
}: Props) => {
  return (
      <Row className={classnames('box-note box-confirm margin-lr-0',classBox)}>
        <Col sm="12">
          <BoxText
            text={textMessage}
            className={classnames('text-error padding-top-15px',classNoteText)}
          />
        </Col>
      </Row>
  );
};

export default ButtonConfirm;
