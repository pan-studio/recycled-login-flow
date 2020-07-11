import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import BoxTextInfo from '../../atoms/BoxTextInfo'
import Icon from '../../atoms/Icon';
import { Button } from 'react-bootstrap';

interface Props {
  text: string;
  className?: string;
  icon?: any;
  classIcon?:any;
}

const textpopover = (
  <ul>
    <li>This service allows you to define a maximum of 10 beneficiary pre-authorized accounts.</li>
    <li>Once these accounts have been approved by the CY, you will be able to perform share withdrawals online.</li>
    <li>You will receive an email confirmation once an account has been approved and you will also receive a funds confirmation email after each withdrawal has been completely processed by the CU.</li>
  </ul>
);

export const TextWithIcon = ({
  className: parentClassName,
  text = '',
  icon = '',
  classIcon = '',
}: Props) => {
  return (
    <div>
      <Icon src={icon} className={classnames(classIcon)}/>
      
      <BoxTextInfo titleTooltip="Description" text={text} className={parentClassName} tooltip={textpopover}/>


    </div>
  );
};

export default TextWithIcon;
