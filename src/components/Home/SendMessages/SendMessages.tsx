import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import db from '../../Firebase/Firebase';


const SendMessages = () => {
    const [msg, setMsg] = useState('');

    async function sendMessage(e:any) {
        e.preventDefault();
        // const {} 
        await db.collection('messages').add({
            text: msg,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            (document.getElementById("text") as HTMLInputElement).value = "";
        })
    }

    return (
        <div className="w-full mt-2 text-center">
            <form action="#" onSubmit={sendMessage}>
                <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
                    <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} id="text" placeholder="Write.." className="flex-1 appearance-none rounded-full shadow p-3 text-grey-dark mr-2 focus:outline-none" />
                    <button type="submit" className="appearance-none bg-blue-400 text-white text-base font-semibold tracking-wide px-4 py-3 rounded-full shadow hover:bg-indigo-light">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendMessages;