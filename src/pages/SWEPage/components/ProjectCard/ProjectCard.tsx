import React from 'react';
import dndragons from 'assets/dndragons.gif';
import LinkButton from '../LinkButton';
import './ProjectCard.css';

const ProjectCard = (): JSX.Element => {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard-header">
        <h1 className="ProjectCard-title">DNDragons</h1>
      </div>
      <div className="ProjectCard-body">
        <div className="ProjectCard-left-section">
          <img className="ProjectCard-img" src={dndragons} alt="Project" />
        </div>
        <div className="ProjectCard-right-section">
          <h1 className="ProjectCard-description">
            An ASCII-Based Dungeons and Dragons game. This is my very first programming project written in C++. This
            game set the stage for my passions and led me to where I am today.
          </h1>
          <div className="ProjectCard-links">
            <LinkButton type="GitHub" url="https://www.google.com" />
            <LinkButton type="YouTube" url="https://www.google.com" />
            <LinkButton type="Apple" url="https://www.google.com" />
            <LinkButton type="PlayStore" url="https://www.google.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
