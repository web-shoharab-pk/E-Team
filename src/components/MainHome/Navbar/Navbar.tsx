import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu) {
    document.getElementById("navbar-nav")?.classList.add("active");
  } else {
    document.getElementById("navbar-nav")?.classList.remove("active");
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="navbar container mx-auto p-5 mt-5">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pl-3 text-xl"
        >
          <span className="text-blue-500 mr-2">E-Team </span> Manage
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center  text-lg justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/ourTeam" className="mr-5 hover:text-gray-900">
            Our Team
          </Link>
          <Link to="/pricing" className="mr-5 hover:text-gray-900">
            Pricing
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link
            to="/login"
            className="mr-5 inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
