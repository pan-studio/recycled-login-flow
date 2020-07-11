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

function SidebarView(props) {
    
    return (
    <>
        <Nav className="col-md-12 d-none d-md-block sidebar" defaultActiveKey="/#0">
        <div className="sidebar-collapse"></div>
        <Nav.Item>
            <Nav.Link href="/#0" className="navbar-text">
                <Icon src={iconFolder} />
                Membership Data
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/#1" className="navbar-text" >
                <Icon src={iconPersonActive} />
                Overall View
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" className="navbar-text">
            <Icon src={iconLocalAtm} />
                eWithdrawal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" className="navbar-text">
            <Icon src={iconAccontWalle} />
                Savings Standing Order</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3" className="navbar-text">
            <Icon src={iconAccontWalle} />
            Loan Repayment</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4" className="navbar-text">
            <Icon src={iconDescriptionTwo} />
            eStatements</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-5" className="navbar-text">
            <Icon src={iconDescriptionTwo} />
            Pending Loan Application
            </Nav.Link>
        </Nav.Item>
        </Nav>
    </>
    );
  }
  

export default SidebarView;