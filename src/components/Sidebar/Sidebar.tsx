import React, { useContext, useState } from "react";
import "./Sidebar.css";
import logo from "../../Assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ConpanyDataContext } from "../../Contexts/UserDataContext";
import { removeDataFromLS } from "../Authentication/loginmanager";

const Sidebar = () => {
  const { companyData, setCompanyData } = useContext(ConpanyDataContext);
  const [isLogOut, setIsLogOut] = useState(false);
  const logOut = () => {
    localStorage.removeItem('token');
    setCompanyData({
      isSignedIn: false,
      co_id: "",
      id: "",
      company_name: "",
      email: "",
      role: "",
      created_at: "",
      updated_at: "",
    });
    setIsLogOut(true);
  }
  return (
    <div className="sidebar flex flex-col" id="sidebar">
      <div className="logo">
        <img src={logo} alt="E-Team" />
      </div>
      <aside className="text-base">
        <ul className="sidebar-menu p-4 font-normal">
          <li className="mx-auto">
            <Link to="/home">
              <i className="fas fa-home"></i> Overview
            </Link>
          </li>

          <li>
            <Link to="#">
              <i className="fas fa-users-cog"></i> User Management
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link to="/create-user">
                  <i className="fas fa-user-plus"></i> Create User
                </Link>
              </li>
              <li>
                <Link to="/all-user">
                  <i className="fas fa-users"></i> All User
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className="fas fa-tasks"></i> Dept. Management
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link
                  to="/create-department"
                  className=""
                >
                  <i className="fas fa-plus-circle"></i> Create Department
                </Link>
              </li>
              <li>
                <Link to="/all-department">
                  <i className="fas fa-th-large"></i> All Department
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/all-courses">
              <i className="fab fa-discourse"></i> Courses
            </Link>
          </li>

          <li>
            <Link to="#">
              <i className="fas fa-tasks"></i> App. Management
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link to="/inputApplication">
                  <i className="fas fa-keyboard"></i> Input Application
                </Link>
              </li>
              <li>
                <Link to="/applicationList">
                  <i className="fas fa-th-large"></i> All Application
                </Link>
              </li>
            </ul>
          </li>
          <li className="text-center">
            <button className="py-1 px-4 text-white bg-red-500" onClick={logOut}>Logout</button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
