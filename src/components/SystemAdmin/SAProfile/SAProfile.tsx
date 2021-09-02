import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';
import coLogo from '../../../Assets/images/co_logo.png';

const SAProfile = () => {
    const { systemAdminData } = useContext(SystemAdminDataContext);
    
    return (
        <div className="w-full md:w-1/2 my-5 mx-auto rounded border border-gray-100 shadow p-4">
            <h2 className="text-lg font-medium text-center">System Admin profile</h2>
            <img src={coLogo} className="w-20 mx-auto my-3" alt="" />
            <div className="flex border-b mt-6">
                <div className="w-1/3 font-medium" >Name </div>
                <div className="w-2/3" >{systemAdminData?.name}</div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Email </div>
                <div className="w-2/3" >{systemAdminData?.email}</div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Phone </div>
                <div className="w-2/3" >{systemAdminData?.phone} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Role </div>
                <div className="w-2/3" >{systemAdminData?.role} </div>
            </div>
            {/* <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Address </div>
                <div className="w-2/3" >{systemAdminData?.address} </div>
            </div> */}
            <div className="flex justify-between mt-6">
                <Link to="/system-admin/edit-sa-profile" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 m-1">Edit SA Profile</Link>
            </div>
        </div>
    );
};

export default SAProfile;