import React from 'react';
import classnames from 'classnames';
import A from '../../atoms/Button/A';
import { Row, Col } from 'react-bootstrap';

interface Props {
  text: string;
  title: any;
  className?: string;
  action?:boolean;
  classText?: any;
}

export const TitleTable = ({
  className: parentClassName,
  text = '',
  title = '',
  action = false,
  classText = ''
}: Props) => {


  return (

      <Col
        sm="9"
        xs="12"
        className={classnames(
          'margin-bottom-general margin-top-general',
          parentClassName,
        )}
      >
        <span className="table-title padding-right-15">{title}</span>
        <A className={classnames(
          "table-textgeneral",
          classText,
        )}>{text}</A>
      </Col>
  );
};

export default TitleTable;
