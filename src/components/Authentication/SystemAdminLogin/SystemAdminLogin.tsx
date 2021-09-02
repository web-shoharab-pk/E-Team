import React, { useContext, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';
import { saveToLS, systemAdminLogin } from '../loginmanager';
import firebase from "firebase/app";

const db = firebase.firestore();

const SystemAdminLogin = () => {
    const { systemAdminData, setSystemAdminData } = useContext(SystemAdminDataContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({ error: false, message: '' });

    const history = useHistory();
    const location = useLocation();
    let { from }: any = { from: { pathname: "/system-admin/" } };

    const handleOnChange = (event: any) => {
        const target = event.target;
        const emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;

        // For removing error
        setErrorMessage({ error: false, message: "" });

        // For email state update
        if (target.name === "email" &&
            target.value !== '' &&
            emailRegEx.test(target.value)) {
            setEmail(target.value)
        }
        else if (target.name === "email" &&
            !emailRegEx.test(target.value)) {
            setErrorMessage({ error: true, message: "Invaid Email Address" });
            setEmail('')
        }

        // For password state update
        if (target.name === "password" &&
            target.value !== '' &&
            target.value.length >= 8) {
            setPassword(target.value)
        }
    }

    const handleSALogin = () => {
        if (email && password) {
            systemAdminLogin(email, password)
                .then((data: any) => {
                    if (!data.message) {
                        // For getting data form database 
                        db.collection('system_admins').doc(data?.id).get().then(systemAdmin => {
                            if (!systemAdmin?.exists) {
                                setErrorMessage({ error: true, message: 'No active company registered with this email address!' })
                            } else {
                                const sysAdminData = systemAdmin.data();
                                const newObj = {
                                    isSignedIn: true,
                                    id: data?.id,
                                    name: sysAdminData?.name,
                                    email: sysAdminData?.email,
                                    phone: sysAdminData?.phone,
                                    role: sysAdminData?.role,
                                    created_at: sysAdminData?.created_at,
                                    updated_at: sysAdminData?.updated_at
                                }

                                setSystemAdminData(newObj);
                                saveToLS('token', {admin:newObj});
                                setErrorMessage({ error: false, message: '' })
                                history.replace(from);
                            }
                        });
                    } else {
                        setErrorMessage({ error: true, message: data.message })
                    }
                })

        } else {
            setErrorMessage({ error: true, message: "Email or password field must not be empty or invalid format!" })
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center">
                                    {
                // for redirect if the user already loggedin
                systemAdminData?.isSignedIn &&
                <Redirect to={from} />
            }
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:1/4 mt-14">
                <div className="my-5 px-4 py-5 border border-gray-300 shadow-xl rounded-lg">
                    <div className="mt-5">
                        <h3 className="text-3xl font-bold text-center">E - Team <span className="text-blue-500">Manage</span></h3>
                        <h5 className="py-3 text-xl font-medium text-center">System Admin Login</h5>
                    </div>
                    {
                        errorMessage.error &&
                        <p className="text-red-600 p-3 bg-red-200 text-bold w-full ">{errorMessage.message}</p>
                    }
                    <form className="px-8 pt-5 bg-white rounded">
                        <div className="flex items-center mb-8 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="E-Mail Address"
                            />
                        </div>

                        <div className="flex items-center mb-8 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Password"
                            />
                        </div>

                        <div className="mt-5 text-center">
                            <button
                                className="w-36 border border-blue-500 rounded-full px-4 py-2 font-bold text-white hover:text-blue-500 bg-blue-500 hover:bg-white focus:outline-none focus:shadow-outline" type="button"
                                onClick={handleSALogin}
                            >
                                LogIn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SystemAdminLogin;