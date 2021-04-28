import React, { useEffect, useState } from 'react';
import bullseye from 'assets/bullseye.svg';
import './Bullseye.css';

type Props = {
  onClick: () => void;
};

const Bullseye = ({ onClick }: Props): JSX.Element => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const FALL_RATE = 15;

  const resetPosition = () => {
    const x = Math.round(Math.random() * (window.innerWidth - 100));
    const y = -250;
    setPosX(x);
    setPosY(y);
  };

  useEffect(() => {
    resetPosition();
    const interval = setInterval(() => {
      let currPosY = 0;
      setPosY((pos) => {
        const newPos = pos + 5;
        currPosY = newPos;
        return newPos;
      });
      if (currPosY > window.innerHeight) {
        resetPosition();
      }
    }, FALL_RATE);
    return () => clearInterval(interval);
  }, []);

  const onMouseClick = () => {
    onClick();
  };

  return (
    <button className="Bullseye" onClick={onMouseClick} type="button" style={{ left: posX, top: posY }}>
      <img className="Bullseye-img" src={bullseye} alt="bullseye" />
    </button>
  );
};

export default Bullseye;
