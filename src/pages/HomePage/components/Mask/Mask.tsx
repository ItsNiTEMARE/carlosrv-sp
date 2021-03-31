import React, { useState } from 'react';
import classNames from 'classnames';
import mask from 'assets/mask.svg';
import './Mask.css';

type Props = {
    hidden: boolean;
};

const Mask = ({ hidden }: Props): JSX.Element => {
    const [width] = useState(192);
    const [height] = useState(192);
    return (
        <img
            className={classNames('Mask', { 'Mask--hidden': hidden })}
            src={mask}
            width={width}
            height={height}
            alt="Mask"
        />
    );
};

export default Mask;
