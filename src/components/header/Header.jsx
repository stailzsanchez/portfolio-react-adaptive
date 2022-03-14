import './header.css';

import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from './../../assets/png-human1.png';
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Stanislav Gorenkov</h1>
                <h5 className="text-light">Front-end Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME}
                        alt="me"/>
                </div>
                <a href="#contacts" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
