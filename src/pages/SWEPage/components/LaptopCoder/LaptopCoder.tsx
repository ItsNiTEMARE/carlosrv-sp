import React, { useEffect, useState } from 'react';
import laptop from 'assets/laptop.svg';
import loading from 'assets/loading.gif';
import { CopyBlock, dracula } from 'react-code-blocks';
import './LaptopCoder.css';

type Props = {
  onComplete: () => void;
};

const finalCode = `import React from 'react';

const Page = () => {
    const title = 'View Content';
    const click = () => showContent();
    return <button onClick={click}>{title}</button>
};

export default Page;
`;

const LaptopCoder = ({ onComplete }: Props): JSX.Element => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentCode, setCurrentCode] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const [finishedCompiling, setFinishedCompiling] = useState(false);
  const TYPE_ANIMATION_LENGTH = 4000;
  const COMPILE_ANIMATION_LENGTH = 2500;

  useEffect(() => {
    let substrIndex = 0;
    const interval = setInterval(() => {
      setCurrentCode(finalCode.substr(0, substrIndex));
      substrIndex += 1;
      if (substrIndex > finalCode.length) {
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, TYPE_ANIMATION_LENGTH / finalCode.length);
    return () => {
      setIsAnimating(false);
      clearInterval(interval);
    };
  }, []);

  const setCompileTimeout = () => {
    setIsCompiling(true);
    setTimeout(() => {
      setFinishedCompiling(true);
      setIsCompiling(false);
    }, COMPILE_ANIMATION_LENGTH);
  };

  const handleRunButtonClick = () => {
    if (isCompiling || finishedCompiling) return;
    setCompileTimeout();
  };

  return (
    <div className="LaptopCoder">
      <div className="LaptopCoder-screen">
        <div className="LaptopCoder-code">
          <CopyBlock language="jsx" theme={dracula} showLineNumbers text={currentCode} />
        </div>
        {!isAnimating && (
          <button className="LaptopCoder-run-button" type="button" onClick={handleRunButtonClick}>
            Run Code
          </button>
        )}
        {finishedCompiling && (
          <button className="LaptopCoder-content-button" type="button" onClick={onComplete}>
            View Content
          </button>
        )}
        {isCompiling && (
          <div className="LaptopCoder-loadview">
            <img className="LaptopCoder-loadview-img" src={loading} alt="Loading" />
            <h3 className="LaptopCoder-loadview-text">Compiling code ...</h3>
          </div>
        )}
      </div>
      <img className="LaptopCoder-img" src={laptop} alt="Laptop" />
    </div>
  );
};

export default LaptopCoder;
