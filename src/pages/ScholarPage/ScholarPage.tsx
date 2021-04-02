import React from 'react';
import { useHistory } from 'react-router-dom';
import ExitButton from 'components/ExitButton';
import './ScholarPage.css';

const ScholarPage = (): JSX.Element => {
    const history = useHistory();

    const exitPage = () => {
        history.goBack();
    };

    return (
        <div className="ScholarPage">
            <ExitButton onClick={() => exitPage()} />
        </div>
    );
};

export default ScholarPage;
