import React, { useState, useContext } from 'react';
import moment from 'moment';
import md5 from 'crypto-js/md5';
import emailjs from 'emailjs-com';
import { db } from '../../AllDepartment/AllDepartment';
import { SystemAdminDataContext } from '../../../Contexts/UserDataContext';

interface addSysAdminInfoType {
    name: string;
    email: string;
    phone: string;
    expired_at: string;
}

const AddSystemAdmin = () => {
    const { systemAdminData, setSystemAdminData } = useContext(SystemAdminDataContext)
    const [addSysAdminInfo, setAddSysAdminInfo] = useState({} as addSysAdminInfoType);
    const [error, setError] = useState({ isError: false, message: "" });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleOnChange = (event: any) => {
        setError({ isError: false, message: "" })
        setIsSuccess(false)
        setAddSysAdminInfo({ ...addSysAdminInfo, [event.target.name]: event.target.value });
    }

    const handleInviteSysAdmin = (event: any) => {
        event.preventDefault();
        const emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
        const bdMobileRegEx = /^(\+)?(88)?01[0-9]{9}$/;

        const { name, email, phone } = addSysAdminInfo;

        if (name && email && phone) {
            if (name.length >= 3 && emailRegEx.test(email) && bdMobileRegEx.test(phone)) {
                const presentTime = new Date();
                const expiredAt = moment(new Date(new Date().getTime() + 60 * 60 * 24 * 1000)).format("YYYY-MM-DD HH:mm:ss");
                const token = md5(expiredAt).toString();
                const activationURL = 'https://eteammanage.web.app/system-admin/activate-account/?email=' + email + '&key=' + token;
                const newTokenData = { ...addSysAdminInfo, isActivated: false, token: token, attempt: 1, expired_at: expiredAt,created_by:systemAdminData.id };

                // For checking is there any duplicate valid token
                db.collection("tokens_sys_admin").doc(email).get().then((doc: any) => {
                    if (!doc?.exists) {
                        createToken(email, newTokenData)
                        sendInvitation({user_email:email,user_name:name, activation_url:activationURL})
                        console.log({user_email:email,user_name:name, activation_url:activationURL})
                        event.target.reset();
                    } else {
                        const tokenData = doc.data();
                        const isExpired = (presentTime > new Date(tokenData.expired_at));
                        if (tokenData.isActivated) {
                            setIsSuccess(false);
                            setError({ isError: true, message: "User Already exist!" })
                        } else if (!isExpired) {
                            setIsSuccess(false);
                            setError({ isError: true, message: "Already invited. Tell to check email inbox or spam box!" })
                        } else if (isExpired) {
                            if (tokenData.attempt <= 4) {
                                updateToken(email, { ...newTokenData, attempt: tokenData.attempt + 1 })
                                sendInvitation({name,email, activationURL})
                                event.target.reset();
                                console.log({name,email, activationURL})
                            } else {
                                setError({ isError: true, message: "You have invited " + tokenData.attempt + " times. You have not invite more by this email." })
                            }
                        }
                    }
                })
            } else {
                setIsSuccess(false);
                setError({ isError: true, message: "Please input valid information." })
            }
        } else {
            setIsSuccess(false);
            setError({ isError: true, message: "Any field must not be empty!" })
        }
    }

    const createToken = (email: string, newTokenData: object) => {
        // For sending data to database
        db.collection('tokens_sys_admin').doc(email).set(newTokenData)
            .then(data => {
                setError({ isError: false, message: "Invitation has been sent. The invitation will expire in 24 hours." });
                setIsSuccess(true);
            })
            .catch((error) => {
                setIsSuccess(false);
                setError({ isError: true, message: "Something occurs error. please try again!" });
            });
    }

    const updateToken = (email: string, newTokenData: object) => {
        // For sending data to database
        db.collection('tokens_sys_admin').doc(email).update(newTokenData)
            .then(data => {
                setError({ isError: false, message: "Invitation has been sent again. The invitation will expire in 24 hours." });
                setIsSuccess(true);
            })
            .catch((error) => {
                setIsSuccess(false);
                setError({ isError: true, message: "Something occurs error. please try again!" });
            });
    }


    const sendInvitation = (obj: any) => {
        emailjs.send('gmail', 'template_y9zukgk', obj, 'user_V7FLGg8OEpepueFuWRERN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }


    return (
        <div className=" flex flex-col justify-center items-center">
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:1/4 mt-14">
                <div className="my-5 px-4 py-5 border border-gray-300 shadow-xl rounded-lg">
                    <div className="my-5">
                        <h3 className="text-3xl font-bold text-center">Add system admin</h3>
                    </div>
                    {
                        error.isError && <div className="text-red-500 mx-5 text-center">{error.message}</div>
                    }

                    {
                        !error.isError && isSuccess && <div className="text-green-500 mx-5 text-center">{error.message}</div>
                    }
                    <form className="px-8 pt-5 bg-white rounded" onSubmit={handleInviteSysAdmin}>

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
                                type="submit"
                                className="w-40 border border-blue-500 rounded-full px-4 py-2 font-bold text-white hover:text-blue-500 bg-blue-500 hover:bg-white focus:outline-none focus:shadow-outline"
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