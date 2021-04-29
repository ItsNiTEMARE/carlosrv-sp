import React from 'react';
import './YouTubeBanner.css';

type Props = {
  children: React.ReactNode;
  logo: string;
  title: string;
  url: string;
  color: string;
};

const YouTubeBanner = ({ children, logo, title, url, color }: Props): JSX.Element => {
  const onClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="YouTubeBanner" style={{ background: color }}>
      <div className="YouTubeBanner-left-section">
        <img className="YouTubeBanner-logo" src={logo} alt="YouTube Logo" />
        <a className="YouTubeBanner-title" href={url} target="_blank" rel="noreferrer">
          <u>{title}</u>
        </a>
        <button className="YouTubeBanner-button" type="button" style={{ color }} onClick={onClick}>
          View Channel
        </button>
      </div>
      <div className="YouTubeBanner-right-section">
        <h1 className="YouTubeBanner-description">{children}</h1>
      </div>
    </div>
  );
};

export default YouTubeBanner;
