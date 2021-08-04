import React from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import PricingArea from './PricingArea/PricingArea';

const MainHome = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <PricingArea />
            <Footer />
        </div>
    );
};

export default MainHome;