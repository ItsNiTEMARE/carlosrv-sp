import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import unlock from 'assets/unlock.gif';
import MIBar from './components/MIBar';
import { IdentityType } from './components/Identity';
import './HomePage.css';

type Props = {
  isFirstLoad: boolean;
};

const HomePage = ({ isFirstLoad }: Props): JSX.Element => {
  const [unlockLoaded, setUnlockLoaded] = useState(false);
  const [showingIntro, setShowingIntro] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (unlockLoaded) {
      setTimeout(() => {
        setShowingIntro(false);
      }, 2750);
    }
  }, [unlockLoaded]);

  const onUnlockLoad = () => {
    setUnlockLoaded(true);
  };

  const handleOnClick = (type: IdentityType) => {
    switch (type) {
      case 'scholar':
        history.push('/scholar');
        break;
      case 'swe':
        break;
      case 'gamer':
        break;
      default:
        break;
    }
  };

  return (
    <div className="HomePage">
      {showingIntro && isFirstLoad && (
        <div className={classNames('HomePage-intro', { 'HomePage-intro--fadeout': unlockLoaded })}>
          <img className="HomePage-unlock" src={`${unlock}?a=${Math.random()}`} alt="Unlock" onLoad={onUnlockLoad} />
        </div>
      )}
      <h1 className="title">Carlos Rivas</h1>
      <h2 className="subtitle">A peek into my valued social identities</h2>
      <MIBar types={['scholar', 'swe', 'gamer']} onClick={handleOnClick} />
    </div>
  );
};

export default HomePage;
