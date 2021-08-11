import React from 'react';
import logo from "../../../Assets/images/logo.svg";
import { Link } from "react-router-dom";

const SASidebar = () => {
    return (
        <div className="sidebar flex flex-col" id="sa-sidebar">
            <div className="logo">
                <img src={logo} alt="E-Team" />
            </div>
            <aside>
                <ul className="sidebar-menu p-4 font-normal">
                    <li>
                        <Link to="/system-admin/">
                           Overview
                        </Link>
                        <ul className="sidebar-sub-menu">
                            <li>
                                <Link to="/system-admin/add">
                                    Add System Admin
                                </Link>
                            </li>
                            <li>
                                <Link to="/system-admin/view-all" className="active">
                                    All System Admins
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="#">
                            Company Management
                        </Link>
                        <ul className="sidebar-sub-menu">
                            <li>
                                <Link to="/system-admin/company-approval" className="">
                                    Approve Company
                                </Link>
                            </li>
                            <li>
                                <Link to="/all-company">All Company</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default SASidebar;