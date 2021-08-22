import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";

const AllUserList = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [allUsers, setAllUsers] = useState([] as object[]);
  const [showModal, setShowModal] = useState(false);
  const [allDepartment, setAllDepartment] = useState([]);

  useEffect(() => {
    db.collection("departments")
      .get()
      .then((docs: any) => {
        setAllDepartment(docs);
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

  useEffect(() => {
    db.collection("users")
      .where("co_id", "==", userData.co_id)
      .get()
      .then((users: any) => {
        let allUserData = users.docs.map((doc: any) => doc.data());
        setAllUsers(allUserData);
        console.log(allUserData);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  return (
    <div className="shadow mx-0 lg:mx-8 mt-4 pt-4 pb-16 rounded-lg">
      <h2 className="text-center text-2xl py-3 font-semibold">All User List</h2>
      <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
        <tr className="text-left border-t border-b-4 border-gray-300">
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Mobile</th>
          <th className="px-4 py-3">Designation</th>
          <th className="px-4 py-3">Action</th>
        </tr>

        {allUsers.map((user: any) => {
          return (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.phone}</td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3">Edit</td>
              <td>
                {/* <button
                  className="border border-blue-500 text-black hover:bg-blue-500 hover:text-white py-1 px-2 rounded"
                  onClick={() => setShowModal(true)}
                >
                  Assign Department
                </button> */}
                <Link to={"/add-to-departement/"+user.id}>Assign departement</Link>
              </td>
              <>
                {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Modal Title
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-red opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <form action="">
                              <label
                                className="text-base lg:font-semibold"
                                htmlFor=""
                              >
                                Select Type
                              </label>
                              <br />
                              <select
                                defaultValue="select department"
                                id="type"
                                className="rounded mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                required
                              >
                                {departmentData.map((department: any) => (
                                  <option value="selectDepartment">
                                    {department.name}
                                  </option>
                                ))}
                              </select>

                              <select
                                defaultValue="select department"
                                id="type"
                                className="rounded mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                required
                              >
                                {allUsers.map((user: any) => (
                                  <option value="selectDepartment">
                                    {user.name}/{user.id}
                                  </option>
                                ))}
                              </select>
                            </form>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
            </tr>
          );
        })}
      </table>

      {/* <section className="text-gray-700">
                    <div className="w-full px-2 lg:px-16 pt-2">
                        <details className="mb-2 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Core Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>

                                <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
                                    <tr className="text-left border-t border-b-4 border-gray-300">
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Email</th>
                                        <th className="px-4 py-3">Mobile</th>
                                        <th className="px-4 py-3">Designation</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                    
                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3">Jill</td>
                                        <td className="px-4 py-3">jill@gmail.com</td>
                                        <td className="px-4 py-3">01800000000</td>
                                        <td className="px-4 py-3">Team Leader</td>
                                        <td className="px-4 py-3">Edit</td>
                                    </tr> 

                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3">Jill</td>
                                        <td className="px-4 py-3">jill@gmail.com</td>
                                        <td className="px-4 py-3">01800000000</td>
                                        <td className="px-4 py-3">Team Leader</td>
                                        <td className="px-4 py-3">Edit</td>
                                    </tr> 

                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3">Jill</td>
                                        <td className="px-4 py-3">jill@gmail.com</td>
                                        <td className="px-4 py-3">01800000000</td>
                                        <td className="px-4 py-3">Team Leader</td>
                                        <td className="px-4 py-3">Edit</td>
                                    </tr> 
                                </table>
                            </div>
                        </details>
                    </div>

                    <div className="w-full px-2 lg:px-16">
                        <details className="mb-4 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Digital Marketing Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>

                    <div className="w-full px-2 lg:px-16">
                        <details className="mb-4 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Tech Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>

                    <div className="w-full px-2 lg:px-16">
                        <details className="mb-4 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Content Management Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>
                </section>
         */}
    </div>
  );
};

export default AllUserList;
