import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/images/E-Team-logo.png";
import { getDataFromLS } from "../../Authentication/loginmanager";
import "./Navbar.css";



const FinalNavbar = () => {
  const [userType, setUserType] = useState('')
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu) {
    document.getElementById("navbar-nav")?.classList.add("active");
  } else {
    document.getElementById("navbar-nav")?.classList.remove("active");
  }

  // for checking user
  useEffect(() => {
    checkIsLoginUser('token')
  }, []);


  // For checking that the user has already logged in or not
  const checkIsLoginUser = (token: string) => {
    const data = getDataFromLS(token);
    if (data?.user) {
      setUserType("company-user");
    }
    if (data?.admin) {
      setUserType("system-user");
    }
  }


  return (
    <header className="text-gray-600 body-font header_navbar ">
      <div className="navbar mx-auto p-5 mt-5">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pl-3 text-xl"
        >
          {/* <span className="text-blue-500 mr-2">E-Team </span> Manage */}
          <img className="w-28" src={logo} alt="" />
        </NavLink>

        <button
          className="navbar-toggler"
          onClick={() => setShowMenu(!showMenu)}
        >
          {!showMenu ? (
            <i className="fas fa-bars fa-lg"></i>
          ) : (
            <i className="fas fa-times fa-lg"></i>
          )}
        </button>
        <nav className="navbar-nav" id="navbar-nav">
          <NavLink to="/" className="md:mr-5 hover:text-gray-900 nav-item">
            Home
          </NavLink>
          <NavLink to="/ourTeam" className="md:mr-5 hover:text-gray-900 nav-item">
            About us
          </NavLink>
          <NavLink to="/pricing" className="md:mr-5 hover:text-gray-900 nav-item">
            Pricing
          </NavLink>
          <NavLink to="/contact" className="md:mr-5 hover:text-gray-900 nav-item">
            Contact
          </NavLink>
          {
            userType === '' &&
            <Link
              to="/login"
              className="md:mr-5 text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 nav-item mb-3"
            >
              Login <i className="fas fa-sign-in-alt"></i>
            </Link>
          }
          {
            userType === 'company-user' &&
            <Link to="/home" className="md:mr-5 text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 nav-item mb-3">
              Dashboard
            </Link>
          }
          {
            userType === 'system-user' &&
            <Link to="/system-admin/" className="md:mr-5 text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 nav-item mb-3">
              Dashboard
            </Link>
          }
        </nav>
      </div>
    </header>
  );
};

export default FinalNavbar;
