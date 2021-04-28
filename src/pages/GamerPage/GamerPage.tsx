import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExitButton from 'components/ExitButton';
import ScopeGame from './components/ScopeGame';
import './GamerPage.css';

const GamerPage = (): JSX.Element => {
  const [isShowingContent, setIsShowingContent] = useState(false);
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
      {isShowingContent && <h1>Hello</h1>}
    </div>
  );
};

export default GamerPage;
