import React, { useState } from "react";
import db from "../Firebase/Firebase";


const AssignCourse = () => {
  const [currentOption, setCurrentOption] = useState("");

  const handleChange = (event:any) => {
    setCurrentOption(event.target.value);
  };
  return (
    <div className="assing-course m-4">
      <div className="w-full lg:w-2/3 lg:m-auto border shadow px-2 py-4 rounded-lg hover:shadow-lg">
        <h2 className="text-xl text-center font-bold">Assign Course</h2>
        <form action="">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-2">
              <h3 className="text-md font-medium pb-2">Team Name</h3>
              <select
                onChange={handleChange}
                value={currentOption}
                className="app-input"
              >
                <option value="dm">Select Team</option>
                <option value="PH Team">DM Team</option>
                <option value="PH Team">DM Team</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 p-2">
              <h3 className="text-md font-medium pb-2">User Name</h3>
              <select className="app-input">
                <option value="dm">Select User</option>
                <option value="dm">Piash</option>
                <option value="dm">Dipu</option>
                <option value="dm">Masum</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 p-2">
              <h3 className="text-md font-medium pb-2">Course Name</h3>
              <select className="app-input">
                <option value="dm">Select Course</option>
                <option value="dm">Web Design</option>
                <option value="dm">Spoken English</option>
              </select>
            </div>
            <div className="w-full text-center">
              <button className="text-md font-medium px-10 transition delay-150 py-4 rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 border border-blue-500 ">
                Assign Course
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignCourse;
