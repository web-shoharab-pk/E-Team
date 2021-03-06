import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import logo from "../../Assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";

const Sidebar = ({ logOut }: any) => {
  const { userData } = useContext(UserDataContext);
  const [isCompanyAdmin, setIsCompanyAdmin] = useState(false)

  // for checking user
  useEffect(() => {

    if (userData.role === 'company-admin') {
      setIsCompanyAdmin(true);
    }
  }, [userData.role]);

  return (
    <div className="sidebar flex flex-col" id="sidebar">
      <div className="logo">
        <img src={logo} alt="E-Team" />
      </div>
      <aside className="text-base">
        {
          isCompanyAdmin &&
          <ul className="sidebar-menu p-4 font-normal">
            <li className="mx-auto">
              <NavLink activeClassName="active" to="/home">
                <i className="fas fa-home"></i> Overview
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/user-management">
                <i className="fas fa-users-cog"></i> User Management
              </NavLink>
            </li>
            <li>
              <NavLink
                    activeClassName="active" 
                    to="/department-management"
                    >
                <i className="fas fa-tasks"></i> Dept. Management
              </NavLink> 
            </li>

            <li>
              <NavLink activeClassName="active" to="/sprint-list">
                <i className="fas fa-clipboard-list"></i> Task Management
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/meetings">
                <i className="fas fa-clipboard-list"></i> Meetings
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/all-courses">
                <i className="fab fa-discourse"></i> Courses
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/add-course">
                <i className="fab fa-discourse"></i> Add Course
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/application-management">
                <i className="fas fa-tasks"></i> App. Management
              </NavLink>
            </li>
            <li className="text-center">
              <button className="py-1 px-4 text-white bg-red-500" onClick={logOut}>Logout</button>
            </li>
          </ul>
        }

        {
          !isCompanyAdmin &&
          <ul className="sidebar-menu p-4 font-normal">
            <li className="mx-auto">
              <NavLink activeClassName="active" to="/home">
                <i className="fas fa-home"></i> Overview
              </NavLink>
            </li>

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

            <li>
              <NavLink activeClassName="active" to="/all-department">
                <i className="fas fa-th-large"></i> All Department
              </NavLink>
            </li>

            <li>
              <NavLink activeClassName="active" to="/taskboard">
                <i className="fas fa-clipboard-list"></i> Task Management
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/all-courses">
                <i className="fab fa-discourse"></i> Courses
              </NavLink>
            </li>


            <li>
              <NavLink activeClassName="active" to="/applicationList">
                <i className="fas fa-th-large"></i> All Application
              </NavLink>
            </li>
            <li className="text-center">
              <button className="py-1 px-4 text-white bg-red-500" onClick={logOut}>Logout</button>
            </li>
          </ul>
        }
      </aside>
    </div>
  );
};

export default Sidebar;