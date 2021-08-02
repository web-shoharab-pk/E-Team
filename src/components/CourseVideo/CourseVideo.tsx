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

        <div className="flex mt-8 ml-10">
          <div className="w-1/2">
            <div>
              <iframe
                className="rounded-md"
                width={727}
                height={409}
                src="https://www.youtube.com/embed/1XctnF7C74s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex mt-5 justify-between">
              <button className="app-button">Previous</button>
              <button className="app-button">Next</button>
            </div>
          </div>

          <div className="w-1/4 rounded-xl px-5 pt-8 shadow-lg ml-28">
            <div className="p-4 rounded-xl mb-3 bg-gray-100">
              <h3 className="cursor-pointer border text-lg border-blue-500 bg-blue-500 text-white font-semibold pr-4 pl-0.5 rounded-lg">
                <span>Video 01:</span>{" "}
                <span>How to email in professional way</span>
              </h3>
              <h3 className="font-bold">Quiz 01</h3>
              <h3 className="font-bold">Assignment</h3>
            </div>

            <div className="p-4 rounded-xl mb-3 bg-gray-100">
              <h3>
                <strong>Video 02:</strong> How to email in way
              </h3>
            </div>

            <div className="p-4 rounded-xl mb-3 bg-gray-100">
              <h3>
                <strong>Video 03:</strong> How to email in way
              </h3>
            </div>

            <div className="p-4 rounded-xl mb-3 bg-gray-100">
              <h3>
                <strong>Video 04:</strong> How to email in way
              </h3>
            </div>

            <div className="p-4 rounded-xl mb-3 bg-gray-100">
              <h3>
                <strong>Video 05:</strong> How to email in way
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
