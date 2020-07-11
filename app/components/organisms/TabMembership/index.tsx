import React from 'react';
import { Button, Modal, Nav, Tabs, Tab } from 'react-bootstrap';
import ChangePassword from '../../molecules/ChangePassword';
import ChangeEmail from '../../molecules/ChangeEmail';
import ChangeQuestions from '../../molecules/ChangeQuestions'

import Icon from '../../atoms/Icon';

function TabMembership(props) {
  return (
    <>
      <Tabs defaultActiveKey="changepwd" id="tab-membership">
        <Tab eventKey="changepwd" title="Change my password" className="tab-background">
          <ChangePassword />
        </Tab>
        <Tab eventKey="changeemail" title="Change Email" className="tab-background">
          <ChangeEmail />
        </Tab>
        <Tab eventKey="changequestion" title="Change my questions" className="tab-background">
          <ChangeQuestions />
        </Tab>
      </Tabs>
    </>
  );
}

export default TabMembership;
