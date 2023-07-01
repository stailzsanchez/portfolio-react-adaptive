import "./Experience.css";

import { BsPatchCheckFill } from "react-icons/bs";
import React from "react";

const Experience = () => {
  const FRONT_END = "Frontend development";
  const BACK_END = "Backend development";

  const experiences = {
    [FRONT_END]: [
      { title: "JavaScript", lvl: "Experienced" },
      { title: "TypeScript", lvl: "Experienced" },
      { title: "React", lvl: "Experienced" },
      { title: "Redux", lvl: "Experienced" },
      { title: "REST API", lvl: "Experienced" },
      { title: "GraphQL", lvl: "Experienced" },
      { title: "MobX", lvl: "Basic" },
      { title: "HTML", lvl: "Experienced" },
      { title: "CSS", lvl: "Experienced" },
      { title: "SASS", lvl: "Experienced" },
      { title: "Antd", lvl: "Intermediate" },
      { title: "Material UI", lvl: "Intermediate" },
      { title: "Bootstrap", lvl: "Intermediate" },
    ],
    [BACK_END]: [
      { title: "GraphQL", lvl: "Intermediate" },
      { title: "Express", lvl: "Basic" },
      { title: "SQL", lvl: "Intermediate" },
      { title: "MongoDB", lvl: "Basic" },
      { title: "PostgreSQL", lvl: "Basic" },
      { title: "NodeJS", lvl: "Basic" },
      { title: "Express", lvl: "Basic" },
      { title: "Hasura", lvl: "Basic" },
      { title: "Docker", lvl: "Basic" },
      { title: "Python", lvl: "Basic" },
      { title: "C#", lvl: "Basic" },
      { title: "C++", lvl: "Basic" },
    ],
  };

  return (
    <section id="experience">
      <h5>The SKills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {Object.keys(experiences).map((experienceKey) => (
          <div key={experienceKey}>
            <h3>{experienceKey}</h3>
            <div className="experience__content">
              {experiences[experienceKey].map((skill, skillIndex) => (
                <article
                  className="experience__details"
                  key={experienceKey + skillIndex}
                >
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.title}</h4>
                    <small className="text-light">{skill.lvl}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
