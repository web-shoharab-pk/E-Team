import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Topbar from '../Topbar/Topbar';

const FeedBacks = () => {
    return (
        <>
            <Topbar />

            <div className="">
                <div className="lg:flex mt-8 mb-6 lg:mb-px lg:mx-16 lg:space-x-10">
                    <div className="w-11/12 lg:w-2/3 mx-auto lg:mx-px">
                        <h1 className="text-xl lg:text-3xl font-bold mb-7">Assignment: How to email in professional way</h1>

                        <div className="mb-10 lg:mb-px shadow rounded-xl py-4 px-2 lg:px-10">
                            <h4 className="text-center text-md lg:text-xl font-semibold lg:font-bold mb-2 lg:mb-4">Give your feedback on this training session</h4>

                            <div className="block mt-4 lg:mt-8 text-center space-x-4 lg:space-x-6">
                                    <FontAwesomeIcon className="text-md lg:text-2xl text-gray-200 cursor-pointer" icon={faStar} />
                                    <FontAwesomeIcon className="text-md lg:text-2xl text-gray-200 cursor-pointer" icon={faStar} />
                                    <FontAwesomeIcon className="text-md lg:text-2xl text-gray-200 cursor-pointer" icon={faStar} />
                                    <FontAwesomeIcon className="text-md lg:text-2xl text-gray-200 cursor-pointer" icon={faStar} />
                                    <FontAwesomeIcon className="text-md lg:text-2xl text-gray-200 cursor-pointer" icon={faStar} />
                                </div>

                            <form className="form mt-3 lg:mt-6">
                                <textarea className="w-full rounded-lg pt-2 px-5 border border-black" name="" id="" cols={30} rows={8} placeholder="Write your feedback so that we can improve the session more"></textarea><br />

                                <input className="block mx-auto cursor-pointer bg-white border text-md lg:text-lg border-blue-500 text-blue-500 mt-4 lg:mt-2 font-semibold py-1.5 lg:py-2 px-8 lg:px-12 rounded-3xl" type="submit" value="Submit" />
                            </form>

                            <div className="flex mt-9 lg:mt-12 justify-between">
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
                                <h3 className="text-sm lg:text-lg mb-2 font-bold">Quiz 01</h3>
                                <h3 className="cursor-pointer border text-md lg:text-lg border-blue-500 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">Assignment</h3>
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
            </div>
        </>
    );
};

export default FeedBacks;