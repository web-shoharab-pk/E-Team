import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';

const SATopbar = () => {
    const { systemAdminData, setSystemAdminData } = useContext(SystemAdminDataContext);
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
                <p className="username">{systemAdminData.name}</p>
            </nav>
            <nav className="topbar without-sidebar px-4 text-2xl font-bold">
                <h2 className="">E-Team</h2>
                <button onClick={() => setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
            </nav>
        </div>
    );
};

export default SATopbar;