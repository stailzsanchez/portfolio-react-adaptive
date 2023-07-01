import "./header.css";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import React from "react";

const HeaderSocials = () => {
  const ICON_SIZE = 25;
  const socials = [
    { link: "https://linkedin.com", icon: <BsLinkedin size={ICON_SIZE} /> },
    {
      link: "https://github.com/stailzgit",
      icon: <BsGithub size={ICON_SIZE} />,
    },
    { link: "https://t.me/MrDobryak", icon: <BsTelegram size={ICON_SIZE} /> },
    {
      link: "viber://chat?number=%2B375298195024",
      icon: <FaViber size={ICON_SIZE} />,
    },
    {
      link: "https://api.whatsapp.com/send?phone=375298195024",
      icon: <IoLogoWhatsapp size={ICON_SIZE} />,
    },
  ];

  return (
    <div className="header__socials">
      {socials.map((item) => (
        <a
          className="header__social-item"
          href={item.link}
          target="_blank"
          rel="noreferrer"
          key={item.link}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
