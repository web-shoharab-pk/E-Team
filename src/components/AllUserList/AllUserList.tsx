import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext, useEffect } from 'react';
import { UserDataContext } from '../../Contexts/UserDataContext';
import db from '../Firebase/Firebase';

const AllUserList = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [allUsers, setAllUsers] = useState([] as object[])

    useEffect(() => {
        db.collection("users").where('co_id', '==', userData.co_id).get().then((users: any) => {
            let alluserData = users.docs.map((doc: any) => doc.data());
            setAllUsers(alluserData);
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [userData.co_id]);
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
            </table> 

    </div>
  );
};

export default AllUserList;
