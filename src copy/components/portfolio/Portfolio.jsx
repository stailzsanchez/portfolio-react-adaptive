import './Portfolio.css'

import IMG_VK from '../../assets/portfolio/vk.png'
import React from 'react'

const Portfolio = () => {
    const portfolioList = [
        {title: 'This is a portfolio item title', linkProject:'#', linkDemo:'#', img: IMG_VK},
        {title: 'This is a portfolio item title', linkProject:'#', linkDemo:'#', img: IMG_VK},
        {title: 'This is a portfolio item title', linkProject:'#', linkDemo:'#', img: IMG_VK},
        {title: 'This is a portfolio item title', linkProject:'#', linkDemo:'#', img: IMG_VK},
        {title: 'This is a portfolio item title', linkProject:'#', linkDemo:'#', img: IMG_VK},
        {title: 'This is a portfolio item title', linkProject:'#', linkDemo:'#', img: IMG_VK},
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
