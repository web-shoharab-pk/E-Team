import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';

const SATopbar = ({logOut}:any) => {
    const { systemAdminData, setSystemAdminData } = useContext(SystemAdminDataContext);

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

    const [showSidebar, setShowSidebar] = useState(false);
    const sidebar = document.getElementById('sa-sidebar');
    showSidebar ? sidebar?.classList.add('show') : sidebar?.classList.remove('show')
    return (
        <div className="topbar-header ">
            <nav className="topbar with-sidebar px-4 text-lg">
                <div className="breadcrumb">
                    <Link to="#" className="font-medium">Home</Link> /
                    <Link to="#" className="font-medium">Dashboard</Link>
                </div>
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="username relative">
                    {
                        systemAdminData.name && systemAdminData.name
                    }
                    {
                        !systemAdminData.name &&
                        <span>Profile</span>
                    }
                    <div id="profile-dropdown" className="hidden absolute right-5 top-10 mt-2 py-2 w-48 bg-white rounded-md border shadow-xl z-20">
                        <Link to="/system-admin/view-sa-profile" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white">
                            View Profile
                        </Link>
                        <Link to="/system-admin/login" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-400 hover:text-white" onClick={logOut}>Logout</Link>
                    </div>
                </button>
            </nav>
            <nav className="topbar without-sidebar px-4 text-2xl font-bold">
                <h2 className="">E-Team</h2>
                <button onClick={() => setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
            </nav>
        </div>
    );
};

export default SATopbar;