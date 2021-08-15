import React from 'react';
import Topbar from '../Dashboard/Topbar/Topbar';

const QuizArea = () => {
    return (
        <>
            <Topbar />
        
            <div className="lg:flex mt-8 mb-6 lg:mb-px lg:mx-16 lg:space-x-10">
                    <div className="w-11/12 lg:w-2/3 mx-auto lg:mx-px">
                        <h1 className="text-xl lg:text-3xl font-bold mb-7">Quiz: How to email in professional way</h1>

                        <div className="mb-10 lg:mb-px shadow rounded-xl py-4 px-2 lg:px-10">
                            <h4 className="text-center text-lg lg:text-xl font-bold mb-4">1/5</h4>
                            <p className="text-md lg:text-lg font-lg text-justify lg:font-semibold">In Publishing graphic design, Lorem ipsum is a placeholder tet commonly used to demonstrate the visual form of a document or a typeface without?</p>
                        
                            <div className="mt-6 lg:mx-8">
                                <div className="flex justify-evenly lg:justify-between mb-5">
                                    <button className="w-5/12 cursor-pointer border text-base lg:text-lg border-blue-500 font-md lg:font-semibold py-2 px-1.5 lg:px-px rounded-lg">Something 01</button>
                                    <button className="w-5/12 cursor-pointer border text-base lg:text-lg border-blue-500 font-md lg:font-semibold py-2 px-1.5 lg:px-px rounded-lg">Something 02</button>
                                </div>

                                <div className="flex justify-evenly lg:justify-between mb-5">
                                    <button className="w-5/12 cursor-pointer border text-base lg:text-lg border-blue-500 font-md lg:font-semibold py-2 px-1.5 lg:px-px rounded-lg">Something 03</button>
                                    <button className="w-5/12 cursor-pointer border text-base lg:text-lg border-blue-500 font-md lg:font-semibold py-2 px-1.5 lg:px-px rounded-lg">Something 04</button>
                                </div>
                            </div>

                            <div className="flex mt-9 lg:mt-16 justify-between">
                                <button className="cursor-pointer border text-md lg:text-lg border-blue-500 bg-blue-500 text-white font-md lg:font-semibold py-1.5 lg:py-2 px-4 lg:px-9 rounded-3xl">Previous</button>
                                <button className="cursor-pointer border text-md lg:text-lg border-blue-500 bg-blue-500 text-white font-md lg:font-semibold py-1.5 lg:py-2 px-7 lg:px-12 rounded-3xl">Next</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-11/12 lg:w-1/3 mx-auto lg:mx-px">
                        <div className="flex items-center justify-center mb-7">
                            <span className="font-semibold lg:font-bold text-md lg:text-lg mr-3">Course Progress:</span>
                            
                            <div className="relative w-1/2 flex items-center pt-1">
                                <div className="w-11/12 overflow-hidden h-3 text-xs flex rounded-lg bg-gray-300">
                                    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                </div>
                                
                                <h5 className="w-1/12 text-sm ml-2 lg:ml-3">30%</h5>
                            </div>
                        </div>

                        <div className="rounded-xl px-3 lg:px-5 pt-5 lg:pt-8 pb-6 lg:pb-px shadow-lg lg:ml-4">
                            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
                                <h3 className="mb-2"><span className="text-sm lg:text-lg font-bold">Video 01:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in professional way</span></h3>
                                <h3 className="cursor-pointer border text-lg border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">Quiz 01</h3>
                                <h3 className="font-lg lg:font-bold">Assignment</h3>
                            </div>
                            
                            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
                                <h3><span className="text-sm lg:text-lg font-bold">Video 02:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
                            </div>

                            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
                                <h3><span className="text-sm lg:text-lg font-bold">Video 03:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
                            </div>
                            
                            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
                                <h3><span className="text-sm lg:text-lg font-bold">Video 04:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
                            </div>
                            
                            <div className="p-3 lg:p-4 rounded-xl mb-3 bg-gray-100">
                                <h3><span className="text-sm lg:text-lg font-bold">Video 05:</span> <span className="text-sm lg:text-lg font-md lg:font-semibold">How to email in way</span></h3>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default QuizArea;