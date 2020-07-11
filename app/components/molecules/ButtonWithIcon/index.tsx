import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';
import Icon from '../../atoms/Icon';
import { Button } from 'react-bootstrap';

interface Props {
  text: string;
  className?: string;
  icon?: any;
  classButtonIcon?: any;
}

export const ButtonWithIcon = ({
  className: parentClassName,
  text = '',
  icon = '',
  classButtonIcon=''
}: Props) => {
  return (
    <Button variant="primary" type="submit" className={parentClassName}>
      <Icon src={icon} className={classnames(classButtonIcon)}/>
      {text}
    </Button>
  );
};

export default ButtonWithIcon;
