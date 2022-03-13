import CV from './../../assets/CV.pdf'
import React from 'react'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV}
                download
                className='btn'>Dowload CV</a>
            <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
