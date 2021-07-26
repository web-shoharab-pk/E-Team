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

      {/* Card with input field */}
      <div className="flex-none shadow-md rounded px-60 py-10 bg-gray-50 m-auto">
        <p className="font-bold text-2xl text-center">Input Application</p>
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

              <div className="mb-3">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Designation:
                  </label>{" "}
                  <br />
                  <input
                    className="rounded w-full border"
                    type="text"
                    name=""
                    id=""
                    placeholder="Type Designation"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Starting Date:
                  </label>{" "}
                  <br />
                  <input
                    className="rounded w-full border"
                    type="date"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className="mb-3">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Observation Under:
                  </label>{" "}
                  <br />
                  <input
                    className="rounded w-full border"
                    type="text"
                    name=""
                    id=""
                    placeholder="Input Name"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Input Name:
                </label>{" "}
                <br />
                <input
                  className="rounded border w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Input Name"
                />
              </div>

              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Select Application Type:
                </label>{" "}
                <br />
                <select className="rounded w-full border" name="" id="">
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Ending Date:
                </label>{" "}
                <br />
                <input
                  className="rounded border w-full"
                  type="date"
                  name=""
                  id=""
                />
              </div>

              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Application Status:
                </label>{" "}
                <br />
                <select className="rounded w-full border" name="" id="">
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                </select>
              </div>
            </div>

            <input
              type="submit"
              className="bg-blue-500 cursor-pointer py-3 px-3 rounded-full text-white font-bold my-3"
              value="Submit Application"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputApplication;
