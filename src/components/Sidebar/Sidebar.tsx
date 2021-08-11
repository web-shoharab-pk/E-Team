import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col" id="sidebar">
      <div className="logo">
        <img src={logo} alt="E-Team" />
      </div>
      <aside className="text-xl">
        <ul className="sidebar-menu p-4 font-normal">
          <li className="mx-auto">
          <NavLink exact to="/">
          <i className="fas fa-home"></i> Overview
          </NavLink>
          </li>
          
          <li>
            <NavLink activeClassName="active" to="#">
              <i className="fas fa-users-cog"></i> User Management
            </NavLink>
            <ul className="sidebar-sub-menu">
              <li>
                <NavLink activeClassName="active" to="/create-user">
                  <i className="fas fa-user-plus"></i> Create User
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/all-user">
                  <i className="fas fa-users"></i> All User
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink activeClassName="active" to="#">
              <i className="fas fa-tasks"></i> Departments Management
            </NavLink>
            <ul className="sidebar-sub-menu">
              <li>
                <NavLink
                  activeClassName="active"
                  to="/create-department"
                  className=""
                >
                  <i className="fas fa-plus-circle"></i> Create Department
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/all-department">
                  <i className="fas fa-th-large"></i> All Department
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink activeClassName="active" to="#">
              <i className="fas fa-th-large"></i> All Team
            </NavLink>
            <ul className="sidebar-sub-menu">
              <li>
                <NavLink activeClassName="active" to="#" className="">
                  Core Team
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/hello">
                  <i className="fas fa-poll"></i> Digital Marketing
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/#">
                  <i className="fas fa-sitemap"></i> Content Team
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink activeClassName="active" to="/all-courses">
              <i className="fab fa-discourse"></i> Courses
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName="active" to="/#">
              <i className="fas fa-tasks"></i> Applications Management
            </NavLink>
            <ul className="sidebar-sub-menu">
              <li>
                <NavLink activeClassName="active" to="/inputApplication">
                  <i className="fas fa-keyboard"></i> Input Application
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/applicationList">
                  <i className="fas fa-th-large"></i> All Application
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
