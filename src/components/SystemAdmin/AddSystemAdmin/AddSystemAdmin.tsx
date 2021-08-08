import React from 'react';

const AddSystemAdmin = () => {
    return (
        <div className=" flex flex-col justify-center items-center">
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:1/4 mt-14">
                <div className="my-5 px-4 py-5 border border-gray-300 shadow-xl rounded-lg">
                    <div className="my-5">
                        <h3 className="text-3xl font-bold text-center">Add system admin</h3>
                    </div>

                    <form className="px-8 pt-5 bg-white rounded">

                        <div className="flex items-center mb-4 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <input
                                id="full-name"
                                type="text"
                                name="full_name"
                                // onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="flex items-center mb-4 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                // onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="E-Mail Address"
                            />
                        </div>

                        <div className="flex items-center mb-4 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="phone"
                                // onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="mt-5 text-center">
                            <button
                                className="w-40 border border-blue-500 rounded-full px-4 py-2 font-bold text-white hover:text-blue-500 bg-blue-500 hover:bg-white focus:outline-none focus:shadow-outline" type="button"
                            // onClick={handleSignin} 
                            >
                                Send Login Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSystemAdmin;