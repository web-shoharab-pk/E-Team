import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faTimes, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    handleChatBoard: (toggle: boolean) => void
}

const MessageBoard = ({handleChatBoard}: IProps) : JSX.Element => {
    return (
        <div className="relative">
            <div className="shadow fixed bg-white bottom-0 right-9 w-5/12 rounded-lg px-5 py-3">
                <div className="relative">
                    <h3 className="text-center text-xl font-bold pb-3">Internal Chatting System</h3>
                    <p className="">
                        <FontAwesomeIcon onClick={() => handleChatBoard(false)} className="cursor-pointer absolute top-2 right-0" icon={faMinus} />
                    </p>
                </div>

                <div className="flex space-x-8 justify-center mb-3">
                    <Link to="#" className="text-lg font-medium rounded-3xl px-3 py-1 text-white bg-blue-400">Start a one to one chat</Link>
                    <Link to="#" className="text-lg font-medium rounded-3xl px-3 py-1 text-white bg-blue-400">Start a group Chat</Link>
                </div>

                <div className="mt-5 mb-12">
                    <div className="flex cursor-pointer border-b py-3">
                        <div className="mr-5 rounded-full border border-black text-4xl">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUsers} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Digital Marketing Teem Chat</h3>
                            <p className="text-xs"><strong>Mizan:</strong> Please solve this!</p>
                        </div>
                    </div>

                    <div className="flex cursor-pointer border-b py-3">
                        <div className="mr-5 rounded-full py-1 px-2 border border-black text-4xl">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Mizanur Rahman<span className="text-xs font-light">(DM Team)</span></h3>
                            <p className="text-xs"><strong>Mizan:</strong> Please solve this!</p>
                        </div>
                    </div>

                    <div className="flex cursor-pointer border-b py-3">
                        <div className="mr-5 rounded-full py-1 px-2 border border-black text-4xl">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Mizanur Rahman<span className="text-xs font-light">(DM Team)</span></h3>
                            <p className="text-xs"><strong>Mizan:</strong> Please solve this!</p>
                        </div>
                    </div>
                    
                    <div className="flex cursor-pointer border-b py-3">
                        <div className="mr-5 rounded-full py-1 px-2 border border-black text-4xl">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Mizanur Rahman<span className="text-xs font-light">(DM Team)</span></h3>
                            <p className="text-xs"><strong>Mizan:</strong> Please solve this!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageBoard;