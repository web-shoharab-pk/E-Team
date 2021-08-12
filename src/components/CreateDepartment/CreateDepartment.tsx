import React, { useState, useContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { ConpanyDataContext } from "../../Contexts/UserDataContext";

export const db = firebase.firestore();

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
  const { companyData, setCompanyData } = useContext(ConpanyDataContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnChange = (e: any) => {
    setDepartmentData({ ...departmentData, [e.target.id]: e.target.value });
  }



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
          co_id: companyData.co_id,
        })
        .then(() => {
          (document.getElementById("name") as HTMLInputElement).value = "";
          (document.getElementById("type") as HTMLInputElement).value = "";
          (document.getElementById("description") as HTMLInputElement).value =
            "";
          setSuccessMessage("Successfully Department Assigned!");
          setError({ isError: false, message: "" });
        })
        .catch((error) => {
          if (error) {
            setSuccessMessage("");
            setError({ isError: true, message: "Any field must not be empty!" });
          } else {
            setSuccessMessage("Successfully Department Assigned!");
            setError({ isError: false, message: "" });
          }
        });
    } else {
      setIsSuccess(false);
      setError({ isError: true, message: "Any field must not be empty!" });
    }
  }; 

  return (
    <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded-lg">
      <h2 className="text-center text-2xl pb-4 lg:text-3xl font-medium">
        Create Department
      </h2>
      {error.message ? (
        <div className="text-red-500 mx-5 text-center">{error.message}</div>
      ) : (
        ""
      )}

      {successMessage ? (
        <div className="text-green-500 mx-5 text-center">{successMessage}</div>
      ) : (
        ""
      )}


      <form action="" className="form mt-4">
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Name
            </label>
            <br />
            <input
              onChange={handleOnChange}
              className="rounded mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
              className="rounded mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required /*name="department" id="department-select"*/
            >
              <option value="selectDepartment">Select Department</option>
              <option value="HR">HR</option>
              <option value="digitalMartketing">Digital Marketing</option>
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
            className="rounded mt-1 p-3 border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
            id="description"
            required
            cols={30}
            rows={7}
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
