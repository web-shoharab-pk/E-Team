import React, { useState, useContext } from 'react';
import moment from 'moment';
import md5 from 'crypto-js/md5';
import emailjs from 'emailjs-com';
import { UserDataContext } from '../../../Contexts/UserDataContext';
import db from '../../Firebase/Firebase';
import swal from "sweetalert";

interface addUserDataType {
    name: string;
    email: string;
    phone: string;
    expired_at: string;
}


const CreateNewUser = () => {
    const { userData, setUserData } = useContext(UserDataContext)
    const [addUserData, setAddUserData] = useState({} as addUserDataType);
    const [error, setError] = useState({ isError: false, message: "" });
    const [isSuccess, setIsSuccess] = useState(false);



    const handleOnChange = (event: any) => {
        setError({ isError: false, message: "" })
        setIsSuccess(false)
        setAddUserData({ ...addUserData, [event.target.name]: event.target.value });
    }

    const handleInviteUser = (event: any) => {
        event.preventDefault();
        const emailRegEx = /^[a-zA-Z0-9._]{3,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;
        const bdMobileRegEx = /^(\+)?(88)?01[0-9]{9}$/;

        const { name, email, phone } = addUserData;

        if (name && email && phone) {
            if (name.length >= 3 && emailRegEx.test(email) && bdMobileRegEx.test(phone)) {
                const presentTime = new Date();
                const expiredAt = moment(new Date(new Date().getTime() + 60 * 60 * 24 * 1000)).format("YYYY-MM-DD HH:mm:ss");
                const token = md5(expiredAt).toString();
                const activationURL = 'https://eteammanage.web.app/activate-account/?email=' + email + '&key=' + token;
                const newTokenData = { ...addUserData, isActivated: false, token: token, attempt: 1, expired_at: expiredAt, created_by: userData.id,co_id:userData.co_id };

                // For checking is there any duplicate valid token
                db.collection("tokens_user").doc(email).get().then((doc: any) => {
                    if (!doc?.exists) {
                        createToken(email, newTokenData)
                        sendInvitation({ user_email: email, user_name: name, activation_url: activationURL })
                        console.log({ user_email: email, user_name: name, activation_url: activationURL })
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
                                sendInvitation({ name, email, activationURL })
                                event.target.reset();
                                console.log({ name, email, activationURL })
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
            swal("Sorry!", "All fields must be filled up", "error");
        }
    }

    const createToken = (email: string, newTokenData: object) => {
        // For sending data to database
        db.collection('tokens_user').doc(email).set(newTokenData)
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
        db.collection('tokens_user').doc(email).update(newTokenData)
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
        <div className="flex mb-8 justify-center">
            <div className="w-11/12 md:w-4/6 lg:w-2/4 mt-14 xl:w-2/5">
                <div className="p-4 rounded-md shadow border hover:shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 mt-2">Create A New User</h2>
                    {
                        error.isError && <div className="text-red-500 mx-5 text-center">{error.message}</div>
                    }

                    {
                        !error.isError && isSuccess && <div className="text-green-500 mx-5 text-center">{error.message}</div>
                    }
                    <form onSubmit={handleInviteUser}>
                        <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                            <i className="fas fa-user mx-3"></i>
                            <input 
                            type="text" 
                            placeholder="Enter Name" 
                            name="name"
                            onKeyUp={handleOnChange}
                            className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                        </div>

                        <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                            <i className="fas fa-envelope mx-3"></i>
                            <input 
                            type="text" 
                            placeholder="Enter Email Address" 
                            name="email"
                            onKeyUp={handleOnChange}
                            className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                        </div>

                        <div className="flex items-center mx-3 border h-10 rounded-full bg-gray-200 mb-4">
                            <i className="fas fa-phone-alt mx-3"></i>
                            <input 
                            type="text" 
                            placeholder="Enter Your Phone Number" 
                            name="phone"
                            onKeyUp={handleOnChange}
                            className="w-full h-full rounded-r-full outline-none placeholder-gray-600 p-3" />
                        </div>
                        <div className="text-center mb-5">
                            <button className="py-2 px-10 rounded-full transition delay-150 bg-blue-500 text-white font-medium text-lg hover:bg-blue-600">Create User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateNewUser;