import React, { useEffect, useState } from 'react';
import { db } from '../../Authentication/loginmanager';

const AllCompany = () => {
    const [allCompany, setAllCompany] = useState([] as object[])

    useEffect(() => {
        db.collection("companies").get().then((users: any) => {
            let companies = users.docs.map((doc: any) => doc.data());
            setAllCompany(companies);
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);
    return (
        <div className="shadow mx-0 lg:mx-8 mt-4 pt-4 pb-16 rounded-lg">
            <h2 className="text-center text-2xl py-3 font-semibold">Company List</h2>
            <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
                <tr className="text-left border-t border-b-4 border-gray-300">
                    <th className="px-4 py-3">Company Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Mobile</th>
                    <th className="px-4 py-3">Action</th>
                </tr>

                {
                    allCompany.map((user: any) => {
                        return (
                            <tr key={user.id} className="border-b border-gray-200">
                                <td className="px-4 py-3">{user.company_name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3">{user.phone}</td>
                                <td className="px-4 py-3">Edit</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default AllCompany;