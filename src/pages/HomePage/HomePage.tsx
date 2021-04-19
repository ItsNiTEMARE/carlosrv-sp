import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import unlock from 'assets/unlock.gif';
import MIBar from './components/MIBar';
import HoverPanel, { HoverPanelTitle, HoverPanelDescription } from './components/HoverPanel';
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
    window.scrollTo(0, 0);
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
        history.push('/swe');
        break;
      case 'gamer':
        break;
      default:
        break;
    }
  };

  return (
    <div className={classNames('HomePage', { 'HomePage--noscroll': showingIntro && isFirstLoad })}>
      {showingIntro && isFirstLoad && (
        <div className={classNames('HomePage-intro', { 'HomePage-intro--fadeout': unlockLoaded })}>
          <img className="HomePage-unlock" src={`${unlock}?a=${Math.random()}`} alt="Unlock" onLoad={onUnlockLoad} />
        </div>
      )}
      <div className="HomePage-top">
        <h1 className="HomePage-title">Carlos Rivas</h1>
        <h2 className="HomePage-subtitle">A peek into my valued social identities</h2>
        <MIBar types={['scholar', 'swe', 'gamer']} onClick={handleOnClick} />
      </div>
      <div className="HomePage-bottom">
        <HoverPanel
          titles={[
            <HoverPanelTitle>What are Social Identities?</HoverPanelTitle>,
            <HoverPanelTitle>About</HoverPanelTitle>,
            <HoverPanelTitle>Credits</HoverPanelTitle>,
          ]}
          descriptions={[
            <HoverPanelDescription>
              Social identities are a portion of a person&apos;s self concept which deals with the sense of membership
              to particular social groups. Most of the groups which people consider themselves members of become an
              important source of pride and self-esteem. Social identities are personally claimed, but they are usually
              not publicly announced nor visually assignable. In some situations, social identities may change over time
              depending on internal and external factors in the person.
            </HoverPanelDescription>,
            <HoverPanelDescription>
              This web app was designed with a purpose of holding my currently valued social identities (as of April
              2021). This app, in some sense, is a time capsule allowing me to hold a digital record of my social
              identities. In five, ten, or many more years, I hope to be able to look back at this project and
              re-discover my past social identities. I consider my social identities to be dynamic, so I expect them to
              change by such long periods of time.
            </HoverPanelDescription>,
            <HoverPanelDescription>
              This project was inspired by Professor Steven McCornack at UAB. This is my submission for the Honors
              Project in his Public Speaking (CMST-101 Honors) course. Although he prefers to call his course
              Self-Presentation Across Contexts.
            </HoverPanelDescription>,
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
