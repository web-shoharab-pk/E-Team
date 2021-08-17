import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../Contexts/UserDataContext';
import { getCompanyInfo } from '../Authentication/loginmanager';
import coLogo from '../../Assets/images/co_logo.png';

const CompanyProfile = () => {
    const { userData } = useContext(UserDataContext);
    const [companyInfo, setCompanyInfo] = useState({ co_id: "", company_name: "", email: "", phone: "", address: "", co_description: "", photoURL: "" })


    useEffect(() => {
        getCompanyInfo(userData?.co_id).then((info: any) => setCompanyInfo({ ...companyInfo, ...info }))
    }, [])
    return (
        <div className="w-full md:w-1/2 my-5 mx-auto rounded border border-gray-100 shadow p-4">
            <h2 className="text-lg font-medium text-center">Company profile</h2>
            {
                companyInfo.photoURL ?
                    <img src={companyInfo.photoURL} className="w-20 mx-auto my-3" alt="" /> :
                    <img src={coLogo} className="w-20 mx-auto my-3" alt="" />
            }
            <div className="flex border-b mt-6">
                <div className="w-1/3 font-medium" >Company Name </div>
                <div className="w-2/3" >{companyInfo?.company_name}</div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Email </div>
                <div className="w-2/3" >{companyInfo?.email}</div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Phone </div>
                <div className="w-2/3" >{companyInfo?.phone} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Address </div>
                <div className="w-2/3" >{companyInfo?.address} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Company Description </div>
                <div className="w-2/3" >{companyInfo?.co_description} </div>
            </div>
            <div className="flex justify-between mt-6">
                <Link to="/edit-profile" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 m-1">Edit Company Profile</Link>
            </div>
        </div>
    );
};

export default CompanyProfile;