import React, { useState, useContext } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { ConpanyDataContext } from '../../Contexts/UserDataContext';

export const db = firebase.firestore();

type Inputs = {
    name: string,
    type: string,
    description: string
};
  
const CreateDepartment = () => {
    const [departmentData, setDepartmentData] = useState<Inputs>({
        name: '',
        type: '',
        description: '',
    });
    const [success, setSuccess] = useState('');
    const { userData, setUserData } = useContext(ConpanyDataContext);

    const handleOnChange = (e: any) => {
        setDepartmentData({...departmentData, [e.target.id]:e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const {name, type, description} = departmentData;

        db.collection("departments").add({
            name: name,
            type: type,
            description: description,
            co_id: userData.co_id,
        })
        .then(() => {
            setSuccess("Document successfully written!");
            (document.getElementById("name") as HTMLInputElement).value = '';
            (document.getElementById("type") as HTMLInputElement).value = '';
            (document.getElementById("description") as HTMLInputElement).value = '';
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

    }

    return (
        <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded-lg">
            <h2 className="text-center text-2xl pb-4 lg:text-3xl font-medium">Create Department</h2>

            <p className="text-center text-green-600 py-4 text-lg font-normal">{success && success}</p>
            <form action="" className="form mt-4">
                <div className="lg:flex w-full mb-5 lg:space-x-16">
                    <div className="lg:w-5/6">
                        <label className="text-base lg:font-semibold" htmlFor="">Name</label><br />
                        <input onChange={handleOnChange} className="border rounded mt-1 p-2 w-full" id="name" type="text" required placeholder="Write Department Name" />
                    </div>

                    <div className="lg:w-5/6">
                        <label className="text-base lg:font-semibold" htmlFor="">Select Type</label><br />
                        <select onChange={handleOnChange} id="type" className="border rounded mt-1 p-2 w-full" required /*name="department" id="department-select"*/>
                            <option value="select">select department</option>
                            <option value="two">two</option>
                            <option value="three">three</option>
                        </select>
                    </div>
                </div>

                <div className="">
                    <label className="text-base lg:font-semibold" htmlFor="">Description</label><br />
                    <textarea onChange={handleOnChange} className="border rounded p-2 mt-1 w-full" id="description" required cols={30} rows={7} placeholder="Write Details"></textarea>
                </div>

                <div className="text-center">
                    <input onClick={handleSubmit} type="submit" className="cursor-pointer my-4 bg-blue-500 text-white font-semibold py-2 lg:py-3 px-5 lg:px-10 rounded-lg" value="Assign Department" />
                </div>
            </form>
        </div>
    );
};

export default CreateDepartment;