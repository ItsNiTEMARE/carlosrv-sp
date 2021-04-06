import React from 'react';
import classNames from 'classnames';
import mask from 'assets/mask.svg';
import './Mask.css';

type Props = {
  hidden: boolean;
};

const Mask = ({ hidden }: Props): JSX.Element => {
  return <img className={classNames('Mask', { 'Mask--hidden': hidden })} src={mask} alt="Mask" />;
};

export default Mask;
