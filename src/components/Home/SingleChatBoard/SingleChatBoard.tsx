import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect, useContext} from 'react';
import SendMessages from '../SendMessages/SendMessages';
import firebase from "firebase/app";
import "firebase/firestore";
import db from '../../Firebase/Firebase';
import { UserDataContext } from '../../../Contexts/UserDataContext';

interface IProps {
    handleChatList: (toggle: boolean) => void
}

const SingleChatBoard = ({handleChatList}: IProps) : JSX.Element => {
    const [messages, setMessages] = useState<any>([]);
    const {userData, setUserData} = useContext<any>(UserDataContext);

    useEffect(() => {
        db.collection('messages').orderBy('createAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="relative">
            <div className="shadow border border-gray-100 fixed bg-white right-9 bottom-0 w-4/12 rounded-lg px-5 py-3">
                <div className="flex border-b py-3">
                    <div className="mr-4 flex items-center cursor-pointer">
                        <FontAwesomeIcon onClick={() => handleChatList(false)} icon={faArrowLeft} className="" />
                    </div>

                    <div className="mr-5 rounded-full px-2 py-1 border border-black text-4xl">
                        {/* <img src="" alt="" /> */}
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold">Digital Marketing Teem Chat</h3>
                        <p className="text-xs">Active Now</p>
                    </div>
                </div>
            
                {/* <div className="mt-3 h-60 overflow-y-scroll">
                    {
                        messages.map(({id, text, co_id}:any) => (
                            <div key={id} className={`msg ${co_id === userData.co_id ? 'sent' : 'received'}`}>
                                <div className="flex justify-start mb-2">
                                    <div className="mr-5 mt-7 rounded-full h-8 px-1.5 border border-black text-lg">
                                        <img src="" alt="" />
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>

                                    <div className="bg-gray-300 py-2 px-4 rounded-sm">
                                        <p>{text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div> */}
                <div className="msgs h-80 overflow-y-scroll">
                    {messages.map(({ user_id, text, id }:any) => (
                        <div>
                            <div key={id} className={`my-2 msg ${user_id === userData?.id ? 'text-right ml-auto' : 'mr-auto text-left'}`}>
                                <div className="mr-5 mt-7 inline rounded-full h-8 px-1.5 border border-black text-lg">
                                        <FontAwesomeIcon icon={faUser} />
                                </div>
                                <p className="inline-block bg-gray-300 py-2 px-4 rounded-sm">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <SendMessages />
            </div>
        </div>
    );
};

export default SingleChatBoard;