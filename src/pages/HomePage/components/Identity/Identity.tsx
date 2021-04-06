import React from 'react';
import classNames from 'classnames';
import scholar from 'assets/scholar.svg';
import swe from 'assets/swe.svg';
import gamer from 'assets/gamer.svg';
import './Identity.css';

export type IdentityType = 'scholar' | 'swe' | 'gamer';

type Props = {
  type: IdentityType;
  hidden: boolean;
};

const Identity = ({ type, hidden }: Props): JSX.Element => {
  const getImageSrc = () => {
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
  };

  return <img className={classNames('Identity', { 'Identity--hidden': hidden })} src={getImageSrc()} alt="identity" />;
};

export default Identity;
