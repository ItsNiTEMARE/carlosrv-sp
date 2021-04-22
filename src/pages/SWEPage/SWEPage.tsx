import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExitButton from 'components/ExitButton';
import LaptopCoder from './components/LaptopCoder';
import ProjectCard from './components/ProjectCard';
import './SWEPage.css';

const SWEPage = (): JSX.Element => {
  const [isShowingContent, setIsShowingContent] = useState(true);
  const history = useHistory();

  const exitPage = () => {
    history.goBack();
  };

  const showContent = () => {
    setIsShowingContent(true);
  };

  return (
    <div className="SWEPage">
      <ExitButton onClick={exitPage} />
      <h1 className="SWEPage-title">Rising</h1>
      <h1 className="SWEPage-subtitle">Software Engineer</h1>
      {!isShowingContent && <LaptopCoder onComplete={showContent} />}
      {isShowingContent && (
        <div className="SWEPage-content">
          <ProjectCard />
        </div>
      )}
    </div>
  );
};

export default SWEPage;
