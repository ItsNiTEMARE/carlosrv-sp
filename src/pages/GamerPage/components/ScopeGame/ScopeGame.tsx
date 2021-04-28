import React, { useEffect, useState } from 'react';
import Bullseye from '../Bullseye';
import './ScopeGame.css';

type Props = {
  onComplete: () => void;
};

const ScopeGame = ({ onComplete }: Props): JSX.Element => {
  const [bullseyes, setBullseyes] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [time, setTime] = useState(0.0);
  const START_BULLSEYE_COUNT = 3;
  const TIME_TICK_RATE = 100;
  const COMPLETE_DELAY = 1500;

  const removeBullseye = (id: number) => {
    const newBullseyes = bullseyes.filter((num) => num !== id);
    if (newBullseyes.length === 0) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, COMPLETE_DELAY);
    }
    setBullseyes(newBullseyes);
  };

  useEffect(() => {
    const newBullseyes: number[] = [];
    for (let i = 0; i < START_BULLSEYE_COUNT; i += 1) {
      newBullseyes.push(i);
    }
    setBullseyes(newBullseyes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isComplete) {
        setTime((t) => t + TIME_TICK_RATE / 1000);
      } else {
        clearInterval(interval);
      }
    }, TIME_TICK_RATE);
    return () => clearInterval(interval);
  }, [isComplete]);

  return (
    <div className="ScopeGame">
      {!isComplete && (
        <div className="ScopeGame-gameview">
          {bullseyes.length > 0 &&
            bullseyes.map((bullseyeID) => {
              return <Bullseye onClick={() => removeBullseye(bullseyeID)} key={bullseyeID} />;
            })}
        </div>
      )}
      {!isComplete && <h1 className="ScopeGame-count">Targets Remaining: {bullseyes.length}</h1>}
      <h1 className="ScopeGame-time">Time: {time.toFixed(1)}</h1>
    </div>
  );
};

export default ScopeGame;
