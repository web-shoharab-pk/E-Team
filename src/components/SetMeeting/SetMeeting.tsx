import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import {Link} from 'react-router-dom';

const SetMeeting = () => {
  return (
    <div className="flex">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="absolute w-full top-0 justify-between">
        <Topbar />
      </div>

      {/* Card with input field */}
      {/* <div className="flex-none shadow-md rounded px-60 py-10 bg-gray-50 m-auto">
        <p className="font-bold text-2xl text-center">Set a meeting</p>
        <form action="" className="form mt-4">
          <div className="grid gap-x-32 grid-cols-2">
            <div>
              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Team Name:
                </label>{" "}
                <br />
                <select className="rounded w-full border" name="" id="">
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                </select>
              </div>

              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  Meeting Agenda:
                </label>{" "}
                <br />
                <textarea
                  className="rounded w-full border"
                  name=""
                  placeholder="Agenda"
                  cols={5}
                  rows={3}
                ></textarea>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Meeting Title:
                </label>{" "}
                <br />
                <input
                  className="rounded border w-full"
                  type="text"
                  name=""
                  placeholder="Title"
                />
              </div>

              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Date:
                </label>{" "}
                <br />
                <input className="rounded border w-full" type="date" name="" />
              </div>

              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  time:
                </label>{" "}
                <br />
                <input
                  className="rounded border w-full"
                  type="time"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <input
            type="submit"
            className="app-button"
            value="Set meeting"
          />
        </form>
      </div> */}
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
