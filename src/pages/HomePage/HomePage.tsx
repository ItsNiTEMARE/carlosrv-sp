import React, { useCallback, useEffect, useState } from 'react';
import unlock from 'assets/unlock.gif';
import Mask from './components/Mask';
import Identity from './components/Identity';
import './HomePage.css';

const HomePage = (): JSX.Element => {
    const [showingIntro, setShowingIntro] = useState(true);
    const [masksHidden, setMasksHidden] = useState([false, false, false]);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowingIntro(false);
            clearInterval(interval);
        }, 2500);
    }, []);

    const onMaskIdentityMouseEnter = useCallback(
        (i: number) => {
            setMasksHidden(
                masksHidden.map((value, index) => {
                    if (index === i) return true;
                    return value;
                })
            );
        },
        [masksHidden]
    );

    const onMaskIdentityMouseLeave = useCallback(
        (i: number) => {
            setMasksHidden(
                masksHidden.map((value, index) => {
                    if (index === i) return false;
                    return value;
                })
            );
        },
        [masksHidden]
    );

    if (showingIntro) {
        return (
            <div className="HomePage__intro">
                <img src={`${unlock}?a=${Math.random()}`} alt="Unlock" width={128} height={128} />
            </div>
        );
    }

    return (
        <div className="HomePage">
            <h1 className="title">Carlos Rivas</h1>
            <div className="mask-identity-container">
                <div
                    className="mask-identity-container__element"
                    onMouseEnter={() => onMaskIdentityMouseEnter(0)}
                    onMouseLeave={() => onMaskIdentityMouseLeave(0)}
                >
                    <Mask hidden={masksHidden[0]} />
                    <Identity type="scholar" hidden={!masksHidden[0]} />
                </div>
                <div
                    className="mask-identity-container__element"
                    onMouseEnter={() => onMaskIdentityMouseEnter(1)}
                    onMouseLeave={() => onMaskIdentityMouseLeave(1)}
                >
                    <Mask hidden={masksHidden[1]} />
                    <Identity type="swe" hidden={!masksHidden[1]} />
                </div>
                <div
                    className="mask-identity-container__element"
                    onMouseEnter={() => onMaskIdentityMouseEnter(2)}
                    onMouseLeave={() => onMaskIdentityMouseLeave(2)}
                >
                    <Mask hidden={masksHidden[2]} />
                    <Identity type="gamer" hidden={!masksHidden[2]} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
