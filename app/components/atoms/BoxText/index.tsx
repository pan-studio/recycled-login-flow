import React from 'react';
import classnames from 'classnames';

interface Props {
  text?: string;
  className?: string;
  style?: any;
}

export const BoxText = ({
  style,
  className: parentClassName,
  text = '',
}: Props) => {
  return (
    <p style={style} className={classnames('original', parentClassName)}>
      {text}
    </p>
  );
};

export default BoxText;
