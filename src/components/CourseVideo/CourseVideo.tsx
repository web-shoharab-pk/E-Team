import React from "react";
import Topbar from "../Topbar/Topbar";

const CourseVideo = () => {
  return (
    <div>
      <Topbar />

      <div className="mt-5">
        <div className="flex items-center">
          <h2 className="w-1/2 text-2xl font-bold ml-10">
            How to email in professional way
          </h2>

          <div className=" w-1/2 flex items-center">
            <span className="text-lg font-semibold mr-3">Course Progress:</span>

            <div className="relative w-1/2 flex items-center pt-1">
              <div className="w-11/12 overflow-hidden h-3 rounded-lg text-xs flex bg-gray-300">
                <div
                  style={{ width: "20%" }}
                  className="flex flex-col shadow-none text-center text-white bg-blue-500 justify-center"
                ></div>
              </div>

              <p className="w-1/12 text-sm ml-3 font-semibold">20%</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default CourseVideo;
