import React, { useState } from 'react';
import './Topbar.css';
import {Link} from 'react-router-dom';

const Topbar = () => {
    // For handling sidebar show or hide
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebar = document.getElementById('sidebar');
    showSidebar ? sidebar?.classList.add('show') : sidebar?.classList.remove('show')

    // For handling topbar basis of screen width
    const [screenWidth, setScreenWidth] = useState(0)
    const handleScreenWidth = () => {
        const tempWidth = window.innerWidth;
        setScreenWidth(tempWidth)
    }
    // updating 
    window.addEventListener('load', handleScreenWidth)
    window.addEventListener('resize', handleScreenWidth)

    return (
        <div className="topbar ">
            {
                screenWidth > 767 &&
                <nav className="navbar flex flex-row justify-between items-center px-4 text-lg">
                    <div className="breadcrumb">
                        <a href="#" className="font-medium">Home</a> /
                        <a href="#" className="font-medium">Dashboard</a>
                    </div>
                    <p className="username">Piash</p>
                </nav>
            }
            {
                screenWidth < 768 &&
                <nav className="navbar without-sidebar flex flex-row justify-between items-center px-4 text-2xl font-bold">
                    <h2 className="">E-Team</h2>
                    <button onClick={() => setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
                </nav>
            }
        </div>
    );
};

export default Topbar;