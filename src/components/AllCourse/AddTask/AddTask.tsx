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
    <div className="mt-6">
      <div className="lg:w-full text-left">
        <label className="text-base text-left lg:font-semibold" htmlFor="">
          Task Title
        </label>
        <br />
        <input
          onChange={handleOnChange}
          name="title"
          className="border w-full py-3 px-4 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
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
          onChange={handleOnChange}
          className="border w-full py-3 px-4 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
          placeholder="Write Task Description"
          cols={30}
          rows={5}
        ></textarea>
      </div>

      <input
        onClick={handleSubmit}
        type="submit"
        value="Add Task"
        className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
      />
    </div>
  );
};

export default AddTask;
