import About from './components/About/About'
import Contacts from './components/contact/Contacts';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio';
import React from 'react'
import Services from './components/services/Services';
import Testemonials from './components/testemonials/Testemonials';

export default function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Testemonials/>
            <Contacts/>
            <Footer/>
        </>
    )
}
