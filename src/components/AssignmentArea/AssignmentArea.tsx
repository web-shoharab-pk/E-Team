import React from 'react';
import Topbar from '../Topbar/Topbar';

const AssignmentArea = () => {
    return (
        <>
            <Topbar />

            <div className="mt-6">
                <div className="flex items-center">
                    <h1 className="w-1/2 text-3xl ml-10 font-bold">Assignment: How to email in professional way</h1>

                    <div className="w-1/2 flex items-center">
                        <span className="font-bold text-lg mr-3">Course Progress:</span>
                        

                        <div className="relative w-1/2 flex items-center pt-1">
                            <div className="w-11/12 overflow-hidden h-3 text-xs flex rounded-lg bg-gray-300">
                                <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                            
                            <h5 className="w-1/12 text-sm ml-3">30%</h5>
                        </div>
                    </div>
                </div>

                <div className="flex mt-8 ml-16 space-x-10">
                    <div className="w-2/3 shadow rounded-xl py-4  px-10">
                        <h4 className="text-center text-lg font-semibold mb-4">Submit your Assignment</h4>
                        <p className="text-lg font-semibold"><strong>Instruction:</strong> In Publishing graphic design, Lorem ipsum is a placeholder tet commonly used to demonstrate the visual form of a document or a typeface without?</p>
                    
                        <form className="form mt-8">
                            <textarea className="w-full rounded-lg pt-2 px-5 border border-black" name="" id="" cols={30} rows={8} placeholder="Input your assignment link"></textarea><br />

                            <input className="block mx-auto cursor-pointer bg-white border text-lg border-blue-500 text-blue-500 mt-2 font-semibold py-2 px-12 rounded-3xl" type="submit" value="Submit" />
                        </form>

                        <div className="flex mt-12 justify-between">
                            <button className="cursor-pointer border text-lg border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded-3xl">Previous Quiz</button>
                            <button className="cursor-pointer border text-lg border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded-3xl">Next Quiz</button>
                        </div>
                    </div>

                    <div className="w-1/4 rounded-xl px-5 pt-8 shadow-lg ml-10">
                        <div className="p-4 rounded-xl mb-3 bg-gray-100">
                            <h3><strong>Video 01:</strong> <span className="font-semibold">How to email in professional way</span></h3>
                            <h3 className="font-bold">Quiz 01</h3>
                            <h3 className="cursor-pointer border text-lg border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">Assignment</h3>
                        </div>
                        
                        <div className="p-4 rounded-xl mb-3 bg-gray-100">
                            <h3><strong>Video 02:</strong> How to email in way</h3>
                        </div>

                        <div className="p-4 rounded-xl mb-3 bg-gray-100">
                            <h3><strong>Video 03:</strong> How to email in way</h3>
                        </div>
                        
                        <div className="p-4 rounded-xl mb-3 bg-gray-100">
                            <h3><strong>Video 04:</strong> How to email in way</h3>
                        </div>
                        
                        <div className="p-4 rounded-xl mb-3 bg-gray-100">
                            <h3><strong>Video 05:</strong> How to email in way</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssignmentArea;