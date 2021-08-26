import firebase from "firebase";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserDataContext } from "../../Contexts/UserDataContext";

export const db = firebase.firestore();
const AssignedDepartmentUser = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const [departmentUser, setDepartmentUser] = useState([]);
  const [departmentName,setDepartmentName] = useState<any>([])
  const { userData, setUserData } = useContext(UserDataContext);

  useEffect(() => {
    db.collection("users")
      .get()
      .then((docs: any) => {
        setDepartmentUser(docs);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

  let usersData: any = [];
  departmentUser.forEach((doc: any) => {
    if (
      userData.co_id === doc.data().co_id &&
      departmentId === doc.data().dept_id
    ) {
      const user = doc.data();
      user.id = doc.id;
      usersData = [...usersData, user];
    }
  });
  console.log(usersData);
  db.collection("departments").doc(departmentId).get().then((data:any)=>{
    setDepartmentName(data.data())
  })
  return (
    <div className="shadow mt-9 rounded-md mx-16">
      <h2 className="text-center text-3xl text-blue-400 py-3 font-semibold">
        Assigned Department User List
      </h2>

      <div className="px-8 mt-3 mb-10 py-2">
        <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
          <tr className="text-left border-t border-b-4 border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Under the Department</th>
            {/* <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Action</th> */}
          </tr>

          {usersData.map((user: any) => (
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{departmentName.name}</td>
              {/* <td className="px-4 py-3">{department.description}</td>
              <td className="px-4 py-3">Edit</td> */}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AssignedDepartmentUser;
