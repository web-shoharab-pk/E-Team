import React from 'react';

const LeaderBoard = () => {
    return (
        <div>
            <div className="flex lg:mx-16 items-center my-5  justify-between">
                <h1 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-0 lg:font-bold">Leader Board</h1>

                <select className="border lg:px-8" name="" id="">
                    <option value="">Select Month</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>
            </div>
        
            <div className="shadow rounded-lg p-2 lg:p-5">
                <div className="flex w-full justify-between">
                    <h5 className="w-1/4 text-md lg:text-xl font-semibold">Position</h5>
                    <h5 className="w-1/4 text-center text-md lg:text-xl font-semibold">Name</h5>
                    <h5 className="w-1/2 text-right text-md lg:text-xl font-semibold">Earned Points</h5>
                </div>

                <div className="flex shadow mt-3 py-2 px-2 lg:px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg">1</h5>
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-medium lg:font-semibold text-md lg:text-lg text-right">560</h5>
                </div>

                <div className="flex shadow mt-3 py-2 px-2 lg:px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg">1</h5>
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-medium lg:font-semibold text-md lg:text-lg text-right">560</h5>
                </div>

                <div className="flex shadow mt-3 py-2 px-2 lg:px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg">1</h5>
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-medium lg:font-semibold text-md lg:text-lg text-right">560</h5>
                </div>
                
                <div className="flex shadow mt-3 py-2 px-2 lg:px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg">1</h5>
                    <h5 className="w-1/4 font-medium lg:font-semibold text-md lg:text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-medium lg:font-semibold text-md lg:text-lg text-right">560</h5>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;