import React from 'react';

const CreateNewUser = () => {
    return (
        <div className="flex mb-8 justify-center">
            <div className="w-11/12 md:w-4/6 lg:w-2/4 xl:w-2/5">
                <div className="p-4 rounded-md shadow-lg border">
                    <h2 className="text-2xl font-bold text-center mb-6 mt-2">Create A New User</h2>
                    <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                        <i className="fas fa-user mx-3"></i>
                        <input type="text" placeholder="Enter Name" className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                    </div>
                    <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                        <i className="fas fa-envelope mx-3"></i>
                        <input type="text" placeholder="Enter Email Address" className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                    </div>
                    <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                        <i className="fas fa-phone-alt mx-3"></i>
                        <input type="text" placeholder="Enter Your Phone Number" className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                    </div>
                    <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                        <i className="fas fa-lock mx-3"></i>
                        <input type="password" placeholder="Enter Your Password" className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                    </div>
                    <div className="text-center mb-5">
                        <button className="py-2 px-10 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600">Create User</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewUser;