import React, { useContext, useState } from "react";
import swal from "sweetalert";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";

const InputApplication = () => {
  const [applicationData, setApplicationData] = useState<any>({});
  const { userData, setUserData } = useContext(UserDataContext);

  const handleOnChange = (e: any) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleInputSubmit = (e: any) => {
    e.preventDefault();
    const {
      applicationType,
      departmentName,
      designation,
      endingDate,
      name,
      startingDate,
      status,
    } = applicationData;

    db.collection("employe_applications")
      .add({
        application_type: applicationType,
        department_name: departmentName,
        designation: designation,
        ending_date: endingDate,
        name: name,
        starting_date: startingDate,
        status: status,
        co_id: userData.co_id,
      })
      .then((data: any) => {
        swal(
          "Congratulations!",
          "Input Application Added successfully",
          "success"
        );
      })
      .catch((error: any) => {
        swal("Sorry!", "All fields must be filled up", "error");
      });

    // (document.getElementById("inputForm") as HTMLInputElement).value = "";
  };

  return (
    <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded hover:shadow-lg">
      <h2 className="text-center text-2xl pb-4 lg:text-2xl font-bold text-blue-400">
        Input Application
      </h2>

      <form
        action=""
        onSubmit={handleInputSubmit}
        id="inputForm"
        className="form mt-4"
      >
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Team Name
            </label>
            <br />
            <select
              defaultValue="select department"
              id="type"
              name="departmentName"
              onChange={handleOnChange}
              className="app-input rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required /*name="department" id="department-select"*/
            >
              <option value="Team-80">Team-80</option>
              <option value="Team-30">Team-30</option>
              <option value="Team-11">Team-11</option>
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
              name="name"
              required
              onChange={handleOnChange}
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
              className="app-input rounded   bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id=""
              type="text"
              required
              name="designation"
              onChange={handleOnChange}
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
              name="applicationType"
              onChange={handleOnChange}
              className="app-input rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required /*name="department" id="department-select"*/
            >
              <option value="Leave Application">Leave Application</option>
              <option value="Resignation Application">
                Resignation Application
              </option>
              <option value="Other Application">Other Application</option>
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
              name="startingDate"
              type="date"
              onChange={handleOnChange}
            />
          </div>

          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Ending Date
            </label>
            <br />
            <input
              className="app-input rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id=""
              name="endingDate"
              type="date"
              onChange={handleOnChange}
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
              name="observation"
              required
              onChange={handleOnChange}
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
              id="type"
              name="status"
              onChange={handleOnChange}
              className="app-input rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required /*name="department" id="department-select"*/
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="text-center ">
          <input
            type="submit"
            value="Submit Application"
            className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
            onClick={(e) => {
              e.preventDefault();
              swal("Sorry!", "Function doesn't implement yet", "error");
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default InputApplication;
