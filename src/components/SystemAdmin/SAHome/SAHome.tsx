import React from 'react';

const SAHome = () => {
    return (
        <div className="homeArea">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <div className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Company Overview</h2>
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <div className="flex flex-wrap -m-4">
                                    <div className="w-1/2 text-center">
                                        <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">Active Company</h2>
                                        <p className="text-4xl text-gray-900 font-medium title-font mb-4">03</p>
                                    </div>
                                    <div className="w-1/2 text-center">
                                        <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">Pending Company </h2>
                                        <p className="text-4xl text-gray-900 font-medium title-font mb-4">02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SAHome;