import React, { useState } from 'react';
import moment from 'moment';
import md5 from 'crypto-js/md5';

interface addSysAdminInfoType {
    name: string;
    email: string;
    phone: string;
    requested_at: string;
}

const AddSystemAdmin = () => {
    const [addSysAdminInfo, setAddSysAdminInfo] = useState({} as addSysAdminInfoType);

    const handleOnChange = (event: any) => {
        setAddSysAdminInfo({ ...addSysAdminInfo, [event.target.name]: event.target.value });
    }

    const handleInviteSysAdmin = () => {
        const nameRegEx = /^[A-Za-z.]{3,}$/;
        const emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
        const bdMobileRegEx = /^(\+)?(88)?01[0-9]{9}$/;

        const { name, email, phone } = addSysAdminInfo;

        if (name && email && phone) {
            if (nameRegEx.test(name) && emailRegEx.test(email) && bdMobileRegEx.test(phone)) {
                const presentTime =  moment().format("YYYY-MM-DD HH:mm:ss");
                const token = md5(presentTime).toString();
                console.log('https://eteammanage.web.app/activate-system-admin/?email='+email+'&token='+token);
                setAddSysAdminInfo({...addSysAdminInfo,requested_at: presentTime})
            } else {
                console.log("Please input valid information.");
            }
        } else {
            console.log("Any field must not be empty!");

        }
    }
    return (
        <div className=" flex flex-col justify-center items-center">
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:1/4 mt-14">
                <div className="my-5 px-4 py-5 border border-gray-300 shadow-xl rounded-lg">
                    <div className="my-5">
                        <h3 className="text-3xl font-bold text-center">Add system admin</h3>
                    </div>

                    <form className="px-8 pt-5 bg-white rounded">

                        <div className="flex items-center mb-4 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <input
                                id="full-name"
                                type="text"
                                name="name"
                                onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="flex items-center mb-4 border border-blue-500 rounded-full">
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

                        <div className="flex items-center mb-4 border border-blue-500 rounded-full">
                            <div className="w-12 rounded-l-full pl-4 py-2 bg-blue-500 text-white">
                                <span>
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="phone"
                                onKeyUp={handleOnChange}
                                className="block rounded-r-full text-sm sm:text-base placeholder-gray-500 pl-4 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="mt-5 text-center">
                            <button
                                className="w-40 border border-blue-500 rounded-full px-4 py-2 font-bold text-white hover:text-blue-500 bg-blue-500 hover:bg-white focus:outline-none focus:shadow-outline" type="button"
                                onClick={handleInviteSysAdmin}
                            >
                                Send Login Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSystemAdmin;