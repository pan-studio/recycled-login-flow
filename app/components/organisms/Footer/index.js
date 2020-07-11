import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/atoms/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import ContactUsFooter from '../../molecules/ContactUsFooter';

function Footer(props) {
  return (
   <div>
     {props.enableFooter &&
      <ContactUsFooter text="Not yet a member?" haveTextBold={true} textBold="Join the FAO Credit Union now"></ContactUsFooter>  
     }
   </div>
  );
}

export default Footer;
