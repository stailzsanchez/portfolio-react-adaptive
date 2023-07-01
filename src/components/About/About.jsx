import "./About.css";

import { BsFolderCheck } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import ME from "../../assets/about__img-human.jpg";
import React from "react";

const About = () => {
  const listArticles = [
    {
      title: "Experience",
      text: "2 years web dev",
      icon: <FaAward className="about__icon" />,
    },
    {
      title: "Prof Aducation",
      text: "4 years",
      icon: <GiGiftOfKnowledge className="about__icon" />,
    },
    {
      title: "Pet Projects",
      text: "10+ Completed",
      icon: <BsFolderCheck className="about__icon" />,
    },
  ];

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <br />

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
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

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
            quia aliquam expedita deserunt saepe quidem amet quam eum
            accusantium hic molestias quod et qui dolores vel cupiditate non
            error nesciunt?
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
