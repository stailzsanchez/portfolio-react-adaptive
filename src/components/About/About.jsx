import './About.css'

import {BsFolderCheck} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import ME from '../../assets/about__img-human.jpg'
import React from 'react'

const About = () => {
    const listArticles = [
        { title: 'Experience', text: '1+ Year Working', component: <FaAward className='about__icon'/>},
        { title: 'Clients', text: '200+ Worldwide', component: <FiUsers className='about__icon'/>},
        { title: 'Projects', text: '80+ Completed', component: <BsFolderCheck className='about__icon'/>},

    ]

    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <br />

            <div className='container about__container'>
                
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        {
                            listArticles.map(item => 
                                
                                    <article className='about__card'>
                                        {item.component}
                                        <h5>{item.title}</h5>
                                        <small>{item.text}</small>
                                    </article>   
                            )
                        }
                    </div>


                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                        quia aliquam expedita deserunt saepe quidem amet quam eum accusantium 
                        hic molestias quod et qui dolores vel cupiditate non error nesciunt?
                    </p>   

                    <a href="#contacts" className='btn btn-primary'>Let's Talk</a>           
                </div>
            </div>
        </section>
    )
}

export default About