import React from 'react';
import Footer from '../MainHome/Footer/Footer';
import OurService from '../OurService/OurService';
import FinalNavbar from './Sections/FinalNavbar';
import HeroSection from './Sections/HeroSection';
import PartnerSection from './Sections/PartnerSection';

const NewHome = () => {
    return (
        <main>
            <FinalNavbar />
            <HeroSection />
            <OurService />
            <PartnerSection />
            <Footer />
            
        </main>
    );
};

export default NewHome;