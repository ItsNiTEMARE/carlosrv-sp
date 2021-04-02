import React from 'react';
import exit from 'assets/exit.svg';
import './ExitButton.css';

type Props = {
    onClick: () => void;
};

const ExitButton = ({ onClick }: Props): JSX.Element => {
    return (
        <button className="ExitButton" type="button" onClick={() => onClick()}>
            <img className="ExitButton__img" src={exit} alt="Exit" />
        </button>
    );
};

export default ExitButton;
