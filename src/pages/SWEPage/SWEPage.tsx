import React from 'react';
import { useHistory } from 'react-router-dom';
import ExitButton from 'components/ExitButton';
import LaptopCoder from './components/LaptopCoder';
import './SWEPage.css';

const SWEPage = (): JSX.Element => {
  const history = useHistory();

  const exitPage = () => {
    history.goBack();
  };

  const showContent = () => {
    //
  };

  return (
    <div className="SWEPage">
      <ExitButton onClick={exitPage} />
      <h1 className="SWEPage-title">Rising Software Engineer</h1>
      <LaptopCoder onComplete={showContent} />
    </div>
  );
};

export default SWEPage;
