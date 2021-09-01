import React, { useState } from "react";
import firebase from "firebase";
import db from "../../Firebase/Firebase";
import { useParams } from "react-router";

const AddTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const { id }: any = useParams();

  const handleOnChange = (e: any) => {
    if (e.target.name === "title") {
      settaskTitle(e.target.value);
    }
    if (e.target.name === "description") {
      setTaskDescription(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (taskTitle && taskDescription) {
      db.collection("course_tasks")
        .add({
          module_id: id,
          title: taskTitle,
          description: taskDescription,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((data: any) => {
          window.history.go(-1);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      alert("All field must not be empty!");
    }
  };
  return (
    <div className="shadow lg:mx-7 mt-4 px-2 lg:px-16 pt-2 rounded">
      <h2 className="text-center  text-2xl py-3 font-semibold">Add Task</h2>
      <div className="lg:w-full mb-5">
        <label className="text-base lg:font-semibold" htmlFor="">
          Task Title
        </label>
        <br />
        <input
          onChange={handleOnChange}
          required
          name="title"
          className="app-input"
          placeholder="Write Task Description"
        />
      </div>
      <div className="lg:w-full text-left">
        <label className="text-base text-left lg:font-semibold" htmlFor="">
          Task Description
        </label>
        <br />
        <textarea
          name="description"
          required
          onChange={handleOnChange}
          className="app-input"
          placeholder="Write Task Description"
        ></textarea>
      </div>

      <div className="text-center">
        <input
          onClick={handleSubmit}
          type="submit"
          value="Add Task"
          className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
        />
      </div>
    </div>
  );
};

export default AddTask;
