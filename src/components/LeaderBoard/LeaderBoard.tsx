import React from 'react';

const LeaderBoard = () => {
    return (
        <div>
            <div className="flex mx-16 items-center my-3 justify-between">
                <h1 className="text-2xl font-bold">Leader Board</h1>

                <select className="border px-8" name="" id="">
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
        
            <div className="shadow rounded-lg p-5">
                <div className="flex w-full justify-between">
                    <h5 className="w-1/4 text-xl font-semibold">Position</h5>
                    <h5 className="w-1/4 text-center text-xl font-semibold">Name</h5>
                    <h5 className="w-1/2 text-right text-xl font-semibold">Earned Points</h5>
                </div>

                <div className="flex shadow mt-3 py-2 px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-semibold text-lg">1</h5>
                    <h5 className="w-1/4 font-semibold text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-semibold text-lg text-right">560</h5>
                </div>

                <div className="flex shadow mt-3 py-2 px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-semibold text-lg">2</h5>
                    <h5 className="w-1/4 font-semibold text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-semibold text-lg text-right">560</h5>
                </div>

                <div className="flex shadow mt-3 py-2 px-5 bg-gray-200 rounded-lg">
                    <h5 className="w-1/4 font-semibold text-lg">3</h5>
                    <h5 className="w-1/4 font-semibold text-lg text-center">Habibullah Bahar Piash</h5>
                    <h5 className="w-1/2 font-semibold text-lg text-right">560</h5>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;