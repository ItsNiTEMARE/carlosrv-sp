import React, { useState } from 'react';
import classNames from 'classnames';
import './HoverPanel.css';

export const HoverPanelTitle = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div>{children}</div>;
};

export const HoverPanelDescription = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div>{children}</div>;
};

type Props = {
  titles: JSX.Element[];
  descriptions: JSX.Element[];
};

const HoverPanel = ({ titles, descriptions }: Props): JSX.Element => {
  const [activeTitle, setActiveTitle] = useState(0);
  const [activeDescription, setActiveDescription] = useState(0);

  const handleOnMouseEnter = (i: number) => {
    setActiveDescription(i);
    setActiveTitle(i);
  };

  return (
    <div className="HoverPanel">
      <div className="HoverPanel-header">
        {titles.map((title, i) => {
          return (
            <button
              className={classNames('HoverPanel-button', { 'HoverPanel-button--active': activeTitle === i })}
              type="button"
              onMouseEnter={() => handleOnMouseEnter(i)}
              key={`${title.key}${i * 10}`}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div className={classNames('HoverPanel-body')}>
        <h3 className="HoverPanel-description">{descriptions[activeDescription]}</h3>
      </div>
    </div>
  );
};

export default HoverPanel;
