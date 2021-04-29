import React from 'react';
import classNames from 'classnames';
import './TimeSlot.css';

type Props = {
  children: React.ReactNode;
  title: string;
  image?: string;
  logo: string;
  alignRight?: boolean;
};

const TimeSlot = ({ children, title, logo, image, alignRight }: Props): JSX.Element => {
  return (
    <div className={classNames('TimeSlot', { 'TimeSlot--right': alignRight })}>
      <div className="TimeSlot-header">
        <h3 className="TimeSlot-title">{title}</h3>
        {image && <img className="TimeSlot-img" src={image} alt="title" />}
      </div>
      <div className="TimeSlot-content">
        {!alignRight && <img className="TimeSlot-logo" src={logo} alt="Img" />}
        <p className="TimeSlot-text">{children}</p>
        {alignRight && <img className="TimeSlot-logo" src={logo} alt="Img" />}
      </div>
    </div>
  );
};

TimeSlot.defaultProps = {
  image: null,
};

TimeSlot.defaultProps = {
  alignRight: false,
};

export default TimeSlot;
