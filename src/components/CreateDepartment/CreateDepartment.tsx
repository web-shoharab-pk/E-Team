import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/firestore";

export const db = firebase.firestore();

type Inputs = {
    name: string,
    type: string,
    description: string
};
  
const CreateDepartment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [success, setSuccess] = useState('');

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        const {name, type, description} = data;
        db.collection("departments").add({
            name: name,
            type: type,
            description: description
        })
        .then(() => {
            setSuccess("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    return (
        <div className="shadow lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded-lg">
            <h2 className="text-center text-2xl pb-4 lg:text-3xl font-medium">Create Department</h2>

            <form action="" onSubmit={handleSubmit(onSubmit)} className="form mt-4">
                <div className="lg:flex w-full mb-5 lg:space-x-16">
                    <div className="lg:w-5/6">
                        <label className="text-base lg:font-semibold" htmlFor="">Name</label><br />
                        <input {...register("name")} className="border rounded mt-1 p-2 w-full" id="name" type="text" required placeholder="Write Department Name" />
                    </div>

                    <div className="lg:w-5/6">
                        <label className="text-base lg:font-semibold" htmlFor="">Select Type</label><br />
                        <select {...register("type")} id="type" className="border rounded mt-1 p-2 w-full" required /*name="department" id="department-select"*/>
                            <option value="select">select department</option>
                            <option value="two">two</option>
                            <option value="three">three</option>
                        </select>
                    </div>
                </div>

                <div className="">
                    <label className="text-base lg:font-semibold" htmlFor="">Description</label><br />
                    <textarea {...register("description")} className="border rounded p-2 mt-1 w-full" id="description" required cols={30} rows={7} placeholder="Write Details"></textarea>
                </div>

                <div className="text-center">
                    <input type="submit" className="cursor-pointer my-4 bg-blue-500 text-white font-semibold py-2 lg:py-3 px-5 lg:px-10 rounded-lg" value="Assign Department" />
                </div>
            </form>
            <p className="text-center text-green-600 pt-8 pb-4 text-lg font-normal">{success && success}</p>
        </div>
    );
};

export default CreateDepartment;