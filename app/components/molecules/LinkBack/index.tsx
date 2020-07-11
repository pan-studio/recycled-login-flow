import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import { Row } from 'react-bootstrap';

interface Props {
  linkBack: string;
  text: string;
  className?: string;
}

export const LinkBack = ({
  className: parentClassName,
  text = '',
  linkBack = '',
}: Props) => {
  return (
    <Row>
      <BoxText
        className={classnames('linkBack', parentClassName)}
        text="Icon"
      />
      <BoxText
        className={classnames('linkBack', parentClassName)}
        text={text}
      />
    </Row>
  );
};

export default LinkBack;
