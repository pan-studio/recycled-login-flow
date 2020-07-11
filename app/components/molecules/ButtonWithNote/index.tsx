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


export const ButtonWithNote = ({
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
    <div>
      <Row className={classnames('box-note',classBox)}>
        <Col sm="9">
          <BoxText text={titleNote} className={classnames('note-subtitle',classNoteSubtitle)} />
          <BoxText
            text={textNote}
            className={classnames('note-text',classNoteText)}
          />
        </Col>
        <Col sm="3">
          <Button variant="primary" type="submit" className={parentClassName}>
            {text}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ButtonWithNote;
