import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import itsnitemare from 'assets/ItsNiTEMARE.png';
import optic from 'assets/optic.jpg';
import warzone from 'assets/warzone.jpg';
import csgo from 'assets/csgo.jpg';
import ExitButton from 'components/ExitButton';
import ScopeGame from './components/ScopeGame';
import YouTubeBanner from './components/YouTubeBanner';
import './GamerPage.css';

const GamerPage = (): JSX.Element => {
  const [isShowingContent, setIsShowingContent] = useState(true);
  const history = useHistory();

  const exitPage = () => {
    history.goBack();
  };

  const showContent = () => {
    setIsShowingContent(true);
  };

  return (
    <div className="GamerPage">
      {!isShowingContent && <ScopeGame onComplete={() => showContent()} />}
      <ExitButton onClick={() => exitPage()} />
      <h1 className="GamerPage-title">Gamer</h1>
      {isShowingContent && (
        <div className="GamerPage-content">
          <iframe
            className="GamerPage-intro-video"
            src="https://www.youtube.com/embed/ZfZGhHXwPGE?autoplay=1&controls=0"
            title="Black Ops 2 - Live Action"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h1 className="GamerPage-introduction">
            The <i>Call of Duty: Black Ops 2 Live-Action Trailer </i> (shown above) is the pivotal moment I begin my
            entrance into the gaming community. After purchasing this game, I discovered the undercover world of online
            gaming. Since then, I have made a multitude of real-life and online friends who have the same passion. The
            idea of being a gamer is a huge part of me as of now.
          </h1>
          <YouTubeBanner
            logo={itsnitemare}
            title="Its NiTEMARE"
            url="https://www.youtube.com/itsnitemareyt"
            color="#c4302b"
          >
            My gaming YouTube channel. I begin this channel in middle school with hopes of building a presence in the
            Call of Duty community. In this channel, I shared my best gaming clips and tutorials on topics related to
            Call of Duty. Years ago, I stopped posting videos on the channel and it is just a peice of history now.
          </YouTubeBanner>
          <h1 className="GamerPage-textbox">
            The rise of{' '}
            <a href="https://en.wikipedia.org/wiki/Esports" target="_blank" rel="noreferrer">
              Esports
            </a>
            &nbsp;is what keeps me in this community. It is amazing to watch the best players and teams from around the
            world compete in games for large amounts of money (like traditional sports). The best gaming moments so far
            have been made during Esports competitions, and I want to continue being part of this growing community.
          </h1>
          <div className="GamerPage-panel">
            <iframe
              className="GamerPage-video"
              src="https://www.youtube.com/embed/txgWsB-sn1w?start=38"
              title="CSGO Best Plays"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="GamerPage-video"
              src="https://www.youtube.com/embed/syMhy7lpVZI?start=1451"
              title="Call of Duty Best Plays"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h1 className="GamerPage-subtitle">Favorite Esports Team.</h1>
          <div className="GamerPage-combo">
            <img className="GamerPage-img-single" src={optic} alt="Optic Gaming" />
            <a href="https://optic.callofdutyleague.com/en-us/" target="_blank" rel="noreferrer">
              <button className="GamerPage-img-button" type="button">
                View Team
              </button>
            </a>
          </div>
          <h1 className="GamerPage-subtitle">Most Played Games.</h1>
          <div className="GamerPage-panel">
            <div className="GamerPage-combo">
              <img className="GamerPage-img-double" src={warzone} alt="Warzone" />
              <a
                href="https://my.callofduty.com/player/combat-record?username=Its_NiTEMARE&platform=atvi"
                target="_blank"
                rel="noreferrer"
              >
                <button className="GamerPage-img-button" type="button">
                  View COD Profile
                </button>
              </a>
            </div>
            <div className="GamerPage-combo">
              <img className="GamerPage-img-double" src={csgo} alt="Warzone" />
              <a href="https://steamcommunity.com/id/ItsNiTEMARE/stats/CSGO" target="_blank" rel="noreferrer">
                <button className="GamerPage-img-button" type="button">
                  View CSGO Profile
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamerPage;
