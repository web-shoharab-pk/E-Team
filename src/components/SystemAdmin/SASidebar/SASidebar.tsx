import React, { useContext, useState } from 'react';
import logo from "../../../Assets/images/logo.svg";
import { Link, Redirect } from "react-router-dom";
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';

const SASidebar = () => {
    const { systemAdminData, setSystemAdminData } = useContext(SystemAdminDataContext);
    const [isLogOut, setIsLogOut] = useState(false);
    const logOut = () => {
        localStorage.removeItem('token');
        setSystemAdminData({
            isSignedIn: false,
            id: "",
            name: "",
            email: "",
            role: "system-admin",
            created_at: "",
            updated_at: "",
        });
        setIsLogOut(true);
    }
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
                    <li className="text-center">
                        <button className="py-1 px-4 text-white bg-red-500" onClick={logOut}>Logout</button>
                    </li>
                </ul>
            </aside>
            {
                isLogOut &&
                <Redirect to="/system-admin/login" />
            }
        </div>
    );
};

export default SASidebar;