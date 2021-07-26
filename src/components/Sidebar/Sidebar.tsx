import React from 'react';
import './Sidebar.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar flex flex-col" id="sidebar">
            <div className="logo">
                <img src={logo} alt="E-Team" />
            </div>
            <aside>
                <ul className="sidebar-menu p-4 font-normal">
                    <li>
                        <Link to="/overview"><i className="fas fa-list-alt"></i> Overview</Link>
                    </li>
                    <li>
                        <Link to="#"><i className="fas fa-users"></i> User Management</Link>
                        <ul className="sidebar-sub-menu">
                            <li>
                                <Link to="#" className="active"><i className="fas fa-user-plus"></i> Create User</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fas fa-list-ol"></i> User List</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#"><i className="fas fa-list-alt"></i> Overview</Link>
                    </li>
                    <li>
                        <Link to="#"><i className="fas fa-users"></i> User Management</Link>
                        <ul className="sidebar-sub-menu">
                            <li>
                                <Link to="#"><i className="fas fa-user-plus"></i> Create User</Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fas fa-list-ol"></i> User List</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;