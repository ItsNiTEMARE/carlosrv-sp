import React from 'react';
import arrowhead from 'assets/arrowhead.svg';
import './TimeArrow.css';

type Props = {
  children?: React.ReactNode;
  alignRight?: boolean;
};

const TimeArrow = ({ children, alignRight }: Props): JSX.Element => {
  return (
    <div className="TimeArrow">
      {alignRight && <div className="TimeArrow-padding" />}
      {!alignRight && <p className="TimeArrow-padding TimeArrow-text">{children && children}</p>}
      <div className="TimeArrow-line">
        <img className="TimeArrow-arrowhead" src={arrowhead} alt="" />
      </div>
      {alignRight && <p className="TimeArrow-padding TimeArrow-text">{children && children}</p>}
      {!alignRight && <div className="TimeArrow-padding" />}
    </div>
  );
};

TimeArrow.defaultProps = {
  children: null,
  alignRight: false,
};

export default TimeArrow;
