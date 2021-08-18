import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useState } from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";

export const db = firebase.firestore();

type TaskInputs = {
  taskName: string;
  teamName: string;
  taskDescription: string;
};

const CreateCourseTask = () => {
  const [courseTaskData, setCourseTaskData] = useState<TaskInputs>({
    taskName: "",
    teamName: "",
    taskDescription: "",
  });

  const { userData, setUserData } = useContext(UserDataContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnChange = (e: any) => {
    setCourseTaskData({ ...courseTaskData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { taskName, teamName, taskDescription } = courseTaskData;

    if (taskName && teamName && taskDescription) {
      // if (nameRegEx.test(name) && descriptionRegEx.test(description)) {

      db.collection("task_list")
        .add({
          taskName: taskName,
          teamName: teamName,
          taskDescription: taskDescription,
          co_id: userData.co_id,
        })
        .then(() => {
          (document.getElementById("taskName") as HTMLInputElement).value = "";
          (document.getElementById("teamName") as HTMLInputElement).value = "";
          (
            document.getElementById("taskDescription") as HTMLInputElement
          ).value = "";
          setSuccessMessage("Successfully Course Task Assigned!");
          setError({ isError: false, message: "" });
        })
        .catch((error) => {
          if (error) {
            setSuccessMessage("");
            setError({
              isError: true,
              message: "Any field must not be empty!",
            });
          } else {
            setSuccessMessage("Successfully Course Task Assigned!");
            setError({ isError: false, message: "" });
          }
        });
    } else {
      setIsSuccess(false);
      setError({ isError: true, message: "Any field must not be empty!" });
    }
  };

  return (
    <div className="shadow-lg  mx-7 mt-4 px-16 pt-2 rounded-lg">
      <h2 className="text-center text-3xl font-bold text-blue-400">
        Create Course Task
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
        <div className="flex w-full mb-5 space-x-16">
          <div className="w-5/6">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Task Name:
              </label>
              <br />
              <input
                onChange={handleOnChange}
                className="border bg-gray-100 rounded mt-1 p-2 w-full"
                type="text"
                id="taskName"
                placeholder="Name of task"
                required
              />
            </div>

            <div className="mb-5 text-center">
              <label className="text-lg font-semibold" htmlFor="">
                Assigned Team Name
              </label>
              <br />
              <select
                defaultValue="Select Team"
                onChange={handleOnChange}
                className="border bg-gray-100 rounded mt-1 p-2 w-full"
                id="teamName"
                required
              >
                <option value="Select Team">Endgame</option>
                <option value="PH">Endgame</option>
                <option value="PH">Endgame</option>
              </select>
            </div>
          </div>

          <div className="w-5/6">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Task File:
              </label>
              <br />
              <input
                className="border bg-gray-100 rounded mt-1 p-2 w-full"
                type="file"
                placeholder="Write Title"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <label className="text-lg font-semibold" htmlFor="">
            Task Description:
          </label>
          <br />
          <textarea
            onChange={handleOnChange}
            className="border bg-gray-100 rounded p-2 mt-1 w-full"
            id="taskDescription"
            cols={30}
            rows={7}
            placeholder="Write task description"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <input
            onClick={handleSubmit}
            type="submit"
            className="text-center cursor-pointer mx-auto my-4 bg-blue-500 text-white font-semibold py-3 px-10 rounded-lg"
            value="Let's Cook It"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateCourseTask;
