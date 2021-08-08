import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pl-3 text-xl"> 
                    <span className="text-blue-500 mr-2">E-Team </span> Manage
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to="/about" className="mr-5 hover:text-gray-900">About</Link>
                    <Link to="/team" className="mr-5 hover:text-gray-900">Team</Link>
                    <Link to="/login" className="mr-5 inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
                        Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;