import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExitButton from 'components/ExitButton';
import HintBox from 'components/HintBox';
import dndragons from 'assets/dndragons.gif';
import gameengine from 'assets/gameengine.gif';
import jumpyjoe from 'assets/jumpyjoe.gif';
import shapefall from 'assets/shapefall.gif';
import thealgoview from 'assets/thealgoview.gif';
import dreamtrade from 'assets/dreamtrade.gif';
import khanacademy from 'assets/khanacademy.jpg';
import LaptopCoder from './components/LaptopCoder';
import ProjectCard from './components/ProjectCard';
import LinkButton from './components/LinkButton';
import './SWEPage.css';

const SWEPage = (): JSX.Element => {
  const [isShowingContent, setIsShowingContent] = useState(false);
  const history = useHistory();

  const exitPage = () => {
    history.goBack();
  };

  const showContent = () => {
    setIsShowingContent(true);
  };

  return (
    <div className="SWEPage">
      <ExitButton onClick={exitPage} />
      <h1 className="SWEPage-title">Rising</h1>
      <h1 className="SWEPage-subtitle">Software Engineer</h1>
      {!isShowingContent && (
        <div className="SWEPage-pregame">
          <LaptopCoder onComplete={showContent} />
          <HintBox>
            <ol>
              <li>Click &quot;Run Code&quot;</li>
              <li>Click &quot;View Content&quot;</li>
            </ol>
          </HintBox>
        </div>
      )}
      {isShowingContent && (
        <div className="SWEPage-content">
          <h1 className="SWEPage-introduction">
            Throughout my journey of becoming a great software engineer, I have learned about many programming
            languages, frameworks, and technologies. A large part of diving into this field is building side projects to
            develop, grow, and showcase one&apos;s skills. Below are all of my software engineering side projects. Each
            project displays a step of progress in this ongoing journey.
          </h1>
          <ProjectCard
            title="DNDragons"
            image={dndragons}
            links={[<LinkButton type="GitHub" url="https://github.com/RivasCVA/DNDragons" />]}
          >
            An ASCII-Based Dungeons and Dragons game. This is my very first programming project written in C++. I taught
            myself a programming langauge while in middle school through YouTube tutorials. This game brought out my
            passion for programming and set the stage for my future career.
          </ProjectCard>
          <ProjectCard
            title="3D Game Engine"
            image={gameengine}
            links={[
              <LinkButton type="GitHub" url="https://github.com/RivasCVA/3DGameEngine" />,
              <LinkButton type="YouTube" url="https://www.youtube.com/watch?v=RJupnVmnqcQ" />,
            ]}
          >
            A Java 3D Game Engine. Being a fan of video games, I decided to develop my own game engine to learn how many
            of my favorite games were developed. In this project, I dived into the complicated world of graphics
            programming. This included learning about lighting, shadows, collision detection, skyboxes, and more.
          </ProjectCard>
          <ProjectCard
            title="Jumpy Joe"
            image={jumpyjoe}
            links={[
              <LinkButton type="GitHub" url="https://github.com/RivasCVA/JumpyJoe" />,
              <LinkButton type="YouTube" url="https://www.youtube.com/watch?v=0gJ5QLE--xI&feature=youtu.be" />,
            ]}
          >
            A Platformer Shooting Game. This was my first released 2D game. This game taught me about 2D collision
            detection, sprite animations, basic artifical intelligence, and more. In this project, I learned to use a
            game engine (Greenfoot IDE) to speed up the development process.
          </ProjectCard>
          <ProjectCard
            title="Shape Fall"
            image={shapefall}
            links={[
              <LinkButton
                type="PlayStore"
                url="https://play.google.com/store/apps/details?id=com.MaxHatPro.ShapeFall"
              />,
              <LinkButton type="GitHub" url="https://github.com/RivasCVA/ShapeFall" />,
              <LinkButton type="YouTube" url="https://www.youtube.com/watch?v=llMoeFOfpPc" />,
            ]}
          >
            An Android Puzzle Game. In this project, I dived into mobile development. Using the Unity game engine, I
            developed a 2D game that could run on Android phones. This game was published on the Google Play Store, and
            I learned about the process of publishing an app into the mobile market. This includes following privacy
            policies, government laws, and efficiency standards.
          </ProjectCard>
          <ProjectCard
            title="The Algorithm Viewer"
            image={thealgoview}
            links={[
              <LinkButton type="Link" url="http://thealgoview.com/index.html" />,
              <LinkButton type="GitHub" url="https://github.com/RivasCVA/TheAlgoView" />,
            ]}
          >
            A Coding Algorithm Visualizer. This was my first attempt at building a web app from scratch using the
            elemetary languages of HTML, CSS, and JavaScript. At the same time, I strengthened my knowledge in
            algorithms and data structures, an important skill that all successful software engineers must know.
          </ProjectCard>
          <ProjectCard
            title="Dream Trade"
            image={dreamtrade}
            links={[
              <LinkButton type="Apple" url="https://apps.apple.com/us/app/id1517485993" />,
              <LinkButton type="YouTube" url="https://www.youtube.com/watch?v=1NCcym9eUtU&feature=youtu.be" />,
            ]}
          >
            A Stock Market Simulator iOS App. This was my first large project intended to earn revenue. I built an
            intuitive user interface and implemented features that outperformed similar apps. I learned to integrate
            advertisement into the project to earn money from the app.
          </ProjectCard>
          <h1 className="SWEPage-trantitle">The next step.</h1>
          <h1 className="SWEPage-introduction" style={{ textAlign: 'center' }}>
            Internships are a big step for growing as a software engineer.
          </h1>
          <ProjectCard
            title="Internship - Khan Academy"
            image={khanacademy}
            links={[<LinkButton type="Company" url="https://www.khanacademy.org" />]}
          >
            I am joining the Khan Academy team as a 2021 Software Engineer Intern. I will help grow the online
            educational platform to deliver world-class tools to students from around the world. At the same time, I
            will be able to grow my skills as a rising software engineer. I will meet experienced software engineers to
            connect and learn from them.
          </ProjectCard>
        </div>
      )}
    </div>
  );
};

export default SWEPage;
