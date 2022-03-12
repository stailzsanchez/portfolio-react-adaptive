import './Services.css'

import {FaCheck} from 'react-icons/fa'
import React from 'react'

const Services = () => {
    const UI_UX = 'UI/UX Design'
    const WEB_DEV = 'Web Development'
    const CONTENT_CREATION = 'Content Creation'

    const services = {
        [UI_UX]: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ],
        [WEB_DEV]: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ],
        [CONTENT_CREATION]: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        ],
    }
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                {
                    Object.keys(services).map((serviceKey) => 
                        <article className='service'>
                            <div className="service__head">
                                <h3>{serviceKey}</h3>
                            </div>

                            <ul className='service__list'>
                                {
                                    services[serviceKey].map(itemText => 
                                        <li>
                                            <FaCheck className='service__list-icon'/>
                                            <p>{itemText}</p>
                                        </li>
                                    )
                                }
                            </ul>
                        </article>
                    )
                }
                
            </div>

        </section>
    )
}

export default Services