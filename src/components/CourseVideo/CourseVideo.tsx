import React from "react";
import Topbar from "../Dashboard/Topbar/Topbar";

const CourseVideo = () => {
  return (
    <>
      <Topbar />

      <div className="lg:flex mt-6 mb-6 lg:mb-px lg:mx-16 lg:space-x-10">
        <div className="w-11/12 lg:w-2/3 mx-auto lg:mx-px">
          <h1 className="text-xl lg:text-3xl font-bold mb-7">How to email in professional way</h1>

            <div className="mb-10 lg:mb-px shadow rounded-xl py-4 px-2 lg:px-10">
              <div className="mt-4 lg:mx-6">
                <iframe
                  className="rounded-md w-full h-48 lg:h-96"
                  src="https://www.youtube.com/embed/1XctnF7C74s"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex mt-9 lg:mt-12 pb-3 justify-between">
                <button className="cursor-pointer border text-md lg:text-lg border-blue-500 bg-blue-500 text-white font-md lg:font-semibold py-1.5 lg:py-2 px-4 lg:px-9 rounded-3xl">Previous</button>
                <button className="cursor-pointer border text-md lg:text-lg border-blue-500 bg-blue-500 text-white font-md lg:font-semibold py-1.5 lg:py-2 px-7 lg:px-12 rounded-3xl">Next</button>
              </div>
            </div>
          </div>

            
        <div className="w-11/12 lg:w-1/3 mx-auto lg:mx-px">
          <div className="flex items-center justify-center mb-7">
            <span className="font-semibold lg:font-bold text-md lg:text-lg mr-3">Course Progress:</span>
                            
            <div className="relative w-1/2 flex items-center pt-1">
              <div className="w-11/12 overflow-hidden h-3 text-xs flex rounded-lg bg-gray-300">
                <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
                                
                <h5 className="w-1/12 text-sm ml-2 lg:ml-3">30%</h5>
            </div>
          </div>

          <div className="rounded-xl px-3 lg:px-5 pt-5 lg:pt-8 pb-6 lg:pb-px shadow-lg lg:ml-4">
            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
              <h3 className="mb-2 border cursor-pointer text-white py-2 px-4 border-blue-500 rounded-lg bg-blue-500"><span className="text-sm lg:text-lg font-bold">Video 01:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in professional way</span></h3>
              <h3 className="text-base lg:text-lg font-md lg:font-semibold">Quiz 01</h3>
              <h3 className="text-base lg:text-lg font-md lg:font-semibold">Assignment</h3>
            </div>
                            
            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
              <h3><span className="text-sm lg:text-lg font-bold">Video 02:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
            </div>

            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
              <h3><span className="text-sm lg:text-lg font-bold">Video 03:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
            </div>
                            
            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
              <h3><span className="text-sm lg:text-lg font-bold">Video 04:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
            </div>
                            
            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
              <h3><span className="text-sm lg:text-lg font-bold">Video 05:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseVideo;
