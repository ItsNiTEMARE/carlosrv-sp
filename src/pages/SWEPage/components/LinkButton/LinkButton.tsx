import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import github from 'assets/github.svg';
import youtube from 'assets/youtube.svg';
import apple from 'assets/apple.svg';
import playstore from 'assets/playstore.svg';
import link from 'assets/link.svg';
import './LinkButton.css';

type LinkButtonType = {
  GitHub: 'GitHub';
  YouTube: 'YouTube';
  Apple: 'Apple';
  PlayStore: 'PlayStore';
  Link: 'Link';
  Company: 'Company';
};

type Props = {
  type: keyof LinkButtonType;
  url: string;
};

const LinkButton = ({ type, url }: Props): JSX.Element => {
  const [title, setTitle] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    switch (type) {
      case 'GitHub':
        setTitle('View on GitHub');
        setLogo(github);
        break;
      case 'YouTube':
        setTitle('View on YouTube');
        setLogo(youtube);
        break;
      case 'Apple':
        setTitle('View on App Store');
        setLogo(apple);
        break;
      case 'PlayStore':
        setTitle('View on Play Store');
        setLogo(playstore);
        break;
      case 'Link':
        setTitle('View Website');
        setLogo(link);
        break;
      case 'Company':
        setTitle('View Company');
        setLogo(link);
        break;
      default:
        break;
    }
  }, [type]);

  const onClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      className={classNames('LinkButton', {
        'LinkButton--github': type === 'GitHub',
        'LinkButton--youtube': type === 'YouTube',
        'LinkButton--apple': type === 'Apple',
        'LinkButton--playstore': type === 'PlayStore',
        'LinkButton--link': type === 'Link',
        'LinkButton--company': type === 'Company',
      })}
      type="button"
      onClick={onClick}
    >
      <img className="LinkButton-logo" src={logo} alt="Link" />
      <h1 className="LinkButton-title">{title}</h1>
    </button>
  );
};

export default LinkButton;
