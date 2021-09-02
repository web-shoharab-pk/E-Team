import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserDataContext } from '../../Contexts/UserDataContext';
import firebase from "firebase/app";
import { Link } from 'react-router-dom';

const db = firebase.firestore();

const SprintBoardList = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [sprintList, setSprintList] = useState([] as object[])

    useEffect(() => {
        db.collection('sprint_boards')
            .where('co_id', '==', userData?.co_id)
            .get()
            .then((data: any) => {
                setSprintList(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
            })
    }, [])
    console.log(sprintList);

    return (
        <div className="shadow mt-9 rounded-md pb-4 mx-16">
            <h2 className="text-center text-3xl text-blue-400 py-3 font-semibold">
                All Sprint List
            </h2>
            <Link to="/create-sprint" className="inline-block mb-7 ml-5 bg-blue-500 border text-white border-blue-500 hover:bg-white hover:text-blue-500  py-2 px-8 rounded-full">
                <i className="fas fa-edit"></i> Create Sprint Board
            </Link>
            <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
                <tr className="text-left border-t border-b-4 border-gray-300">
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Action</th>
                </tr>
                {sprintList.map((sprint: any) => (
                    <tr className="border-b border-gray-200">
                        <Link to={"/sprint/" + sprint.id}><td className="px-4 py-3 text-blue-500">{sprint.title}</td></Link>
                        <td className="px-4 py-3">
                            <Link to={"/add-task/" + sprint.id} className="py-1 px-4 bg-green-500 text-white">Add Task</Link>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default SprintBoardList;