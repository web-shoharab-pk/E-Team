import React from 'react';
import {Link} from 'react-router-dom';

const AllIdea = () => {
    return (
        <div className="mx-7 mt-2">
            <div className="flex mb-8 mx-4 items-center justify-between">
                <h2 className="text-2xl font-bold">All Idea</h2>
                <Link className="bg-blue-500 text-white text-xl font-medium p-2 rounded-lg" to="/shareIdea">Share Your Idea</Link>
            </div>

            <div className="flex mb-8 justify-center">
                <div className="w-1/2">
                    <button className="w-11/12 cursor-pointer border text-lg border-blue-500 bg-blue-500 text-white font-bold py-2 rounded-lg">All</button>
                </div>

                <div className="w-1/2">
                    <button className="w-11/12 cursor-pointer border text-lg border-blue-500 font-bold py-2 rounded-lg">Campaign</button>
                </div>
                
                <div className="w-1/2">
                    <button className="w-11/12 cursor-pointer border text-lg border-blue-500 font-bold py-2 rounded-lg">Sales Idea</button>
                </div>
                
                <div className="w-1/2">
                    <button className="w-11/12 cursor-pointer border text-lg border-blue-500 font-bold py-2 rounded-lg">Tech Idea</button>
                </div>
            </div>
        
            <div className="shadow rounded-md mb-4 p-3">
                <h5 className="text-lg border-b pb-2">
                    <strong className="mr-10">Habibullah Bahar</strong> 20-July-2021, 05:36PM
                </h5>

                <div className="flex mt-2">
                    <div className="w-2/5">
                        <h5><strong>Title:</strong></h5>
                        <h5><strong>Benefits:</strong></h5>
                        <h5><strong>How to apply:</strong></h5>
                        <h5><strong>Details:</strong></h5>
                    </div>

                    <div>
                        <h5>In Published and graphic design, Lorem ipsum is a</h5>
                        <h5>will generate 3% of extra profit</h5>
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus exercitationem placeat vel, cupiditate, porro cum consequatur unde commodi mollitia adipisci temporibus totam?</h5>
                    </div>
                </div>
            </div>

            <div className="shadow rounded-md p-3">
                <h5 className="text-lg border-b pb-2">
                    <strong className="mr-10">Habibullah Bahar</strong> 20-July-2021, 05:36PM
                </h5>

                <div className="flex mt-2">
                    <div className="w-2/5">
                        <h5><strong>Title:</strong></h5>
                        <h5><strong>Benefits:</strong></h5>
                        <h5><strong>How to apply:</strong></h5>
                        <h5><strong>Details:</strong></h5>
                    </div>

                    <div>
                        <h5>In Published and graphic design, Lorem ipsum is a</h5>
                        <h5>will generate 3% of extra profit</h5>
                        <h5>Lorem ipsum dolor sit amet.</h5>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus exercitationem placeat vel, cupiditate, porro cum consequatur unde commodi mollitia adipisci temporibus totam?</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllIdea;