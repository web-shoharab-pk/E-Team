import firebase from "firebase/app";
import "firebase/firestore";
import React, { useContext, useState } from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import swal from "sweetalert";

const db = firebase.firestore();

type Inputs = {
  name: string;
  type: string;
  description: string;
};

const CreateDepartment = () => {
  const [departmentData, setDepartmentData] = useState<Inputs>({
    name: "",
    type: "",
    description: "",
  });
  const { userData, setUserData } = useContext(UserDataContext);

  const handleOnChange = (e: any) => {
    setDepartmentData({ ...departmentData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const nameRegEx = /^[A-Za-z0-9_]{3,}$/;
    const nameRegEx = /^[A-Za-z]{3,}$/;
    // const descriptionRegEx = /^[A-Za-z0-9_.,-\?]{3,}$/;
    const descriptionRegEx = /^[A-Za-z]{3,}$/;

    const { name, type, description } = departmentData;

    if (name && type && description) {
      // if (nameRegEx.test(name) && descriptionRegEx.test(description)) {

      db.collection("departments")
        .add({
          name: name,
          type: type,
          description: description,
          co_id: userData.co_id,
        })
        .then(() => {
          (document.getElementById("name") as HTMLInputElement).value = "";
          (document.getElementById("type") as HTMLInputElement).value = "";
          (document.getElementById("description") as HTMLInputElement).value =
            "";
          swal("Congratulations!", "Department Successfully added", "success");
        })
        .catch((error) => {
          if (error) {
            swal("Sorry!", "All fields must be filled up", "error");
          } else {
            swal(
              "Congratulations!",
              "Department Successfully added",
              "success"
            );
          }
        });
    } else {
      swal("Sorry!", "All fields must be filled up", "error");
    }
  };

  return (
    <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded-lg hover:shadow-lg">
      <h2 className="text-center text-2xl pb-4 lg:text-2xl font-medium">
        Create Department
      </h2>

      <form action="" className="form mt-4">
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Name
            </label>
            <br />
            <input
              onChange={handleOnChange}
              className="app-input"
              id="name"
              type="text"
              required
              placeholder="Write Department Name"
            />
          </div>

          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Select Type
            </label>
            <br />
            <select
              defaultValue="select department"
              onChange={handleOnChange}
              id="type"
              className="app-input"
              required /*name="department" id="department-select"*/
            >
              <option value="selectDepartment">Select Department Type</option>
              <option value="HR">HR Department</option>
              <option value="digitalMartketing">Others Department</option>
            </select>
          </div>
        </div>

        <div className="">
          <label className="text-base lg:font-semibold" htmlFor="">
            Description
          </label>
          <br />
          <textarea
            onChange={handleOnChange}
            className="app-input"
            required
            placeholder="Write Details"
          ></textarea>
        </div>

        <div className="text-center">
          <input
            onClick={handleSubmit}
            type="submit"
            className="focus:ring-2  transition-all border:ring-blue-500 focus:ring-blue-700 cursor-pointer my-4 hover:bg-blue-500 border hover:text-white text-blue-500  font-semibold py-2 lg:py-3 px-5 lg:px-10 rounded-lg"
            value="Assign Department"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateDepartment;
