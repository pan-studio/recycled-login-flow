import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Alert } from 'reactstrap';
import A from '../../atoms/A';
import IssueIcon from '../../atoms/IssueIcon';
import IconCustom from '../../atoms/IconCustom';
import Circle from '../../atoms/Circle';


import GlobalStyle from '../../../global-styles.js';

import BoxText from '../../atoms/BoxText';
import H2Title from '../../atoms/H2Title';

import BoxInfoHome from '../../molecules/BoxInfoHome';

const path = require('path');



function SectionInfoBox(props) {
  const ComponentToRender = props.component;
  return (
    <div class="row"
    style={{
      maxWidth: "1440px",
      margin: "auto",
      marginTop: "90px"
    }}
    > 
      <div class="col-sm-4 col-xs-12">
        <BoxInfoHome title={props.titleOne} text={props.textOne} icon={props.iconBoxOne} />
      </div>
      <div class="col-sm-4 col-xs-12">
        <BoxInfoHome title={props.titleTwo} text={props.textTwo} icon={props.iconBoxTwo} />
      </div>
      <div class="col-sm-4 col-xs-12">
        <BoxInfoHome title={props.titleThree} text={props.textThree} icon={props.iconBoxThree} />
      </div>

    </div>
  );
}

export default SectionInfoBox;
