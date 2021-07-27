import React from 'react';
import { Link } from "react-router-dom";

const Course = ({thumbnail}) => {
    return (
        <div className="w-full md:w-1/2  lg:w-1/2">
            <div className="m-2 p-2 rounded-md bg-white border shadow-md  lg:flex">
                <div className="thumbnail text-center p-3 md:w-full lg:w-1/3">
                    <img src={thumbnail} alt="" className="w-full" />
                </div>
                <div className="p-1 lg:w-2/3">
                    <h2 className="font-medium text-lg">Web Design and Development</h2>
                    <p>Jhankar Mahbub</p>
                    <Link to="/assign-course" className="m-1 px-5 py-1 rounded-full border border-blue-500 bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium ">Assign</Link>
                    <button className="m-1 px-5 py-1 rounded-full border border-blue-500 bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium ">Edit</button>
                    <button className="m-1 px-5 py-1 rounded-full border border-blue-500 bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium ">Continue as user</button>
                </div>
            </div>
        </div>
    );
};

export default Course;