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
  textNote?: any;
  titleNote?: any;
}


export const ButtonConfirm = ({
  className: parentClassName,
  text = '',
  icon = '',
  classBox = '',
  classNoteSubtitle = '',
  classNoteText = '',
  textNote = '',
  titleNote= '',
}: Props) => {
  return (
      <Row className={classnames('box-note box-confirm margin-lr-0',classBox)}>
        <Col sm="9">
          <BoxText
            text={textNote}
            className={classnames('note-confirm padding-top-15px',classNoteText)}
          />
        </Col>
        <Col sm="3">
          <Button variant="primary" type="submit" className="mdc-btnsecondary btn-dimension btn-margin-cofirm">
            {"Cancel"}
          </Button>
          <Button variant="success" type="submit" className="mdc-btnsuccess btn-dimension btn-margin-cofirm">
            {text}
          </Button>
        </Col>
      </Row>
  );
};

export default ButtonConfirm;
