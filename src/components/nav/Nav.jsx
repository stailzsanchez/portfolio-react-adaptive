// import './Nav.css'

// import React, { useState } from 'react'

// import { AiOutlineHome } from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'
// import { BiMessageDetail } from 'react-icons/bi'
// import { BsBook } from 'react-icons/bs'
// import { RiServiceLine } from 'react-icons/ri'

// const Nav = () => {
//     const [ activeNav, setActiveNav ] = useState('#')

//     const onNavLinkClick = (e) => {
//         setActiveNav(e.currentTarget.href)
//         alert(activeNav)
//     }
//     return (
//         <nav>
//             <a href="#"
//                className={
//                    activeNav === '#' ? 'active' : ''
//                }
//                onClick={
//                    () => setActiveNav('#')
//                }>
//                 <AiOutlineHome/>
//             </a>
//             <a href="#about"
//                className={
//                    activeNav === '#about' ? 'active' : ''
//                }
//                onClick={
//                    () => setActiveNav('#about')
//                }>
//                 <AiOutlineUser/>
//             </a>
//             <a href="#experience"
//                className={
//                    activeNav === '#experience' ? 'active' : ''
//                }
//                onClick={
//                    () => setActiveNav('#experience')
//                }><BsBook/>
//             </a>
//             <a href="#services"
//                className={
//                    activeNav === '#services' ? 'active' : ''
//                }
//                onClick={
//                    () => setActiveNav('#services')
//                }><RiServiceLine/>
//             </a>
//             <a href="#contacts"
//                className={
//                    activeNav === '#contacts' ? 'active' : ''
//                }
//                onClick={
//                    () => setActiveNav('#contacts')
//                }><BiMessageDetail/>
//             </a>
//         </nav>
//     )
// }

// export default Nav

import './Nav.css'

import React, { useState } from 'react'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
    const [ activeNav, setActiveNav ] = useState('#')

    const onNavLinkClick = (e) => {
        setActiveNav(e.currentTarget.href)
        alert(activeNav)
    }

    const list = [
        {link: '#', component: <AiOutlineHome/>}, {link: '#about', component: <AiOutlineUser/>},
        {link: '#experience', component: <BsBook/>},
        {link: '#services', component: <RiServiceLine/>},
        {link: '#contacts', component: <BiMessageDetail/>},
    ]

    return (
        <nav> {
            list.map(item =>
                <a href={ item.link }
                   className={ item.link === activeNav ? "active" : '' }
                   onClick={ () => setActiveNav(item.link) }
                >
                { item.component }
                </a>
            )
        } </nav>
    )
}

export default Nav
