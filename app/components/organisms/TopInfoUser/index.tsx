import React from 'react';
import { Button,Modal, Nav } from 'react-bootstrap';


import Icon from '../../atoms/Icon';
import iconFolder from '../../../../assets/images/folder_shared-white24px.png';
import iconLocalAtm from '../../../../assets/images/local_atm-white24px.png';
import iconAccontWalle from '../../../../assets/images/account_balance_wallet-white24px.png';
import iconDescriptionOne from '../../../../assets/images/description-white_1.png';
import iconDescriptionTwo from '../../../../assets/images/description-white_2.png';
import iconPersonActive from '../../../../assets/images/person_outline-active.png'


//C:\Users\salva\Documents\VISUALSTUDIOCODE\faotx\faotsx\src\assets\images\folder_shared-white24px.png

function TopInfoUser(props) {
    
    return (
    <>
    <Nav variant="tabs" defaultActiveKey="/home" className="tui-box">
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled><span className="tui-label">Welcome Back, Murphy Gerard Paul / 0000007</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled><span className="tui-label">Email:</span>gerard.lorem@fao.org</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            <span className="tui-label">Last Password Change::</span>04/10/2019
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
            <span className="tui-label">Last Login:</span>04/10/2019 15:41:49
            </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
    );
  }
  

export default TopInfoUser;