import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../Firebase/Firebase";
import { UserDataContext } from "../../Contexts/UserDataContext";

type Inputs = {
  name: string;
  type: string;
};

const AssignDepartment = () => {
  const { userId } = useParams<{ userId: string }>();
  const { userData, setUserData } = useContext(UserDataContext);
  const [error, setError] = useState({ isError: false, message: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState<any>({});
  const [allDepartment, setAllDepartment] = useState([]);

  
  const handleOnChange = (e: any) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    

    if (user.department) {
      // if (nameRegEx.test(name) && descriptionRegEx.test(description)) {

      db.collection("users").doc(userId)
        .set(user)
        .then((data:any) => {
            console.log(data())
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

  useEffect(() => {
    db.collection("users")
      .doc(userId)
      .get()
      .then((doc: any) => {
        if (doc.exists) {
        //   console.log("Document data:", doc.data());
          setUser(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [userId]);

  useEffect(() => {
    db.collection("departments")
      .get()
      .then((docs: any) => {
        setAllDepartment(docs);
        docs.docs.forEach((doc:any)=>{
            console.log(doc)
        })
        
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  let departmentData: any = [];
  allDepartment.forEach((doc: any) => {
    if (userData.co_id === doc.data().co_id) {
      departmentData = [...departmentData, doc.data()];
    }
  });

  return (
    <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded-lg">
      <h2 className="text-center text-2xl pb-4 lg:text-3xl font-medium">
        Assign Department
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

      <p className="text-lg font-medium">
        User Name:{" "}
        <span className="text-lg font-normal uppercase">{user.name}</span>
      </p>

      <form action="" className="form mt-4">
        <div className="lg:flex w-full mb-5 lg:space-x-16">
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
              required
            >
              {departmentData.map((department: any) => (
                <option value={department.id}>{department.id}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="">
          <input
            className="rounded mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="name"
            type="hidden"
            readOnly
            placeholder="Write Department Name"
            defaultValue={user.id}
          />
        </div>

        <div className="text-center">
          <input
            onClick={handleSubmit}
            type="submit"
            className="focus:ring-2  transition-all border:ring-blue-500 focus:ring-blue-700 cursor-pointer my-4 hover:bg-blue-500 border hover:text-white text-blue-500  font-semibold py-2 lg:py-3 px-5 lg:px-10 rounded-lg"
            value="Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default AssignDepartment;
