import firebase from "firebase/app";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import swal from "sweetalert";
import { UserDataContext } from "../../Contexts/UserDataContext";

const db = firebase.firestore();

type TaskInputs = {
  taskName: string;
  userId: string;
  taskDescription: string;
};

const CreateTask = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [userList, setUserList] = useState([] as object[]);
  const [error, setError] = useState({ isError: false, message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [taskData, setTaskData] = useState<TaskInputs>({
    taskName: "",
    userId: "",
    taskDescription: "",
  });

  const { sprint_id }: any = useParams();

  useEffect(() => {
    db.collection("users")
      .where("co_id", "==", userData?.co_id)
      .get()
      .then((data: any) => {
        setUserList(data.docs.map((doc: any) => doc.data()));
      });
  }, []);

  const handleOnChange = (e: any) => {
    setError({ isError: false, message: "" });
    setTaskData({ ...taskData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { taskName, userId, taskDescription } = taskData;

    if (taskName && userId && taskDescription) {
      db.collection("task_list")
        .add({
          ...taskData,
          status: "todo",
          sprint_id,
          co_id: userData.co_id,
        })
        .then(() => {
          setSuccessMessage("Successfully Course Task Assigned!");
          setError({ isError: false, message: "" });
          window.location.replace("/sprint/" + sprint_id);
        })
        .catch((error) => {
          if (error) {
            swal("Sorry!", "All input fields must be filled up", "error");
          }
        })
        .catch((error) => {
          if (error) {
            swal("Sorry!", "All input fields must be filled up", "error");
          } else {
            swal(
              "Congratulations!",
              "Course task Successfully added",
              "success"
            );
          }
        });
    } else {
      swal("Sorry!", "All input fields must be filled up", "error");
    }
  };

  return (
    <div className="shadow-lg  mx-7 mt-4 px-16 pt-2 rounded-lg">
      <h2 className="text-center text-2xl font-bold text-blue-400">
        Create Task
      </h2>

      <form action="" className="form mt-4">
        <div className="flex w-full mb-5 space-x-16">
          <div className="w-1/2">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Task Name:
              </label>
              <br />
              <input
                onChange={handleOnChange}
                className="app-input"
                type="text"
                id="taskName"
                placeholder="Name of task"
                required
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                User:
              </label>
              <br />
              <select
                onChange={handleOnChange}
                className="app-input border bg-gray-100 rounded mt-1 p-2 w-full"
                id="userId"
                placeholder="Name of task"
                required
              >
                <option value="" className="hidden">
                  Select user
                </option>
                {userList?.map((user: any) => (
                  <option value={user?.id}>{user?.name}</option>
                ))}
              </select>
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
            className="app-input"
            id="taskDescription"
            placeholder="Write task description"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <input
            onClick={handleSubmit}
            type="submit"
            className="text-center cursor-pointer mx-auto my-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg"
            value="Let's Cook It"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
