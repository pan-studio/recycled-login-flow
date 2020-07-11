import React from 'react';
import { Button, Modal, Nav, Tabs, Tab } from 'react-bootstrap';
import ChangePassword from '../../molecules/ChangePassword';
import ChangeEmail from '../../molecules/ChangeEmail';
import ChangeQuestions from '../../molecules/ChangeQuestions';
import NoResult from '../../molecules/NoResult';
import TableView from '../../organisms/TableView';
import TableGeneral from '../../organisms/TableGeneral';
import TableWithStatus from '../../organisms/TableWithStatus';
import TableWhitRef from '../../organisms/TableWhitRef';
import DetailTransaction from '../../molecules/DetailTransaction';
import ServerNoResponse from '../../molecules/ServerNoResponse';
import NewBeneficiary from '../../organisms/NewBeneficiary';

import Icon from '../../atoms/Icon';


function TabEWithdrawal(props) {
  return (
    <>
      <Tabs defaultActiveKey="submit" id="tab-membership">
        <Tab
          eventKey="submit"
          title="Submit eWithdrawal"
          className="tab-background"
        >
          <TableView
            headerup={true}
            title="Shares Account(s)"
            textDefault="Click on a row to select the appropriate currency (€ or US$)"
          />
          <TableGeneral
            title="Active Ben. Account(s)"
            textDefault="Click a row to select the Beneficiary Account that should receive the funds"
            action={false}
          />
          <NoResult
          classHeader="box-noresutl-header" 
          text="You do not have yet any active beneficiary account and before you proceed with the eWithdrawal you need to create it." />
        </Tab>
        <Tab
          eventKey="benaccount"
          title="Ben. Accounts"
          className="tab-background"
        >
          <TableWithStatus
            title="Active/Pending Ben.Account (s)"
            textDefault="Double click a row to view full Ben. Account details and/or to delete or modify it."
            action={false}
            additem={true}
          />
        </Tab>
        <Tab
          eventKey="ewhistory"
          title="eWithdrawal History"
          className="tab-background"
        >
          <TableWhitRef
            title="eWithdrawal Request(s)"
            textDefault="Double click a row to view or Print full Transaction details."
            action={false}
            additem={false}
          />
        </Tab>
        <Tab
          eventKey="benhistory"
          title="Ben. Account History"
          className="tab-background"
        >
          <TableGeneral
            title="Deleted/Rejected Ben.Account(s)"
            textDefault="Double click a row to view, resubmit or print beneficiary account details."
            action={false}
          />
        </Tab>
        <Tab
          eventKey="transaction"
          title="Transaction"
          className="tab-background"
        >
          
          <DetailTransaction />

          <ServerNoResponse textMessage="Services temporarily unavailable due to End of Day Closure procedure. Please try again in 15 minutes."/>

        </Tab>
        <Tab
          eventKey="benAccount"
          title="Ben. Accounts"
          className="tab-background"
        >
          
          <NewBeneficiary />  
        </Tab>
      </Tabs>
    </>
  );
}

export default TabEWithdrawal;
