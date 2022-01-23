import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import HowItWorks from './HowItWorks';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from  './Contact';
import Footer from  './Footer';

const Home = () => {
    return (
     <>
     <NavBar/>
     <Header/>
     <HowItWorks/>
     <AboutUs/>
     <Services/>
     <Contact/>
     <Footer/>
     </>
    );
}


export default Home;