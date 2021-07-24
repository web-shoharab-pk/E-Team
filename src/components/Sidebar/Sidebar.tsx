import React from 'react';
import './Sidebar.css';
import logo from '../../images/logo.svg';

const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col" id="sidebar">
            <div className="logo">
                <img src={logo} alt="E-Team" />
            </div>
            <aside>
                <ul className="sidebar-menu p-4 font-normal">
                    <li>
                        <a href="/overview"><i className="fas fa-list-alt"></i> Overview</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-users"></i> User Management</a>
                        <ul className="sidebar-sub-menu">
                            <li>
                                <a href="#" className="active"><i className="fas fa-user-plus"></i> Create User</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-list-ol"></i> User List</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-list-alt"></i> Overview</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-users"></i> User Management</a>
                        <ul className="sidebar-sub-menu">
                            <li>
                                <a href="#"><i className="fas fa-user-plus"></i> Create User</a>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-list-ol"></i> User List</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;