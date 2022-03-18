import './Portfolio.css'

import BUSINESS_CLOSURES from '../../assets/portfolio/business_closures.png'
import CAR_SHARING from '../../assets/portfolio/car_sharing.png'
import IMG_VK from '../../assets/portfolio/vk.png'
import RN_TODO from '../../assets/portfolio/rn_todo.jpg'
import React from 'react'

const Portfolio = () => {
    const portfolioList = [
        {
            title: 'Car sharing adaptive lending', 
            linkProject:'https://github.com/stailzgit/car_sharing', 
            linkDemo:'https://stailzgit.github.io/car_sharing/',
            img: CAR_SHARING
        },
        {
            title: 'Business clousures lending',
            linkProject:'https://github.com/stailzgit/business_closures', 
            linkDemo:'https://stailzgit.github.io/business_closures/',
            img: BUSINESS_CLOSURES
        },
        {
            title: 'Todolist App React Native', 
            linkProject:'https://github.com/stailzgit/rn_todolist', 
            linkDemo:'https://expo.dev/@stailzsanchez/todoList', 
            img: RN_TODO
        },

    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    portfolioList.map((item, itemKey) => 
                        <article key={itemKey} className='portfolio__item'>
                            
                            <div className="portfolio__item-image">
                                <img src={item.img}  alt="" />
                            </div>
                            
                            <h3>{item.title}</h3>

                            <div className="portfolio__item-cta">
                                <a href={item.linkProject} className='btn' target='_blank'>Github</a>
                                <a href={item.linkDemo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>

                        </article>
                    )
                }
            </div> 
        </section>
    )
}

export default Portfolio
