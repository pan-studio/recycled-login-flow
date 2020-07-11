import React from 'react';
import { Button, Modal, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';

import Icon from '../../atoms/Icon';
import iconDashboard from '../../../../assets/images/dashboard-active.png';
import A from '../../atoms/Button/A';

function TooltipInfo(props) {
  return (
    <>
      {['bottom'].map(placement => (
        <OverlayTrigger
          trigger={["click"]}
          key={placement}
          placement='bottom'
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Title as="h4" className="popover-title">{props.title}</Popover.Title>
              <Popover.Content className="popover-text">
                 {props.text}          
              </Popover.Content>
            </Popover>
          }
        >
          <A  className="popover-btn f-margin-lm">
            <Icon src={iconDashboard} />
          </A>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default TooltipInfo;
