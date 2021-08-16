import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerCompany } from '../loginmanager';
interface userDataType {
    company_name: string;
    email: string;
    website: string;
    phone: string;
    phone_alt: string;
    founded_at: string;
    company_logo: object | string;
    company_type: string;
    employee_range: string;
    co_description: string;
    password: string;
    re_password: string;
}

const RegisterCompany = () => {
    const [companyDetails, setCompanyDetails] = useState({} as userDataType);
    const [error, setError] = useState({ isError: false, message: '' });
    const [isCreated, setIsCreated] = useState(false);

    const handleOnChange = (event: any) => {
        // For removing current error
        setError({isError: false,message:''})
        if (event.target.value) {
            const newObj = { [event.target.name]: event.target.value };
            setCompanyDetails({ ...companyDetails, ...newObj })
        }
        
    }

    const handleCompanyRegister = () => {
        const { company_name, email, phone, website, co_description, password, re_password } = companyDetails;
        if (company_name && email && phone && website && co_description && password && re_password) {
            const emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
            if (emailRegEx.test(email)) {
                if ((password === re_password) && (password.length === 8)) {
                    registerCompany(companyDetails)
                        .then((data: any) => {
                            if (!data?.isError) {
                                setIsCreated(true);
                                setError(data);
                            } else {
                                setError(data);
                            }
                        })
                } else {
                    setError({ isError: true, message: "Password did not matched!" })
                }
            } else {
                setError({ isError: true, message: "Please type a valid email address!" })
            }
        } else {
            setError({ isError: true, message: "Any field must not be empty!" })
        }
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-12 mx-auto">
                <div className="login-switch mb-8 text-center">
                    <div className="inline-block border border-blue-500 rounded-full">
                        <span className="inline-block text-blue-500 text-xl py-2 px-3">Register</span>
                        <Link to="/login" className="inline-block border border-blue-500 text-white bg-blue-500 text-xl py-2 px-5 rounded-full">Login</Link>
                    </div>
                </div>
                <div className="flex flex-col text-center w-full mb-3">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register your company</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">

                    <div className="flex flex-wrap -m-2 mb-3">
                        {
                            error.isError &&
                            <p className="text-red-600 p-3 bg-red-200 text-bold w-full ">{error.message}</p>
                        }
                        {
                            isCreated &&
                            <p className="text-green-600 p-3 bg-green-200 text-bold w-full ">{error.message}</p>
                        }
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    {
                        !isCreated &&
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Company Name</label>
                                    <input
                                        type="text"
                                        name="company_name"
                                        onChange={handleOnChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
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
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        onChange={handleOnChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Website</label>
                                    <input
                                        type="text"
                                        name="website"
                                        onChange={handleOnChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Company description</label>
                                    <textarea
                                        name="co_description"
                                        onChange={handleOnChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-20 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full md:w-1/2">
                                <div className="relative">
                                    <label className="leading-7 text-sm text-gray-600">Re-Type Password Password</label>
                                    <input
                                        type="password"
                                        name="re_password"
                                        onChange={handleOnChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="w-full px-5 py-2">
                                <input type="checkbox" name="agree-terms" className="mr-2"/> Agree with all terms & conditions
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    onClick={handleCompanyRegister}
                                    className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Register</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default RegisterCompany;