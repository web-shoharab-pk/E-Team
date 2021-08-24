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
            <div className="w-full md:w-1/3 hover:bg-blue-200 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
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
                    <div className="text-cyan-600 flex-1">
                      <Link
                        to="#"
                        className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mr-2 mb-2"
                      >
                        Visit Profile
                      </Link>
                    </div>
                  </figcaption>
                </div>
                <div className="text-center py-2">
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
      {/* <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
                <tr className="text-left border-t border-b-4 border-gray-300">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Mobile</th>
                    <th className="px-4 py-3">Designation</th>
                    <th className="px-4 py-3">Action</th>
                </tr>

                {
                    allUsers.map((user:any) => {
                        return (
                            <tr key={user.id} className="border-b border-gray-200">
                                <td className="px-4 py-3">{user.name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3">{user.phone}</td>
                                <td className="px-4 py-3">{user.role}</td>
                                <td className="px-4 py-3">Edit</td>
                            </tr>
                        )
                    })
                }
            </table> */}

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
