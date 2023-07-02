import './header.css';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import IAmText from './iAmText';
import ME from './../../assets/png-human1.png';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Portfolio</h2>
        <IAmText />
        <HeaderSocials />
        <div className="wrap__scroll-down">
          <a href="#contacts" className="scroll-down">
            <div className="inner__scroll-down">
              <marquee behavior="alternate" direction="left" scrollamount="3">
                Scroll Down
              </marquee>
              &#8594;
            </div>
          </a>
        </div>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
