import React from 'react';
import classnames from 'classnames';
import BoxText from '../../atoms/BoxText';

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const BoxListQuestions = ({
  className: parentClassName,
  text = '',
  title = '',
}: Props) => {
  return (
    <div>
      <div className={classnames('bxQuestion', parentClassName)}>
        <BoxText text={title} className={'bxTitle'}></BoxText>
      </div>
      <BoxText text={text} className={'bxText'}></BoxText>
    </div>
  );
};

export default BoxListQuestions;
