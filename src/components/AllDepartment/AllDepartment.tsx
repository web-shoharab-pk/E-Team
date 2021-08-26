import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { UserDataContext } from "../../Contexts/UserDataContext";
import { Link } from "react-router-dom";

export const db = firebase.firestore();

type AllDepartment = {
  name: string;
  type: string;
  description: string;
};

const AllDepartment = () => {
  const [allDepartment, setAllDepartment] = useState([]);
  const { userData, setUserData } = useContext(UserDataContext);

  useEffect(() => {
    db.collection("departments")
      .get()
      .then((docs: any) => {
        // if (doc.exists) {
        //     console.log("Document data:", doc.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }
        setAllDepartment(docs);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  let departmentData: any = [];
  allDepartment.forEach((doc: any) => {
    if (userData.co_id === doc.data().co_id) {
      const dept = doc.data();
      dept.id = doc.id;
      departmentData = [...departmentData, dept];
      console.log(dept);
    }
  });

  

  return (
    <div className="shadow mt-9 rounded-md mx-16">
      <h2 className="text-center text-3xl text-blue-400 py-3 font-semibold">
        All Department List
      </h2>

      <div className="px-8 mt-3 mb-10 py-2">
        <div className="relative mx-auto lg:mx-0 block text-left my-2">
          <input
            type="search"
            className="shadow-sm overflow-x-hidden rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 border -mx-1 lg:-mx-0 px-2 py-1.5 lg:p-3"
            placeholder="Search here"
          />

          {/* <div className="absolute bg-gray-300 py-1.5 lg:py-2 px-4 top-px left-1.5 rounded-r-3xl pin-r pin-t text-purple-lighter">
                        <FontAwesomeIcon className="" icon={faSearch} />
                    </div> */}
        </div>

        <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
          <tr className="text-left border-t border-b-4 border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Action</th>
          </tr>

          {departmentData.map((department: any) => (
            <tr className="border-b border-gray-200">
              <Link to={"/assigned-department-user/"+department.id}><td className="px-4 py-3 hover:text-blue-500">{department.name}</td></Link>
              <td className="px-4 py-3">{department.type}</td>
              <td className="px-4 py-3">{department.description}</td>
              <td className="px-4 py-3">Edit</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllDepartment;
