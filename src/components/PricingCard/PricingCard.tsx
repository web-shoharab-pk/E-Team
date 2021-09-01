import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../MainHome/Navbar/Navbar";

const PricingCard = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-10">
        <h1 className="inline font-bold text-3xl mb-2 border-b-4 border-blue-600">
          Pricing
        </h1>
      </div>

      <div className="flex flex-col md:flex-row px-2 md:px-0">
        <div className="w-full md:w-1/3 transition delay-150 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
          <h2 className="text-4xl pb-3 font-medium text-blue-500 text-center">
            Free
          </h2>
          <p className="text-gray-600 mt-1 text-2xl text-center">
            <span className="font-bold text-black">$00</span> /Month
          </p>
          <p className="text-md text-gray-600 mt-2 text-center">
            For individuals and teams looking to be more productive.
          </p>
          <div className="text-md text-gray-600 mt-4">
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              create 3 team
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can add
              15 team member
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              manage 3 project
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              chat with your team
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can add
              2 course for training
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can use
              this plan only one month
            </p>
          </div>
          <br />
          <br />
          <br />
          <button className="w-full text-purple-700 border border-blue-700 rounded hover:bg-blue-400 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
            <Link to="/registration">Choose Plan</Link>
          </button>
        </div>

        <div className="w-full lg:w-1/1 md:w-1/3 text-white  bg-blue-500 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
          <h2 className="text-4xl pb-3 font-medium text-white text-center">
            Popular
          </h2>
          <p className="mt-1 text-2xl text-center">
            <span className="font-bold">$99</span> /Month
          </p>
          <p className="text-md opacity-75 mt-2 text-center">
            For most businesses that want to optimize web queries.
          </p>
          <div className="text-md mt-4">
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              create 10 team
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can add
              50 team member
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              manage 10 project
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              chat with your team
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              vide chat with your team.
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can add
              10 course for training
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> 10GB
              database limit
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> We will
              give live chat support.
            </p>
          </div>
          <button className="w-full text-purple-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
            <Link to="/registration">Choose Plan</Link>
          </button>
        </div>

        <div className="w-full lg:w-1/1 md:w-1/3 transition delay-150 hover:bg-blue-200 hover:text-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
          <h2 className="text-4xl pb-3 font-medium text-blue-500 text-center">
            Enterprise
          </h2>
          <p className="text-gray-600 mt-1 text-2xl text-center">
            <span className="font-bold text-black">$299</span> /Month
          </p>
          <p className="text-md text-gray-600 mt-2 text-center">
            For most businesses that want to optimize web queries.
          </p>
          <div className="text-md text-gray-600 mt-4">
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              create 20 team
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can add
              150 team member
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              manage 25 project
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> 20GB
              database limit
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              chat with your team
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can
              vide chat with your team.
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> You can add
              15 course for training
            </p>
            <p className="my-2">
              <span className="fa fa-check-circle mr-2 ml-1"></span> We will
              give live chat support.
            </p>
          </div>
          <button className="w-full text-purple-700 border border-blue-700 rounded hover:bg-blue-500 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
            <Link to="/registration">Choose Plan</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
