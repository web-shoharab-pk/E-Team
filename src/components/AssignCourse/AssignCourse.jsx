import React from 'react';

const AssignCourse = () => {
    return (
        <div className="assing-course m-4">
            <div className="w-full lg:w-2/3 lg:m-auto border shadow-md px-2 py-4 rounded-lg">
                <h2 className="text-xl text-center font-bold">Assign Course</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-2">
                        <h3 className="text-md font-medium">Team Name</h3>
                        <select className="w-40 border border-gray-200 rounded mb-2">
                            <option value="dm">Select Team</option>
                            <option value="dm">DM Team</option>
                            <option value="dm">DM Team</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 p-2">
                        <h3 className="text-md font-medium">User Name</h3>
                        <select className="w-40 border border-gray-200 rounded mb-2">
                            <option value="dm">Select User</option>
                            <option value="dm">Piash</option>
                            <option value="dm">Dipu</option>
                            <option value="dm">Masum</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/2 p-2">
                        <h3 className="text-md font-medium">Course Name</h3>
                        <select className="w-40 border border-gray-200 rounded mb-2">
                            <option value="dm">Select Course</option>
                            <option value="dm">Web Design</option>
                            <option value="dm">Spoken English</option>
                        </select>
                    </div>
                    <div className="w-full text-center">
                        <button className="text-md font-medium px-6 py-1 rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 border border-blue-500 ">Assign Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignCourse;