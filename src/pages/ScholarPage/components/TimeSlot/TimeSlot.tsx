import React from 'react';
import classNames from 'classnames';
import './TimeSlot.css';

type Props = {
  children: React.ReactNode;
  image: string;
  alignRight?: boolean;
};

const TimeSlot = ({ children, image, alignRight }: Props): JSX.Element => {
  return (
    <div className={classNames('TimeSlot', { 'TimeSlot--right': alignRight })}>
      {!alignRight && <img className="TimeSlot-image" src={image} alt="Img" />}
      <p className="TimeSlot-text">{children}</p>
      {alignRight && <img className="TimeSlot-image" src={image} alt="Img" />}
    </div>
  );
};

TimeSlot.defaultProps = {
  alignRight: false,
};

export default TimeSlot;
