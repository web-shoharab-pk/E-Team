import firebase from "firebase";
import React, {  useState } from "react";
import { useParams } from "react-router";
import { db } from "../../AllDepartment/AssignedDepartmentUser";

const AddTask = () => {
  const { id } = useParams<{ id: string }>();
  const [description, setDescription] = useState<any>({});
  const [error, setError] = useState({ isError: false, message: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOnChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (description) {
      db.collection("course_modules")
        .doc(id)
        .set({
          description: description,
          module_id: id,
          created_at: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((data: any) => {
          (document.getElementById("description") as HTMLInputElement).value =
            "";
          setSuccessMessage("Successfully Department Assigned!");
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
            setSuccessMessage("Successfully Assigned to Department!");
            setError({ isError: false, message: "" });
          }
        });
    } else {
      setIsSuccess(false);
      setError({ isError: true, message: "Any field must not be empty!" });
    }
  };

  return (
    <div className="mt-6 shadow rounded-lg p-6">
      <h3 className="text-center font-semibold text-2xl">Add Task Area</h3>
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

      <form action="" className="mx-6">
        <div className="lg:w-full text-left">
          <label className="text-base text-left lg:font-semibold" htmlFor="">
            Task Description
          </label>
          <br />
          <textarea
            onChange={handleOnChange}
            className="border w-full py-3 px-4 bg-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
            id="description"
            placeholder="Write Task Description"
            cols={30}
            rows={5}
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
      </form>
    </div>
  );
};

export default AddTask;
