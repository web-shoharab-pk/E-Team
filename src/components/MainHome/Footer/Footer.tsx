import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800  sm:mt-10 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-base uppercase text-gray-400 font-medium mb-6">
              Getting Started
            </div>

            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Installation
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Release Notes
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Upgrade Guide
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Using with Preprocessors
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Optimizing for Production
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Browser Support
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              IntelliSense
            </Link>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-base uppercase text-gray-400 font-medium mb-6">
              Core Concepts
            </div>

            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Utility-First
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Responsive Design
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Hover, Focus, & Other States
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Dark Mode
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Adding Base Styles
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Extracting Components
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Adding New Utilities
            </Link>
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-base uppercase text-gray-400 font-medium mb-6">
            Connect With US!
            </div>
            <label className="text-base text-white lg:font-semibold" htmlFor="">
              Inter your Email!
            </label>
            <br /> 
            <input
              className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id=""
              type="text"
              required
              placeholder="Email"
            />
            <input
                type="submit"
                value="Subscribe"
                className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"           
              /> 
          </div>

          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-base uppercase text-gray-400 font-medium mb-6">
              Community
            </div>

            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              GitHub
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Discord
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Twitter
            </Link>
            <Link
              to="#"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              YouTube
            </Link>
          </div>
        </div>

        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
                        border-t border-gray-500 text-gray-400 text-sm 
                        flex-col md:flex-row max-w-6xl"
          >
            <div className="mt-2">
              © Copyright 2021-year. All Rights Reserved.
            </div>

            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <Link to="#" className="w-6 mx-1">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="#" className="w-6 mx-1">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="#" className="w-6 mx-1">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link to="#" className="w-6 mx-1">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="#" className="w-6 mx-1">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
