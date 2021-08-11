import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SATopbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebar = document.getElementById('sa-sidebar');
    showSidebar ? sidebar?.classList.add('show') : sidebar?.classList.remove('show')
    return (
        <div className="topbar ">
            <nav className="navbar with-sidebar flex flex-row justify-between items-center px-4 text-lg">
                <div className="breadcrumb">
                    <Link to="#" className="font-medium">Home</Link> /
                    <Link to="#" className="font-medium">Dashboard</Link>
                </div>
                <p className="username">Piash</p>
            </nav>
            <nav className="navbar without-sidebar flex flex-row justify-between items-center px-4 text-2xl font-bold">
                <h2 className="">E-Team</h2>
                <button onClick={() => setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
            </nav>
        </div>
    );
};

export default SATopbar;