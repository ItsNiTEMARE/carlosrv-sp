import React, { useCallback } from 'react';
import classNames from 'classnames';
import scholar from 'assets/scholar.svg';
import swe from 'assets/swe.svg';
import gamer from 'assets/gamer.svg';
import './Identity.css';

type Props = {
  type: 'scholar' | 'swe' | 'gamer';
  hidden: boolean;
};

const Identity = ({ type, hidden }: Props): JSX.Element => {
  const getImageSrc = useCallback(() => {
    switch (type) {
      case 'scholar':
        return scholar;
      case 'swe':
        return swe;
      case 'gamer':
        return gamer;
      default:
        return scholar;
    }
  }, [type]);

  return <img className={classNames('Identity', { 'Identity--hidden': hidden })} src={getImageSrc()} alt="identity" />;
};

export default Identity;
