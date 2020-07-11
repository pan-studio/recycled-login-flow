import React from 'react';
import classnames from 'classnames';

/*
interface Props {
  src: string;
  alt?: string;
  className: string;
}

export const Img = ({ className: parentClassName, src, alt }: Props) => {
  return (
    <img
      className={classnames('img img-responsive', parentClassName)}
      src={src}
      alt={alt}
      
    />
  );
};

export default Img;
*/

interface Props {
  src: any;
  className?: string;
  style?: any;
  alt?:any
}

export const Img = ({
  style,
  className: parentClassName,
  src

}: Props) => {
  return (
    <img style={style} src={src} className={classnames('original', parentClassName)}>
    </img>
  );
};

export default Img;
