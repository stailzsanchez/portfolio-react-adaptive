import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <a href="#" className="footer__logo">
        Portfolio
      </a> */}

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          {/* <li><a href="#services">Services</a></li> */}
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testemonials">Testemonials</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>

        <div className="footer__copyright">
          <small>&copy; Portfilio. All right reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
