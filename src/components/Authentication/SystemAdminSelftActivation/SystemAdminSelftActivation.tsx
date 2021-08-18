import React, { useState, useEffect } from 'react';
import { db } from '../../AllDepartment/AllDepartment';
import { useLocation } from "react-router-dom";
import { systemAdminRegistration } from '../loginmanager';

const SystemAdminSelftActivation = () => {
    const [tokenData, setTokenData] = useState({ token: "", email: "", attempt: 0, name: "", expired_at: "", isActivated: false, phone: "", created_by: "" });
    const [passwords, setPasswords] = useState({ password: "", re_password: "" });
    const [error, setError] = useState({ isError: false, message: "" });
    const [isValid, setIsValid] = useState(false);
    const [showSelfReg, setShowSelfReg] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    // For getting query parameters 
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const email = query.get("email")?.toString();
    const key = query.get("key")?.toString();

    // For getting data form database
    useEffect(() => {
        if (email && key) {
            db.collection("tokens_sys_admin").doc(email).get().then((dataObj: any) => {
                if (dataObj?.exists) {
                    const { token, expired_at, isActivated } = dataObj.data();
                    const isExpired = (new Date() > new Date(expired_at));

                    if (!isActivated && !isExpired && token === key) {
                        setIsValid(true);
                        setTokenData(dataObj.data());
                    } else {
                        isExpired && setError({ isError: true, message: "Your registration token has been expired!" })
                        isActivated && setError({ isError: true, message: "Your account already activated. Please, login to your account" })
                        token !== key && setError({ isError: true, message: "Your registration token does not exist or invalid!" })
                    }
                } else {
                    setError({ isError: true, message: "Your registration token does not exist or invalid!" })
                }
            })
        } else {
            setError({ isError: true, message: "Invalid registration key!" })
        }
    }, [])

    const handleOnChange = (event: any) => {
        setError({ isError: false, message: "" });
        setPasswords({ ...passwords, [event.target.name]: event.target.value });
    }

    const handleActivate = () => {
        const { password, re_password } = passwords;
        if (password && password.length >= 8 && re_password && re_password.length >= 8 && password === re_password) {
            const newUserData = { name: tokenData.name, phone: tokenData.phone, email, address: "", photoURL: "", created_by: tokenData.created_by };
            systemAdminRegistration(email, password, newUserData)
                .then((data: any) => {
                    if (!data?.isError) {
                        setIsActivated(true);
                        setError(data);
                        db.collection('tokens_sys_admin').doc(email).update({...tokenData,isActivated:true}).then(() => {
                            // token data updated in database
                        })
                    } else {
                        setError(data);
                    }
                })
        } else {
            password !== re_password && setError({ isError: true, message: "Password and Re-type password doesn't matched!" })
            password.length >= 8 && re_password.length >= 8 && setError({ isError: true, message: "Password and Re-type password doesn't matched!" })
        }
    }

    return (
        <div className=" flex flex-col justify-center items-center">
            {
                !isValid && error.isError && !showSelfReg &&
                <div className="w-full md:w-1/2 my-10 py-7 px-3 shadow-md rounded-md border border-gray-100 text-center">
                    <i className="fas fa-exclamation-triangle text-3xl text-red-400"></i>
                    <h2 className="text-2xl text-red-400 my-2">{error.message}</h2>
                </div>
            }
            {
                isValid && !showSelfReg &&
                <div className="w-full md:w-1/2 my-10 py-7 px-3 shadow-md rounded-md border border-gray-100 text-center">
                    <i className="far fa-smile text-blue-500 text-3xl"></i>
                    <h2 className="text-xl font-bold my-2 text-blue-500">Congratulations, {tokenData.name}!</h2>
                    <p>Your activation token is valid. Now, you have to set a password. After setting password, your account will be activated and you can enjoy all the features for you.</p>
                    <button
                        onClick={() => setShowSelfReg(!showSelfReg)}
                        className="py-1 px-5 bg-blue-500 hover:bg-white text-white hover:text-blue-500 rounded-full border border-blue-500 my-3">Set password</button>
                </div>
            }
            {
                isValid && showSelfReg &&
                <div className="w-full sm:w-1/2 md:w-1/3 lg:1/4 my-10 py-7 px-3 shadow-md rounded-md border border-gray-100 text-center">
                    <h3 className="text-2xl mb-4 font-bold text-center">Set a password</h3>
                    {
                        !isActivated &&
                        <div className="w-full">
                            {
                                error.isError &&
                                <div className="p-2 text-red-500">
                                    {error.message}
                                </div>
                            }
                            <div className="flex items-center mb-4 border border-blue-500 rounded-full">
                                <input
                                    type="text"
                                    name="password"
                                    onKeyUp={handleOnChange}
                                    className="block rounded-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Type a new password"
                                />
                            </div>
                            <div className="flex items-center mb-3 border border-blue-500 rounded-full">
                                <input
                                    type="text"
                                    name="re_password"
                                    onKeyUp={handleOnChange}
                                    className="block rounded-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                    placeholder="Re-type password"
                                />
                            </div>
                            <button
                                onClick={handleActivate}
                                className="py-2 px-5 bg-blue-500 hover:bg-white text-white hover:text-blue-500 rounded-full border border-blue-500 my-3">Set password</button>
                        </div>
                    }
                    {
                        isActivated &&
                        <div className="p-2 text-green-500">
                            {error.message}
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default SystemAdminSelftActivation;