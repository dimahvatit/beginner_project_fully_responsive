import React, { useState } from 'react';
import Sidebar from './../components/Sidebar/Sidebar';
import Navbar from './../components/Navbar/Navbar';
import Intro from './../components/Intro/Intro';
import InfoSection from '../components/InfoSection/Info';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/ServiceSection/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <Intro/>
         <InfoSection {...homeObjOne}/>
         <InfoSection {...homeObjTwo}/>
         <Services></Services>
         <InfoSection {...homeObjThree}/>
         <Footer />
        </>
    )
}

export default Home;
