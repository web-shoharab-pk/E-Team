import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link} from 'react-router-dom';

const PricingArea = () => {
    return (
        <div className="container mx-auto px-3 lg:px-16 my-6 lg:my-12">
            <div className="lg:grid lg:grid-cols-3 lg:border-t border-b border-gray-400">
                <div className="">
                    <div className="px-3 py-6 lg:p-8 text-center pb-8">
                        <div className="pb-8 lg:pb-20">
                            <h2 className="text-5xl pb-3 font-light">Free</h2>
                            <p className="text-xl">For individuals and teams looking to be more productive.</p>
                        </div>
                        
                        <div className="text-5xl py-4 lg:py-12">
                            <span className="text-base">$</span>
                            0
                            <span className="text-base">USD</span>
                        </div>

                        <div className="pt-12">
                            <Link to="" className="border text-md lg:text-lg border-blue-500 bg-none text-blue-500 font-semibold py-2 px-6 lg:px-9 rounded-md"><span>Get started</span></Link>
                        </div>
                    </div>

                    <div className="p-8 border-t border-gray-400 mb-4">
                        <ul>
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">Unlimited cards</span>
                            </li>

                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">Unlimited members</span>
                            </li>

                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">Up to 10 boards</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">1 Power-Up per board</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">Unlimited storage (10MB/file)</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">50 automated command runs per month</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">Unlimited activity log</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">Assignee and due dates</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">iOS and Android mobile apps</span>
                            </li>
                            
                            <li className="pb-2 flex items-center">
                                <FontAwesomeIcon className="text-green-500 block mr-3" icon={faCheck} />
                                <span className="block text-lg">2-factor authentication</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t lg:border-t-0 border-b lg:border-b-0 lg:border-l bg-blue-100 lg:border-r border-gray-400">
                    <div className="p-8 text-center">
                        <div className="pb-6">
                            <h2 className="text-5xl pb-3 font-light">Premium</h2>
                            <p className="text-xl">For teams that need to track multiple projects and visualize work in a variety of ways. Best for teams up to 100.</p>
                        </div>

                        <div className="">
                            <div className="text-5xl p-12 pb-2">
                                <span className="text-base">$</span>
                                10
                                <span className="text-base">USD</span>
                            </div>

                            <p className="text-base text-gray-400">per user per month billed annually ($12.50 billed monthly)</p>
                        </div>
                        
                        <div className="pt-10">
                            <Link to="" className="border text-md lg:text-lg border-blue-500 bg-none text-blue-500 font-semibold py-2 px-6 lg:px-9 rounded-md"><span>Try to Free</span></Link>
                        </div>
                    </div>
                
                    <div className="p-8 border-t border-gray-400 mb-4">
                        <h4 className="text-xl font-semibold pb-3">Everything in Free, plus:</h4>

                        <ul>
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Unlimited boards</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Unlimited Power-Ups</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">
                                    Dashboard view 
                                    <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">New</span>
                                </span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Timeline view
                                    <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">New</span>
                                </span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Workspace Table view
                                    <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">BETA</span>
                                </span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Calendar view
                                    <span className="bg-blue-800 px-2 py-1 text-sm text-white rounded-md ml-3">New</span>
                                </span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Advanced checklists</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Map view</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">1,000 automated command runs per Workspace + 200 per user, up to 6,000 per month</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Unlimited storage (250MB/file)</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Admin and security features</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Workspace-level templates</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Collections</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Observers</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Single board guests</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Custom backgrounds & stickers</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Saved searches</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Priority support</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Google Apps sign-on</span>
                            </li>
                            
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Simple data export</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <div className="p-8 text-center pb-8">
                        <div className="pb-5">
                            <h1 className="text-5xl pb-3 font-light">Custom</h1>
                            <h4 className="text-xl">For companies that need enhanced control, security, and support.</h4>
                        </div>

                        <div>
                            <div className="text-lg">
                                Est. cost for 
                                <input className="mx-2 text-center border-b border-gray-500" type="number" value="25" min="25" max="5000" />
                                users
                            </div>

                            <input className="w-full bg-gray-200 appearance-none mt-7 h-2 rounded-lg" type="range" step="1" value="25" min="25" max="5000" />
                        </div>

                        <div className="">
                            <div className="text-5xl py-9 pb-2">
                                <span className="text-base">$</span>
                                17.50
                                <span className="text-base">USD</span>
                            </div>

                            <p className="text-base text-gray-400">per user per month billed annually ($210.00 annual price per user)</p>
                        </div>

                        <div className="pt-10">
                            <Link to="" className="border text-md lg:text-lg border-blue-500 bg-none text-blue-500 font-semibold py-2 px-6 lg:px-9 rounded-md"><span>Contact sales</span></Link>
                        </div>
                    </div>
                
                    <div className="p-8 border-t my-px border-gray-400 mb-4">
                        <h4 className="text-xl font-semibold pb-3">Everything in Business Class, plus:</h4>

                        <ul>
                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Organization wide permissions</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Organization visible boards</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Public board management</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Multi-board guests</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Attachment permissions</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Power-Up administration</span>
                            </li>

                            <li className="flex items-center pb-2">
                                <FontAwesomeIcon icon={faCheck} className="block text-green-500 mr-3" />
                                <span className="block text-lg">Unlimited automated command runs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingArea;