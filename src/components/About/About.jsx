import './About.css';

import { BsFolderCheck } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { GiGiftOfKnowledge } from 'react-icons/gi';
import ME from '../../assets/about__img-human.jpg';
import React from 'react';

const About = () => {
  const listArticles = [
    {
      title: 'Experience',
      text: '2 years web dev',
      icon: <FaAward className="about__icon" />,
    },
    {
      title: 'Prof Education',
      text: '4 years',
      icon: <GiGiftOfKnowledge className="about__icon" />,
    },
    {
      title: 'Pet Projects',
      text: '10+ Completed',
      icon: <BsFolderCheck className="about__icon" />,
    },
  ];

  const workExp = `
    - Development of applications on React
    - Creation of SPA from layouts in Adobe Xd/Figma/PSD
    - Work remote
    - Stack: js, ts, react, graphql, redux-toolkit, context, jest, github, hasura, postgresql, express.
    - Working in a team with 4 front-end developers, 2 back-end developers, a designer and a PM.
    - Issues in Jira, calls every day`;

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {listArticles.map((item, itemIndex) => (
              <article className="about__card" key={itemIndex}>
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.text}</small>
              </article>
            ))}
          </div>

          <div className="about__exp-items">
            {workExp.split('\n').map((itemExp) => (
              <p className="about__exp-item" key={itemExp}>
                {itemExp}
              </p>
            ))}
          </div>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
