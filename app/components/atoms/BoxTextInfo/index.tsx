import React from 'react';
import classnames from 'classnames';


import TooltipInfo from '../../organisms/TooltipInfo';

interface Props {
  text?: string;
  className?: string;
  style?: any;
  tooltip?: any;
  titleTooltip?:any;
}

export const BoxTextInfo = ({
  style,
  className: parentClassName,
  text = '',
  tooltip = '',
  titleTooltip =''
}: Props) => {
  return (
    <p style={style} className={classnames('original', parentClassName)}>
      {text}
      <TooltipInfo text={tooltip} title={titleTooltip}/>
    </p>
  );
};

export default BoxTextInfo;


