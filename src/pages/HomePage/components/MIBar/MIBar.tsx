import React, { useEffect, useState } from 'react';
import Mask from '../Mask';
import Identity from '../Identity';
import type { IdentityType } from '../Identity';
import './MIBar.css';

type Props = {
  types: IdentityType[];
  onClick: (type: IdentityType) => void;
};

const MILink = ({ types, onClick }: Props): JSX.Element => {
  const [masksHidden, setMasksHidden] = useState<boolean[]>([]);

  useEffect(() => {
    const initialArray: boolean[] = [];
    for (let i = 0; i < types.length; i += 1) initialArray.push(false);
    setMasksHidden(initialArray);
  }, [types.length]);

  const handleMouseEnter = (id: number) => {
    setMasksHidden(
      masksHidden.map((value, index) => {
        if (index === id) return true;
        return value;
      })
    );
  };

  const handleMouseLeave = (id: number) => {
    setMasksHidden(
      masksHidden.map((value, index) => {
        if (index === id) return false;
        return value;
      })
    );
  };

  const handleOnClick = (id: number) => {
    onClick(types[id]);
  };

  return (
    <div className="MIBar">
      {types.map((type, id) => {
        return (
          <div
            className="MIBar-element"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
            onClick={() => handleOnClick(id)}
            onKeyDown={() => handleOnClick(id)}
            role="button"
            tabIndex={0}
            key={`${type}${10 * id}`}
          >
            <Mask hidden={masksHidden[id]} />
            <Identity type={type} hidden={!masksHidden[id]} />
          </div>
        );
      })}
    </div>
  );
};

export default MILink;
