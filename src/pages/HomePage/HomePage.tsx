import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import unlock from 'assets/unlock.gif';
import Mask from './components/Mask';
import Identity from './components/Identity';
import './HomePage.css';

type Props = {
    isFirstLoad: boolean;
};

const HomePage = ({ isFirstLoad }: Props): JSX.Element => {
    const [unlockGifLoaded, setUnlockGifLoaded] = useState(false);
    const [showingIntro, setShowingIntro] = useState(true);
    const [masksHidden, setMasksHidden] = useState([false, false, false]);
    const history = useHistory();

    useEffect(() => {
        if (unlockGifLoaded) {
            const interval = setInterval(() => {
                setShowingIntro(false);
                clearInterval(interval);
            }, 2750);
        }
    }, [unlockGifLoaded]);

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

    const onMaskIdentityClick = (i: number) => {
        switch (i) {
            case 0:
                history.push('/Scholar');
                break;
            default:
                break;
        }
    };

    const onUnlockGifLoad = () => {
        setUnlockGifLoaded(true);
    };

    const getIntro = () => {
        if (showingIntro && isFirstLoad) {
            return (
                <div className={classNames('HomePage__intro', { 'HomePage__intro--fadeout': unlockGifLoaded })}>
                    <img
                        className="HomePage__unlock"
                        src={`${unlock}?a=${Math.random()}`}
                        alt="Unlock"
                        onLoad={onUnlockGifLoad}
                    />
                </div>
            );
        }
        return <div />;
    };

    return (
        <div className="HomePage">
            {getIntro()}
            <h1 className="title">Carlos Rivas</h1>
            <h2 className="subtitle">A peek into my valued social identities</h2>
            <div className="mask-identity-container">
                <div
                    className="mask-identity-container__element"
                    onMouseEnter={() => onMaskIdentityMouseEnter(0)}
                    onMouseLeave={() => onMaskIdentityMouseLeave(0)}
                    onClick={() => onMaskIdentityClick(0)}
                    onKeyDown={() => onMaskIdentityClick(0)}
                    role="button"
                    tabIndex={0}
                >
                    <Mask hidden={masksHidden[0]} />
                    <Identity type="scholar" hidden={!masksHidden[0]} />
                </div>
                <div
                    className="mask-identity-container__element"
                    onMouseEnter={() => onMaskIdentityMouseEnter(1)}
                    onMouseLeave={() => onMaskIdentityMouseLeave(1)}
                    onClick={() => onMaskIdentityClick(1)}
                    onKeyDown={() => onMaskIdentityClick(1)}
                    role="button"
                    tabIndex={0}
                >
                    <Mask hidden={masksHidden[1]} />
                    <Identity type="swe" hidden={!masksHidden[1]} />
                </div>
                <div
                    className="mask-identity-container__element"
                    onMouseEnter={() => onMaskIdentityMouseEnter(2)}
                    onMouseLeave={() => onMaskIdentityMouseLeave(2)}
                    onClick={() => onMaskIdentityClick(2)}
                    onKeyDown={() => onMaskIdentityClick(2)}
                    role="button"
                    tabIndex={0}
                >
                    <Mask hidden={masksHidden[2]} />
                    <Identity type="gamer" hidden={!masksHidden[2]} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
