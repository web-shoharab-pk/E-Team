import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import swal from "sweetalert";

const InputApplication = () => {
  return (
    <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded hover:shadow-lg">
      <h2 className="text-center text-2xl pb-4 lg:text-2xl font-bold text-blue-400">
        Input Application
      </h2>

      <form action="" className="form mt-4">
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Team Name
            </label>
            <br />
            <select
              defaultValue="select department"
              id="type"
              className="app-input"
              required /*name="department" id="department-select"*/
            >
              <option value="selectTeam">Team-80</option>
              <option value="T3">Team-30</option>
              <option value="T11">Team-11</option>
            </select>
          </div>

          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Input Name
            </label>
            <br />
            <input
              className="app-input"
              id=""
              type="text"
              required
              placeholder="Your Name"
            />
          </div>
        </div>

        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Designation
            </label>
            <br />
            <input
              className="app-input"
              id=""
              type="text"
              required
              placeholder="Your Designation"
            />
          </div>

          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Select Application Type
            </label>
            <br />
            <select
              defaultValue="select department"
              id="type"
              className="app-input"
              required /*name="department" id="department-select"*/
            >
              <option value="selectApplication">Leave Application</option>
              <option value="RA">Resignation Application</option>
              <option value="OA">Other Application</option>
            </select>
          </div>
        </div>

        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Starting Date
            </label>
            <br />
            <input
              className="app-input"
              id=""
              type="date"
            />
          </div>

          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Ending Date
            </label>
            <br />
            <input
              className="app-input"
              type="date"
            />
          </div>
        </div>

        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Observation Under
            </label>
            <br />
            <input
              className="app-input"
              type="text"
              required
              placeholder="Supervisor Name"
            />
          </div>

          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Application Status
            </label>
            <br />
            <select
              defaultValue="select department"
              className="app-input"
              required /*name="department" id="department-select"*/
            >
              <option value="selectStatus">High</option>
              <option value="MD">Medium</option>
              <option value="LW">Low</option>
            </select>
          </div>
        </div>

        <div className="text-center ">
          {" "}
          <input
            type="submit"
            value="Submit Application"
            className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
            onClick={(e) => { e.preventDefault();  swal("Sorry!", "Function doesn't implement yet", "error");}}
          />
        </div>
      </form>
    </div>
  );
};

export default InputApplication;
