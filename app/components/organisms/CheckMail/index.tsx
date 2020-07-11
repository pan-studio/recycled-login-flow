import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';

import { Button, Row, Col } from 'react-bootstrap';

interface Props {
  text?: string;
  className?: string;
  icon?: any;
  classIcon?: any;
}

export const CheckMail = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <Row className="marginTop40">
        <Col sm="4" xs="12" className="box-check-mail padding-40 center-block">
          <Icon src={icon} className={classnames('center-block', classIcon)} />
          <BoxText className="box-title-check-mail margin-bottom-general" text="Check your mail!" />
          <BoxText
            className="box-text-check-mail-bold margin-bottom-general"
            text="Your personal details are now registered in the FAO Credit Union database."
          />
          <BoxText
            className="box-text-check-mail margin-bottom-general"
            text="Please check email and click on the link we have sent you in order to complete the registration."
          />
          <Button variant="primary" type="submit" className="btn-confirm-pwd">
            Ok
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CheckMail;
