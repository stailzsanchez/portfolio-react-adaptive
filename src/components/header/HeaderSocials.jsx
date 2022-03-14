import './header.css'

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import React from 'react'

const HeaderSocials = () => {
    const iconSize = 25
    const socials = [
        { link: 'https://linkedin.com', icon: <BsLinkedin size={iconSize} />},
        { link: 'https://github.com/stailzgit', icon: <BsGithub size={iconSize} />},
        { link: 'https://t.me/MrDobryak', icon: <BsTelegram size={iconSize} />},
        { link: 'viber://chat?number=%2B375298195024', icon: <FaViber size={iconSize} />},
        { link: 'linkedin.com/in/stanislav-gorenkov-aa303720b', icon: <IoLogoWhatsapp size={iconSize} />},
    ]

    return (
        <div className='header__socials'>
            {
                socials.map(item => 
                    <a 
                        className='header__social-item'
                        href={item.link} 
                        target="_blank"
                    >
                        {item.icon}
                    </a>
                )
            }
        </div>
    )
}

export default HeaderSocials