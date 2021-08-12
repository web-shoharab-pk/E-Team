import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const InputApplication = () => {
  return (
    <div className="flex">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="absolute w-full top-0 justify-between">
        <Topbar />
      </div>

      <form
        action=""
        className="w-full lg:w-2/4 px-2 mr-2.5 -ml-60 lg:mx-auto rounded-md form shadow-xl lg:p-6 mt-20 mb-10 relative bg-gray-100"
      >
        <p className="font-bold mb-8 text-3xl text-center text-blue-400">
          Input Application
        </p>

        <div className="lg:flex lg:space-x-5 mt-3">
          <div className="lg:w-1/2">
            <label className="text-md lg:text-lg font-semibold" htmlFor="hello">
              Team Name:
            </label>
            <br />
            <select
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2 focus:border-transparent"
              name=""
              id=""
            >
              <option value="">One</option>
              <option value="">Two</option>
              <option value="">Three</option>
            </select>
          </div>

          <div className="lg:w-1/2 mt-3 lg:mt-0">
            <label className="text-md lg:text-lg font-semibold" htmlFor="">
              Input Name:
            </label>
            <br />
            <input
              type="tel"
              name=""
              id=""
              placeholder="Your Number"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2 focus:border-transparent"
            />
          </div>
        </div>

        <div className="lg:flex lg:space-x-5 mt-3">
          <div className="lg:w-1/2">
            <label className="text-md lg:text-lg font-semibold" htmlFor="">
              Designation:
            </label>
            <br />
            <input
              type="tel"
              name=""
              id=""
              placeholder="Type Designation"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2 focus:border-transparent"
            />
          </div>

          <div className="lg:w-1/2 mt-3 lg:mt-0">
            <label className="text-md lg:text-lg font-semibold" htmlFor="hello">
              Select Application Type
            </label>
            <br />
            <select
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2 focus:border-transparent"
              name=""
              id=""
            >
              <option value="">One</option>
              <option value="">Two</option>
              <option value="">Three</option>
            </select>
          </div>
        </div>

        <div className="lg:flex lg:space-x-5 mt-3">
          <div className="lg:w-1/2">
            <label className="text-md lg:text-lg font-semibold" htmlFor="">
              Starting Date
            </label>
            <br />
            <input
              type="date"
              name=""
              id=""
              placeholder="Your Number"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2 focus:border-transparent"
            />
          </div>

          <div className="lg:w-1/2  mt-3 lg:mt-0">
            <label className="text-md lg:text-lg font-semibold" htmlFor="">
              Ending Date
            </label>
            <br />
            <input
              type="date"
              name=""
              id=""
              placeholder="Your Number"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mt-2"
            />
          </div>
        </div>

        <div className="lg:flex lg:space-x-5 mt-3">
          <div className="lg:w-1/2">
            <label className="text-md lg:text-lg font-semibold" htmlFor="">
              Observation Under
            </label>
            <br />
            <input
              type="text"
              name=""
              id=""
              placeholder="Input Name"
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mt-2"
            />
          </div>

          <div className="lg:w-1/2 mt-3 lg:mt-0">
            <label className="text-md lg:text-lg font-semibold" htmlFor="hello">
              Application Status
            </label>
            <br />
            <select
              className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2 focus:border-transparent"
              name=""
              id=""
            >
              <option value="">One</option>
              <option value="">Two</option>
              <option value="">Three</option>
            </select>
          </div>
        </div>

        <div className="mx-auto text-center ">
          <input
            type="submit"
            value="Submit Application"
            className="mt-6 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
          />
        </div>
      </form>
    </div>
  );
};

export default InputApplication;
