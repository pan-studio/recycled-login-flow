import React from 'react';
import { Button, Modal, Nav, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';
import ButtonWithIcon from '../../molecules/ButtonWithIcon';
import TitleWithIcon from '../../molecules/TextWithIcon';
import iconDashboard from '../../../../assets/images/dashboard-active.png';

//C:\Users\salva\Documents\VISUALSTUDIOCODE\faotx\faotsx\src\assets\images\folder_shared-white24px.png

function TitlePageInternal(props) {
  return (
    <>
      <Row className="margin-top-general margin-bottom-general">
        <Col sm="9" xs="12">
          <TitleWithIcon
            icon={props.icon}
            classIcon={props.classIcon}
            className={props.className}
            text={props.text}
          />
        </Col>
        <Col sm="3" xs="12">
          <ButtonWithIcon
            icon={props.iconbutton}
            text={props.textbutton}
            className={props.classButton}
            classButtonIcon={props.classIconButton}
          />
        </Col>
      </Row>
    </>
  );
}

export default TitlePageInternal;
