import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../Firebase/Firebase";

const AddTask = ({isEdit}:any) => {
  const [taskData, setTaskData] = useState<any>({});
  const { id }: any = useParams();

  useEffect(() => {
    isEdit && 
        db.collection("course_tasks").doc(id).get()
        .then((docs: any) => {
            setTaskData(docs.data());
        })
        .catch((error:any) => {
            console.log("Error getting document:", error);
        });
  }, [])

  const handleOnChange = (e: any) => {
    setTaskData({...taskData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const {title, description} = taskData;

    if (title && description && !isEdit) {
      db.collection("course_tasks")
        .add({
          module_id: id,
          title: title,
          description: description,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((data: any) => {
          window.history.go(-1);
        })
        .catch((error: any) => {
          console.log(error);
        });
    } 
    else if (title && description && isEdit) {
      db.collection("course_tasks").doc(id).set(taskData)
      .then((data:any) => {
          console.log(data)
      })
      .catch((error:any) => {
          console.log(error)
      });
    } 
    else {
      alert("All field must not be empty!");
    }
  };

  return (
    <div className="mt-6 shadow rounded-lg mx-6 p-5">
      <h3 className="text-center text-2xl font-semibold mb-7">{!isEdit ? "Add Task Area" : "Edit Task Details"}</h3>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="lg:w-full mb-3 text-left">
          <label className="text-base text-left lg:font-semibold" htmlFor="">
            Task Title
          </label>
          <br />
          <input
            onChange={handleOnChange}
            name="title"
            defaultValue={taskData.title}
            className="border w-full py-3 px-4 focus:outline-none bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
            placeholder="Write Task Description"
            required
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
            defaultValue={taskData.description}
            cols={30}
            rows={5}
            required
          ></textarea>
        </div>

        <input
          type="submit"
          value={!isEdit ? "Add Task" : "Update"}
          className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
        />
      </form>
    </div>
  );
};

export default AddTask;
