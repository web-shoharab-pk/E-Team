import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationManagement = () => {
    return (
        <div className="w-full md:w-1/2 my-5 mx-auto rounded border border-gray-100 shadow p-4">
            <h2 className="text-lg font-medium text-center mb-8">User Management</h2>
            <div className="flex">
                <div className="w-1/2">
                    <Link className="block text-center m-4 rounded border border-gray-100 shadow p-4" to="/inputApplication">
                        <i className="fas fa-keyboard fa-2x"></i>
                        <div className="text-lg mt-2 font-bold">Input Application</div>
                    </Link>
                </div>
                
                <div className="w-1/2">
                    <Link className="block text-center m-4 rounded border border-gray-100 shadow p-4" to="/applicationList">
                        <i className="fas fa-th-large fa-2x"></i>
                        <div className="text-lg mt-2 font-bold">All Application</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ApplicationManagement;