import React, { useContext, useState } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../Contexts/UserDataContext';

const Topbar = ({logOut}:any) => {
    const { userData } = useContext(UserDataContext);

    // For handling dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = document.getElementById('profile-dropdown');
    if (showDropdown) {
        dropdown?.classList.remove('hidden')
        dropdown?.classList.add('block')
    } else {
        dropdown?.classList.remove('block')
        dropdown?.classList.add('hidden')
    }

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
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="username relative">
                    {
                        userData.name && userData.name
                    }
                    {
                        !userData.name && <span>Profile</span>
                    }

                    <div id="profile-dropdown" className="hidden absolute right-5 top-10 mt-2 py-2 w-48 bg-white rounded-md border shadow-xl z-20">
                        <Link to="/company-profile" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white">
                            Company Profile
                        </Link>
                        <Link to="/view-profile" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white">
                            View Profile
                        </Link>
                        <Link to="/login" 
                        onClick={logOut}
                        className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white">
                            Logout
                        </Link>
                    </div>
                </button>

            </nav >
            <nav className="topbar without-sidebar flex flex-row justify-between items-center px-4 text-2xl font-bold">
                <h2 className="">E-Team</h2>
                <button onClick={() => setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
            </nav>
        </div >
    );
};

export default Topbar;