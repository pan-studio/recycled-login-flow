import React from 'react';
import { Button, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import Icon from '../../atoms/Icon';
import Img from '../../atoms/Img';
import imgLogo from '../../../../assets/images/logo_home_fao.png';
import imgProfile from '../../../../assets/images/profilo_fao.png';
import iconDashboard from '../../../../assets/images/dashboard-active.png';

function TopMenu(props) {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Img src={imgLogo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link href="#home" className="topm-item">RATES</Nav.Link>
          <Nav.Link href="#link" className="topm-item">FAO CU</Nav.Link>
          <Nav.Link href="#link" className="topm-item">CONTACT</Nav.Link>
          <Nav.Item className="topm-space"></Nav.Item>
          <Nav.Link href="#link">
            <Icon src={iconDashboard} />
          </Nav.Link>
          <Nav.Link href="#dash">
            <Img src={imgProfile} />
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TopMenu;
