import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../Assets/images/heroImg2.png';

const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font">
        <div className=" mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
            <img
              className=" rounded w-full"
              alt="hero"
              src={heroImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl mt-5 lg:text-6xl mb-4 font-bold text-blue-400">
              Manage Your Team 
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-500">
              It’s a training and managing web app. Where users get different type
              of facilities to manage their work and employees in a disciplined
              way. only authorized users can use this web app. Authorized users
              have two categories one for the employer and another one for the
              employee.
            </p>
            <div className="flex   items-center ">
                <p className="text-blue-500 text-xl mx-3">Register your company</p>
              <Link
                to="/registration"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-2 mb-2"
              >
                Register
              </Link> 
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;