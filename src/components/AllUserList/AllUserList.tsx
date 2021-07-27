import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const AllUserList = () => {
    return (
        <div className="shadow mx-8 mt-4 pt-4 pb-16 rounded-lg">
            <h2 className="text-center text-2xl py-3 font-semibold">All User List</h2>
        
                <section className="text-gray-700">
                    <div className="w-full px-16 pt-2">
                        <details className="mb-2 rounded-md border">
                            <summary className="text-lg font-semibold bg-gray-100 py-2 px-4">
                                Core Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative block text-right my-2">
                                    <input type="search" className="shadow-sm rounded-3xl border p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="flex justify-between px-3 border-t border-b-4 py-2">
                                        <h5 className="font-semibold">Name</h5>
                                        <h5 className="font-semibold">Email</h5>
                                        <h5 className="font-semibold">Mobile</h5>
                                        <h5 className="font-semibold">Designation</h5>
                                        <h5 className="font-semibold">Action</h5>
                                    </div>
                                    
                                    <div className="flex justify-between px-3 border-b py-2">
                                        <h5 className="font-semibold">Piash</h5>
                                        <h5 className="font-semibold">Piash@gmail.com</h5>
                                        <h5 className="font-semibold">01800000000</h5>
                                        <h5 className="font-semibold">Team Leader</h5>
                                        <h5 className="font-semibold">Edit</h5>
                                    </div>

                                    <div className="flex justify-between px-3 border-b py-2">
                                        <h5 className="font-semibold">Piash</h5>
                                        <h5 className="font-semibold">Piash@gmail.com</h5>
                                        <h5 className="font-semibold">01800000000</h5>
                                        <h5 className="font-semibold">Team Leader</h5>
                                        <h5 className="font-semibold">Edit</h5>
                                    </div>

                                    <div className="flex justify-between px-3 border-b py-2">
                                        <h5 className="font-semibold">Piash</h5>
                                        <h5 className="font-semibold">Piash@gmail.com</h5>
                                        <h5 className="font-semibold">01800000000</h5>
                                        <h5 className="font-semibold">Team Leader</h5>
                                        <h5 className="font-semibold">Edit</h5>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className="w-full px-16">
                        <details className="mb-4 rounded-md border">
                            <summary className="text-lg font-semibold bg-gray-100 py-2 px-4">
                                Digital Marketing Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative block text-right my-2">
                                    <input type="search" className="shadow-sm rounded-3xl border p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>

                    <div className="w-full px-16">
                        <details className="mb-4 rounded-md border">
                            <summary className="text-lg font-semibold bg-gray-100 py-2 px-4">
                                Tech Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative block text-right my-2">
                                    <input type="search" className="shadow-sm rounded-3xl border p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
                                        <FontAwesomeIcon className="" icon={faSearch} />
                                    </div>
                                </div>
                             </div>
                        </details>
                    </div>

                    <div className="w-full px-16">
                        <details className="mb-4 rounded-md border">
                            <summary className="text-lg font-semibold bg-gray-100 py-2 px-4">
                                Content Management Team
                            </summary>

                            <div className="px-8 mt-3 mb-10 py-2">
                                <div className="relative block text-right my-2">
                                    <input type="search" className="shadow-sm rounded-3xl border p-2" placeholder="Search here" />
                                    
                                    <div className="absolute bg-gray-300 py-2 px-4 top-px right-px rounded-r-3xl pin-r pin-t text-purple-lighter">
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