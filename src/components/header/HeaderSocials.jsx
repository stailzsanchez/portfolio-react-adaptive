import './header.css'

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { FaViber } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import React from 'react'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" targer="_blank"><BsLinkedin /></a>
            <a href="https://github.com" targer="_blank"><BsGithub /></a>
            <a href="https://t.me/MrDobryak" targer="_blank"> <BsTelegram /></a>
            {/* <a href="https://vk.com/stailzsanchez" targer="_blank"></a> */}
            <a href="viber://chat?number=%2B375292005818" targer="_blank"><FaViber /></a>
            <a href="https://linkedin.com" targer="_blank"><IoLogoWhatsapp /></a>
        </div>
    )
}

export default HeaderSocials