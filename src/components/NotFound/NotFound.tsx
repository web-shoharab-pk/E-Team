import React from 'react';
import Footer from '../MainHome/Footer/Footer';
import Navbar from '../MainHome/Navbar/Navbar';

const NotFound = () => {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col justify-center items-center my-24">
            <i className="fas fa-frown text-4xl mb-3"></i>
            <h2 className="text-2xl">Page Not Found</h2>
        </div>
        <Footer/>
        </>
    );
};

export default NotFound;