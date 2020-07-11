import React from 'react';
import classnames from 'classnames';

interface Props {
height?: any;
width?: any;
className?: string;
src?: any;
}

export const Icon = ({
    height = '',
    width = '',    
    className: parentClassName,
    src = '',
}: Props) => {
  return (
    <img src={src} width={width} height={height} className={classnames('original', parentClassName)}/>
  );
};

export default Icon;
