import CV from "./../../assets/Гореньков_Станислав_FrontendDev.pdf";
import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
