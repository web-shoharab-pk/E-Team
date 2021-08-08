import React from 'react';

const SystemAdminLogin = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:1/4 mt-14">
                <div className="my-5 px-4 py-5 border border-gray-300 shadow-xl rounded-lg">
                    <div className="mt-5">
                        <h3 className="text-3xl font-bold text-center">E - Team <span className="text-blue-500">Manage</span></h3>
                        <h5 className="py-3 text-xl font-medium text-center">System Admin Login</h5>
                    </div>

                    <form className="px-8 pt-5 bg-white rounded">
                        <div className="flex items-center mb-8 border border-blue-500 rounded-full">
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

                        <div className="flex items-center mb-8 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                // onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mt-5 text-center">
                            <button
                                className="w-36 border border-blue-500 rounded-full px-4 py-2 font-bold text-white hover:text-blue-500 bg-blue-500 hover:bg-white focus:outline-none focus:shadow-outline" type="button"
                            // onClick={handleSignin} 
                            >
                                LogIn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SystemAdminLogin;