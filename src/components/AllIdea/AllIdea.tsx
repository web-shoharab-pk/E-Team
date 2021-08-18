import React from 'react';
import {Link} from 'react-router-dom';

const AllIdea = () => {
    return (
        <div className="lg:mx-7 mt-2">
            <div className="flex mb-8 lg:mx-4 items-center justify-between">
                <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">All Idea</h2>
                <Link className="bg-blue-500 text-white lg:text-xl lg:font-medium p-2 rounded-lg" to="/shareIdea">Share Your Idea</Link>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap mb-8 justify-center">
                <div className="w-1/2 mb-2 lg:mb-0">
                    <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold bg-blue-500 text-white lg:font-bold py-2 rounded-lg">All</button>
                </div>

                <div className="w-1/2 mb-2 lg:mb-0">
                    <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold lg:font-bold py-2 rounded-lg">Campaign</button>
                </div>
                
                <div className="w-1/2">
                    <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold lg:font-bold py-2 rounded-lg">Sales Idea</button>
                </div>
                
                <div className="w-1/2">
                    <button className="w-11/12 cursor-pointer border text-md lg:text-lg border-blue-500 font-semibold lg:font-bold py-2 rounded-lg">Tech Idea</button>
                </div>
            </div>
        
            <div className="shadow rounded-md mb-4 px-1.5 py-3 lg:p-3">
                <h5 className="text-md text-center lg:text-left lg:text-lg border-b pb-2">
                    <strong className="block lg:inline lg:mr-10">Habibullah Bahar</strong> 20-July-2021, 05:36PM
                </h5>

                <div className="mt-2 w-full">
                    <h5 className="text-justify mb-3"><strong className="mr-3">Title:</strong>will generate 3% of extra profit</h5>
                    <h5 className="text-justify mb-3"><strong className="mr-3">Benefits:</strong>In Published and graphic design, Lorem ipsum is a</h5>
                    <h5 className="text-justify mb-3"><strong className="mr-3">How to apply:</strong>Lorem ipsum dolor sit amet.</h5>
                    <h5 className="text-justify mb-3"><strong className="mr-3">Details:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus exercitationem placeat vel, cupiditate, porro cum consequatur unde commodi mollitia adipisci temporibus totam?</h5>
                </div>
            </div>

            <div className="shadow rounded-md mb-4 px-1.5 py-3 lg:p-3">
                <h5 className="text-md text-center lg:text-left lg:text-lg border-b pb-2">
                    <strong className="block lg:inline lg:mr-10">Habibullah Bahar</strong> 20-July-2021, 05:36PM
                </h5>

                <div className="mt-2 w-full">
                    <h5 className="text-justify mb-3"><strong className="mr-3">Title:</strong>will generate 3% of extra profit</h5>
                    <h5 className="text-justify mb-3"><strong className="mr-3">Benefits:</strong>In Published and graphic design, Lorem ipsum is a</h5>
                    <h5 className="text-justify mb-3"><strong className="mr-3">How to apply:</strong>Lorem ipsum dolor sit amet.</h5>
                    <h5 className="text-justify mb-3"><strong className="mr-3">Details:</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus exercitationem placeat vel, cupiditate, porro cum consequatur unde commodi mollitia adipisci temporibus totam?</h5>
                </div>
            </div>
        </div>
    );
};

export default AllIdea;