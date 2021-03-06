import { url } from "inspector";
import React from "react";
import { Link } from "react-router-dom";
import HeroBg from "../../../Assets/images/hero-bg.png";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed bg-team-img">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={HeroBg}
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-blue-500">
              Manage Your Team
              <br className="hidden lg:inline-block" /> Organized Way
            </h1>
            <p className="mb-8 leading-relaxed text-lg font-bold text-gray-900">
              It’s a training and managing web app. Where users get different
              types of facilities to manage their work and employees in a
              disciplined way. only authorized users can use this web app.
              Authorized users have two categories one for the employer and
              another one for the employee.{" "}
              <Link className="underline hover:text-blue-600" to="/ourTeam">
                To know more
              </Link>
            </p>
            <div className="flex justify-center">
              <Link
                to="/registration"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-2 mb-2"
              >
                Register your company
              </Link>
              <Link
                to="/login"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-2 mb-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
