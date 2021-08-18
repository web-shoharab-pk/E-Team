import React, { useContext, useState } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../Contexts/UserDataContext';

const Topbar = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    // For handling sidebar show or hide
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebar = document.getElementById('sidebar');
    showSidebar ? sidebar?.classList.add('show') : sidebar?.classList.remove('show')


    return (
        <div className="topbar-header ">

            <nav className="topbar with-sidebar flex flex-row justify-between items-center px-4 text-lg">
                <div className="breadcrumb">
                    <Link to="#" className="font-medium">Home</Link> /
                    <Link to="#" className="font-medium">Dashboard</Link>
                </div>
                <p className="username">{userData.company_name}</p>
            </nav>
            <nav className="topbar without-sidebar flex flex-row justify-between items-center px-4 text-2xl font-bold">
                <h2 className="">E-Team</h2>
                <button onClick={() => setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
            </nav>
        </div>
    );
};

export default Topbar;