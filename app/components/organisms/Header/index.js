import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert } from 'reactstrap';
import A from '../../atoms/A';
import IssueIcon from '../../atoms/IssueIcon';
import IconCustom from '../../atoms/IconCustom';
import Circle from '../../atoms/Circle';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from '../../../assets/images/homebanner.png';

import messages from './messages';
import GlobalStyle from '../../../global-styles.js';
import CircleWithIcon from '../../molecules/CircleWithIcon';
import BoxText from '../../atoms/BoxText';
import H2Title from '../../atoms/H2Title';
import SectionInfoBox from '../SectionInfoBox';
import SectionTextImageRight from '../SectionTextImageRight';
import SectionTextImageLeft from '../SectionTextImageLeft';

import iconFolderShared from '../../../assets/images/folder_shared-24px.png';
import iconPersonOutline from '../../../assets/images/person_outline-24px.png';
import iconLocalAtm from '../../../assets/images/local_atm-24px.png';
const path = require('path');

function Header() {
  return (
    <div>
      <A href="#">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>

      <div
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 60,
          marginBottom: 60,
        }}
      >
        <SectionInfoBox
          titleOne="Memership Data"
          textOne="This service enables you to easily change your eServices password, email address and challenge questions.
          The email address is the address registered in the CU database  is used to send any communications via email.
          The challenge questions allow you to reset password should you forget it."
          iconBoxOne={iconFolderShared}
          iconBoxTwo={iconPersonOutline}
          titleTwo="Account Data"
          textTwo="This service provides an overall view of your accounts, allows you to browse your account and print your savings 
          and loan movements for the current quarter and 4 preceding quarters, and displays loans closed this quarter or on the 4 
          preceding quarters."
          iconBoxThree={iconLocalAtm}
          titleThree="eWithdrawal"
          textThree="This service allows you to define a maximum of 10 beneficiary pre-authorized accounts
          Once these accounts have been approved by the CU, you will be able to perform share withdrawals online.
          You will receive an email confirmation once an account has been approved and you will also receive a funds 
          confirmation email after each withdrawal has been completely processed by the CU."
        />
        <SectionInfoBox
          titleOne="Memership Data"
          textOne="This service enables you to easily change your eServices password, email address and challenge questions.
          The email address is the address registered in the CU database  is used to send any communications via email.
          The challenge questions allow you to reset password should you forget it."
          iconBoxOne={iconFolderShared}
          iconBoxTwo={iconPersonOutline}
          titleTwo="Account Data"
          textTwo="This service provides an overall view of your accounts, allows you to browse your account and print your savings 
          and loan movements for the current quarter and 4 preceding quarters, and displays loans closed this quarter or on the 4 
          preceding quarters."
          iconBoxThree={iconLocalAtm}
          titleThree="eWithdrawal"
          textThree="This service allows you to define a maximum of 10 beneficiary pre-authorized accounts
          Once these accounts have been approved by the CU, you will be able to perform share withdrawals online.
          You will receive an email confirmation once an account has been approved and you will also receive a funds 
          confirmation email after each withdrawal has been completely processed by the CU."
        />
      </div>
      <div
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 60,
          marginBottom: 60,
        }}
      >
        <SectionTextImageRight
          title="Election of Credit Union Officer"
          text="This service is available only during the election period. duly advertised beforehand, 
        and allows online voting for the FAO Credit Union Officers (Honorary President, Honorary Vice-President, Board of Directors Members, 
        and Credit Committee Members). Elections are held every year before the Annual General Meeting and the results are announced shortly 
        after its conclusion."
          haveTextBold
          textBold="Have a say on your FAO Credit Union is governed. Vote."
        />
        <SectionTextImageLeft
          title="Pending Loan Application"
          text="This service is available only when you have a Pending Loan Application uploaded in eServices by 
        the Credit Union. It allows you to complete the loan application and to accept the loan terms and conditions online.
         Once done, you need to send us by scan the pending loan application dully completed and signed."
        />
      </div>
    </div>
  );
}

export default Header;
