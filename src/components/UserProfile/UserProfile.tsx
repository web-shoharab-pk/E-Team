import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../Assets/images/user.png';
import { UserDataContext } from '../../Contexts/UserDataContext';
import db from '../Firebase/Firebase';

const UserProfile = () => {
    const {userData} = useContext(UserDataContext);
    const [userInfo, setUserInfo] = useState({name:"",email:"",phone:"",address:"",designation:"",role:""})

    useEffect(()=>{
        getUserInfo(userData?.id).then((info:any)=>setUserInfo({...userInfo,...info}))
    },[userData?.id, userInfo])


    const getUserInfo = (userId: string) => {
        return db.collection('users').doc(userId).get().then((info:any) => {
          return info.data()
        })
          .catch((error:any) => {
            console.log(error);
      
          })
      }
    return (
        <div className="w-full md:w-1/2 my-5 mx-auto rounded border border-gray-100 shadow p-4">
            <h2 className="text-lg font-medium text-center">User profile</h2>
            <img src={profilePic} className="w-20 mx-auto my-3" alt="" />
            <div className="flex border-b mt-6">
                <div className="w-1/3 font-medium" >Name </div>
                <div className="w-2/3" >{userInfo?.name} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Email </div>
                <div className="w-2/3" >{userInfo?.email} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Phone </div>
                <div className="w-2/3" >{userInfo?.phone} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Address </div>
                <div className="w-2/3" >{userInfo?.address} </div>
            </div>
            <div className="flex border-b mt-10">
                <div className="w-1/3 font-medium" >Designation </div>
                <div className="w-2/3" >{userInfo?.designation} </div>
            </div>
            <div className="flex border-b mt-3">
                <div className="w-1/3 font-medium" >Dashbord Role </div>
                <div className="w-2/3" >{userInfo?.role} </div>
            </div>
            <div className="flex justify-between mt-6">
                <Link to="#" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 m-1">Change Password</Link>
                <Link to="/edit-profile" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 m-1">Edit</Link>
                <Link to="#" className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1 m-1">Block</Link>
                <Link to="#" className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1 m-1">Delete</Link>
            </div>
        </div>
    );
};

export default UserProfile;