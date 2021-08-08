import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/images/logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col" id="sidebar">
      <div className="logo">
        <img src={logo} alt="E-Team" />
      </div>
      <aside>
        <ul className="sidebar-menu p-4 font-normal">
          <li>
            <Link to="#">
               User Management
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link to="/create-user" className="active">
                  Create User
                </Link>
              </li>
              <li>
                <Link to="/all-user">
                   All User
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              Departments Management
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link to="/create-department" className="">
                  Create Department
                </Link>
              </li>
              <li>
                <Link to="/all-department">All Department</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
               All Team 
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link to="/" className="">
                   Core Team
                </Link>
              </li>
              <li>
                <Link to="#">
                   Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="#">
                   Content Team
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to="/all-courses">
              Courses
            </Link>
          </li>

          <li>
            <Link to="#">
               Applications Management
            </Link>
            <ul className="sidebar-sub-menu">
              <li>
                <Link to="/inputApplication" className="">
                   Input Application
                </Link>
              </li>
              <li>
                <Link to="/applicationList">
                  All Application
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
