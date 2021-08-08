import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserDataContext, UserDataContextType, UserDataType } from '../../Contexts/UserDataContext';
import { db, loginComapny } from '../loginmanager';

const LoginCompany = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({ error: false, message: '' });

    const history = useHistory();
    const location = useLocation();
    let { from }: any = { from: { pathname: "/home" } };

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

    const handleCompanyLogin = () => {
        if (email && password) {
            loginComapny(email, password)
                .then((data: any) => {
                    if (!data.message) {
                        // For getting data form database 
                        db.collection('companies').doc(data?.co_id).get().then(company => {
                            if (!company?.exists) {
                                setErrorMessage({ error: true, message: 'No active company registered with this email address!' })
                            } else {
                                const companyData = company.data();
                                const newObj = {
                                    isSignedIn: true,
                                    co_id: data?.co_id,
                                    company_name: companyData?.company_name,
                                    email: companyData?.email,
                                    role: companyData?.role,
                                    created_at: companyData?.created_at,
                                    updated_at: companyData?.updated_at
                                }

                                setUserData(newObj);
                                setErrorMessage({ error: false, message: '' })
                                history.replace(from);
                            }
                        });
                    }else{
                        setErrorMessage({ error: true, message: data.message })
                    }
                })

        } else {
            setErrorMessage({ error: true, message: "Email or password field must not be empty or invalid format!" })
        }
    }

    const testDB = () => {

    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-12 mx-auto">
                <div className="login-switch mb-8 text-center">
                    <div className="inline-block border border-blue-500 rounded-full">
                        <Link to="/registration" className="inline-block border border-blue-500 text-white bg-blue-500 text-xl py-2 px-5 rounded-full">Registration</Link>
                        <span className="inline-block text-blue-500 text-xl py-2 px-3">Login</span>
                    </div>
                </div>
                <div className="flex flex-col text-center w-full mb-3">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login to company dashboard</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">

                    <div className="flex flex-wrap -m-2 mb-3">
                        {
                            errorMessage.error &&
                            <p className="text-red-600 p-3 bg-red-200 text-bold w-full ">{errorMessage.message}</p>
                        }
                        {/* {
                            isCreated &&
                            <p className="text-green-600 p-3 bg-green-200 text-bold w-full ">{error.message}</p>
                        } */}
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Email Address</label>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                onClick={handleCompanyLogin}
                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginCompany;