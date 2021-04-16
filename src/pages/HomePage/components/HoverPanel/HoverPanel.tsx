import React, { useState } from 'react';
import classNames from 'classnames';
import './HoverPanel.css';

type Props = {
  titles: string[];
  descriptions: string[];
};

const HoverPanel = ({ titles, descriptions }: Props): JSX.Element => {
  const [activeDescription, setActiveDescription] = useState<string>(descriptions[0]);
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleOnMouseEnter = (i: number) => {
    setActiveDescription(descriptions[i]);
    setActiveButton(i);
  };

  return (
    <div className="HoverPanel">
      <div className="HoverPanel-header">
        {titles.map((title, i) => {
          return (
            <button
              className={classNames('HoverPanel-button', { 'HoverPanel-button--active': activeButton === i })}
              type="button"
              onMouseEnter={() => handleOnMouseEnter(i)}
            >
              {title}
            </button>
          );
        })}
      </div>
      <div className={classNames('HoverPanel-body', { 'HoverPanel-body--active': activeDescription })}>
        <h3 className="HoverPanel-description">{activeDescription}</h3>
      </div>
    </div>
  );
};

export default HoverPanel;
