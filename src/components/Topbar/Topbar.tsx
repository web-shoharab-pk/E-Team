import React,{ useState } from 'react';
import './Topbar.css';

const Topbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebar = document.getElementById('sidebar');
    showSidebar ? sidebar?.classList.add('show') : sidebar?.classList.remove('show')
    return (
        <div className="topbar ">
            <nav className="navbar hidden flex-row justify-between items-center px-4 text-lg  md:flex">
                <div className="breadcrumb">
                    <a href="#" className="font-medium">Home</a> /
                    <a href="#" className="font-medium">Dashboard</a>
                </div>
                <p className="username">Piash</p>
            </nav>
            <nav className="navbar without-sidebar flex flex-row justify-between items-center px-4 text-2xl font-bold md:hidden">
                <h2 className="">E-Team</h2>
                <button onClick={()=>setShowSidebar(!showSidebar)}><i className="fas fa-bars"></i></button>
            </nav>
        </div>
    );
};

export default Topbar;