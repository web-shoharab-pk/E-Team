import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const SetMeeting = () => {
  return (
    <div className="flex">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="absolute w-full top-0 justify-between">
        <Topbar />
      </div>

          <div className="mt-20 -ml-60 mr-3 lg:mr-0 lg:-ml-0 mb-4 grid px-3 lg:px-0 lg:mx-auto rounded-lg shadow w-full md:w-9/12 lg:w-1/2">
            <div className="pt-3">
              <h1 className="text-center text-gray-600 font-bold md:text-2xl text-xl">Set a meeting</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:mx-7">
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-md text-light font-semibold">Team Name:</label>
                <select placeholder="Select Team" className="py-0.5 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-md text-light font-semibold">Meeting Title:</label>
                <input className="py-0.5 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="text" placeholder="Title" />
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 lg:mx-7">
              <label className="uppercase md:text-sm text-md text-light font-semibold">Meeting Adenga:</label>
              <textarea name="" id="" className="p-3 border-2 border-gray-300 rounded-md" placeholder="Agenda" cols={30} rows={3}></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 lg:mx-7">
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-md text-light font-semibold">Time:</label>
                <input className="py-0.5 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="time" placeholder="Time" />
              </div>

              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-md text-light font-semibold">Date:</label>
                <input className="py-0.5 px-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" type="date" placeholder="Date" />
              </div>
            </div>

            <div className='pt-8'>
              <button className='w-auto block mx-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Set the meeting</button>
            </div>

          </div>
    </div>
  );
};

export default SetMeeting;
