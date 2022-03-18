import './Nav.css'

import React, { useState } from 'react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
    const [ activeNav, setActiveNav ] = useState('#')

    const list = [
        {link: '#', component: <AiOutlineHome/>},
        {link: '#about', component: <AiOutlineUser/>},
        {link: '#experience', component: <BsBook/>},
        // {link: '#services', component: <RiServiceLine/>},
        {link: '#contacts', component: <BiMessageDetail/>},
    ]

    return (
        <nav> {
            list.map((item, itemIndex) =>
                <a href={ item.link }
                   className={ item.link === activeNav ? "active" : '' }
                   onClick={ () => setActiveNav(item.link) }
                   key={itemIndex}
                >
                { item.component }
                </a>
            )
        } </nav>
    )
}

export default Nav
