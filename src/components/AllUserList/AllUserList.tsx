import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";
import userImg from "./../../Assets/images/user.png";

const AllUserList = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [allUsers, setAllUsers] = useState([] as object[]);

  useEffect(() => {
    db.collection("users")
      .where("co_id", "==", userData.co_id)
      .get()
      .then((users: any) => {
        let alluserData = users.docs.map((doc: any) => doc.data());
        setAllUsers(alluserData);
        console.log(alluserData);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [userData.co_id]);

  return (
    <div className="shadow mx-0 lg:mx-8 mt-4 pt-4 pb-16 rounded-lg">
      <h2 className="text-center  text-2xl py-3 font-semibold">
        All User List
      </h2>

      <div className="flex flex-col md:flex-row px-2 md:px-0">
        {allUsers.map((user: any) => {
          return (
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <figure className="bg-gray-100 rounded-xl p-8">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={user.photoURL ? user.photoURL : userImg}
                  alt=""
                  width="384"
                  height="512"
                />
                <div className="pt-6 text-center space-y-4">
                  <blockquote>
                    <p className="text-lg font-semibold">
                      Name: {user.name ? user.name : "NA"}
                    </p>
                  </blockquote>
                  <figcaption className="font-medium flex">
                    <div className="text-cyan-600 flex-1">
                      Role: {user.role ? user.role : "NA"}
                    </div>
                  </figcaption>
                </div>
                <div className="text-center py-2">
                  <Link
                    to={"/view-profile/" + user.id}
                    className="mb-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-2 mb-2"
                  >
                    Visit Profile
                  </Link>
                  <Link
                    className="text-md font-medium px-4 py-2 rounded bg-blue-500 hover:bg-white text-white hover:text-blue-500 border border-blue-500"
                    to={"/assign-department/" + user.id}
                  >
                    Assign Department
                  </Link>
                </div>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllUserList;
