import React from 'react';
import classNames from 'classnames';
import './TimeSlot.css';

type Props = {
  children: React.ReactNode;
  title: string;
  image: string;
  alignRight?: boolean;
};

const TimeSlot = ({ children, title, image, alignRight }: Props): JSX.Element => {
  return (
    <div className={classNames('TimeSlot', { 'TimeSlot--right': alignRight })}>
      <div className="TimeSlot-header">
        <h3 className="TimeSlot-title">{title}</h3>
      </div>
      <div className="TimeSlot-content">
        {!alignRight && <img className="TimeSlot-image" src={image} alt="Img" />}
        <p className="TimeSlot-text">{children}</p>
        {alignRight && <img className="TimeSlot-image" src={image} alt="Img" />}
      </div>
    </div>
  );
};

TimeSlot.defaultProps = {
  alignRight: false,
};

export default TimeSlot;
