import React, { useState } from 'react';
import './HintBox.css';

type Props = {
  children: React.ReactNode;
  alwaysShow?: boolean;
};

const HintBox = ({ children, alwaysShow }: Props): JSX.Element => {
  const [showHint, setShowHint] = useState(false);

  const onHoverIn = () => {
    setShowHint(true);
  };

  const onHoverOut = () => {
    setShowHint(false);
  };

  return (
    <div className="HintBox">
      <button
        className="HintBox-button"
        type="button"
        onMouseOver={onHoverIn}
        onFocus={onHoverIn}
        onMouseOut={onHoverOut}
        onBlur={onHoverOut}
      >
        Hint
      </button>
      {(showHint || alwaysShow) && <h1 className="HintBox-hint">{children}</h1>}
    </div>
  );
};

HintBox.defaultProps = {
  alwaysShow: false,
};

export default HintBox;
