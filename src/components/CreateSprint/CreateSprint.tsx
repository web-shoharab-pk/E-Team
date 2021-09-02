import React, { useContext, useState } from 'react';
import { UserDataContext } from '../../Contexts/UserDataContext';
import firebase from "firebase/app";

const db = firebase.firestore();

const CreateSprint = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [title, setTitle] = useState()

    const handleSubmit = () => {
        if (title) {
            db.collection("sprint_boards")
                .add({
                    title,
                    co_id: userData.co_id,
                })
                .then((data: any) => {

                    window.location.replace('/sprint-list')
                })
        } else {
            alert('Please write title')
        }
    }

    return (
        <div className="shadow mt-9 rounded-md pb-4 mx-16">
            <h2 className="text-center text-3xl text-blue-400 py-3 font-semibold">
                Create a nw sprint
            </h2>
            <div  className="form mt-4">
                <div className="md:flex w-full mb-5 px-5">
                    <div className="xm:w-full md:w-1/2">
                        <div className="mb-5">
                            <label className="text-lg font-semibold" htmlFor="">
                                Sprint Title:
                            </label>
                            <br />
                            <input
                                onChange={(e: any) => setTitle(e.target.value)}
                                className="border bg-gray-100 rounded mt-1 p-2 w-full"
                                type="text"
                                id="taskName"
                                placeholder="Name of task"
                                required
                            />
                        </div>
                    </div>
                    <div className="xs:w-full md:w-1/2 text-center">
                        <input
                            onClick={handleSubmit}
                            type="submit"
                            className="text-center cursor-pointer mx-auto my-4 bg-blue-500 text-white font-semibold py-3 px-10 rounded-lg"
                            value="Let's Cook It"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSprint;