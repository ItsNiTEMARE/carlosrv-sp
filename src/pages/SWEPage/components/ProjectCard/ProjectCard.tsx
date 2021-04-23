import React from 'react';
import './ProjectCard.css';

type Props = {
  children: React.ReactNode;
  title: string;
  image: string;
  links: JSX.Element[];
};

const ProjectCard = ({ children, title, image, links }: Props): JSX.Element => {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard-header">
        <h1 className="ProjectCard-title">{title}</h1>
      </div>
      <div className="ProjectCard-body">
        <div className="ProjectCard-left-section">
          <img className="ProjectCard-img" src={image} alt="Project" />
        </div>
        <div className="ProjectCard-right-section">
          <h1 className="ProjectCard-description">{children}</h1>
          <div className="ProjectCard-links">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
