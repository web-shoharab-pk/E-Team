import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const AllUserList = () => {
    return (
        <div className="shadow mx-0 lg:mx-8 mt-4 pt-4 pb-16 rounded-lg">
            <h2 className="text-center text-2xl py-3 font-semibold">All User List</h2>
        
                <section className="text-gray-700">
                    <div className="w-full px-2 lg:px-16 pt-2">
                        <details className="mb-2 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Core Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>

                                <table className="pt-2 rounded-t-lg m-5 w-11/12 mx-auto text-gray-800">
                                    <tr className="text-left border-t border-b-4 border-gray-300">
                                        <th className="px-4 py-3">Name</th>
                                        <th className="px-4 py-3">Email</th>
                                        <th className="px-4 py-3">Mobile</th>
                                        <th className="px-4 py-3">Designation</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                    
                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3">Jill</td>
                                        <td className="px-4 py-3">jill@gmail.com</td>
                                        <td className="px-4 py-3">01800000000</td>
                                        <td className="px-4 py-3">Team Leader</td>
                                        <td className="px-4 py-3">Edit</td>
                                    </tr> 

                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3">Jill</td>
                                        <td className="px-4 py-3">jill@gmail.com</td>
                                        <td className="px-4 py-3">01800000000</td>
                                        <td className="px-4 py-3">Team Leader</td>
                                        <td className="px-4 py-3">Edit</td>
                                    </tr> 

                                    <tr className="border-b border-gray-200">
                                        <td className="px-4 py-3">Jill</td>
                                        <td className="px-4 py-3">jill@gmail.com</td>
                                        <td className="px-4 py-3">01800000000</td>
                                        <td className="px-4 py-3">Team Leader</td>
                                        <td className="px-4 py-3">Edit</td>
                                    </tr> 
                                </table>
                            </div>
                        </details>
                    </div>

                    <div className="w-full px-2 lg:px-16">
                        <details className="mb-4 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Digital Marketing Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>

                    <div className="w-full px-2 lg:px-16">
                        <details className="mb-4 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Tech Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>

                    <div className="w-full px-2 lg:px-16">
                        <details className="mb-4 duration-500 rounded-md border">
                            <summary className="text-md lg:text-lg duration-500 font-semibold bg-gray-100 py-2 px-4">
                                Content Management Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative mx-auto lg:mx-0 block text-right my-2">
                                    <input type="search" className="shadow-sm overflow-x-hidden rounded-3xl border -mx-1 lg:-mx-0 px-1 py-1.5 lg:p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 -mr-1.5 lg:-mr-0 py-1.5 lg:py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>
                </section>
        </div>
    );
};

export default AllUserList;