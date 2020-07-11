import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert } from 'reactstrap';
import A from '../../atoms/A';
import IssueIcon from '../../atoms/IssueIcon';
import IconCustom from '../../atoms/IconCustom';
import Img from '../../atoms/Img';
import Circle from '../../atoms/Circle';


import GlobalStyle from '../../../global-styles.js';

import BoxText from '../../atoms/BoxText';
import H2Title from '../../atoms/H2Title';

import BoxH1Text from '../../molecules/BoxH1Text';

import imgCredit from '../../../assets/images/election_ofcredit.png';

const path = require('path');



function SectionTextImageRight(props) {

  return (
    <div class="row"
    style={{
      maxWidth: "1440px",
      margin: "auto",
      marginTop: "90px"
    }}
   
    >
      <div class="col-sm-6 col-xs-12">
        <BoxH1Text
          title={props.title}
          text={props.text}
          haveTextBold={true}
          textBold={props.textBold
          }
        />
      </div>
      <div class="col-sm-6 col-xs-12">
        <Img src={imgCredit} className="" />
      </div>
    </div>
  );
}

export default SectionTextImageRight;
