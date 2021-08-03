import React, { useState } from 'react';
interface CompanyDataType {
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
}

const RegisterCompany = () => {
    const [companyDetails, setCompanyDetails] = useState({} as CompanyDataType)
    const handleOnChange = (event: any) => {
        console.log(event.target.name, event.target.value);
        if (event.target.value) {
            const newObj = { [event.target.name]: event.target.value };
            if (event.target.name === 'company_logo') {
                console.log(event.target.files[0]);
                setCompanyDetails({ ...companyDetails, [event.target.name]:event.target.files[0] })
            }else{
                setCompanyDetails({ ...companyDetails, ...newObj })
            }
            console.log(companyDetails);
        }
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Register your company</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
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
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Website</label>
                                <input
                                    type="text"
                                    name="website"
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
                                <label className="leading-7 text-sm text-gray-600">Alternative Phone Number</label>
                                <input
                                    type="text"
                                    name="phone_alt"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full md:w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Founded At</label>
                                <input
                                    type="text"
                                    name="founded_at"
                                    placeholder="YYYY-MM-DD"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full md:w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Company Logo</label>
                                <input
                                    type="file"
                                    name="company_logo"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full md:w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Company Type</label>
                                <select
                                    name="company_type"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                                    <option value="small" disabled>Select Your company type</option>
                                    <option value="small">Startup</option>
                                    <option value="small">Medium</option>
                                    <option value="small">Large Enterprise</option>
                                </select>
                            </div>
                        </div>
                        <div className="p-2 w-full md:w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Employees</label>
                                <select
                                    name="employee_range"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                                    <option value="" disabled>Select Employee Number</option>
                                    <option value="15">0-15 Employee</option>
                                    <option value="30">16-30 Employee</option>
                                    <option value="50">31-50 Employee</option>
                                </select>
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
                                    type="file"
                                    name="password"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full md:w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Re-Type Password Password</label>
                                <input
                                    type="file"
                                    name="password"
                                    onChange={handleOnChange}
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterCompany;