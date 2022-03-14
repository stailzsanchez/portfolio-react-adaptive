import './Contacts.css'

import { useRef, useState } from 'react';

import {BsTelegram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineMailOutline} from 'react-icons/md'
import React from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {

    const form = useRef();

    const contactsList = [
        {
            title: 'Email', 
            href: 'mailto:stailzsanchez@gmail.com', 
            textLink:'Send a message', 
            icon: MdOutlineMailOutline
        },
        {
            title: 'Telegram', 
            href: 'https://t.me/stailztg', 
            textLink:'Send a message', 
            icon: BsTelegram
        },
        {
            title: 'Whatsapp', 
            href: 'https://api.whatsapp.com/send?phone=375298195024', 
            textLink:'Send a message',
            icon: BsWhatsapp
        },
    ]

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6ku1p52', 'template_c1090g8', form.current, 'EA4QtXPQqaMOivzya')
          .then((result) => {
              e.target.reset();
          }, (error) => {
              console.log(error)
          });
      };

    return (
        <section id='contacts'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    {
                        contactsList.map((contact, contactIndex) =>
                            <article className="contact__option" key={contactIndex}>
                                <contact.icon className='contact__option-icon'/>
                                <h4>{contact.title}</h4>
                                <a href={contact.href} target='_blank'>{contact.textLink}</a>
                            </article>
                        )
                    }
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="email" name="email" placeholder='Your Email' required/>
                    <textarea name="message" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts