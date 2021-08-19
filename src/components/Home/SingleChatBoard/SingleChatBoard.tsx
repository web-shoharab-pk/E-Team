import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleChatBoard = () => {
    return (
        <div className="relative">
            <div className="shadow fixed bg-white right-9 bottom-0 w-5/12 rounded-lg px-5 py-3">
                <div className="flex border-b py-3">
                    <div className="mr-4 flex items-center cursor-pointer">
                        <FontAwesomeIcon icon={faArrowLeft} className="" />
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
            
                <div className="mt-3">
                    <div className="flex justify-start mb-2 h-auto">
                        <div className="mr-5 mt-7 rounded-full h-8 px-1.5 border border-black text-lg">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>

                        <div className="bg-gray-300 py-2 px-4 rounded-sm">
                            <p>Hello</p>
                            <p>How Are you?</p>
                        </div>
                    </div>

                    <div className="flex justify-end mb-2 h-auto">
                        <div className="bg-gray-300 py-2 px-4 rounded-sm">
                            <p>Hello</p>
                            <p>How Are you?</p>
                        </div>

                        <div className="ml-5 mt-7 rounded-full h-8 px-1.5 border border-black text-lg">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="flex justify-start mb-2 h-auto">
                        <div className="mr-5 mt-7 rounded-full h-8 px-1.5 border border-black text-lg">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>

                        <div className="bg-gray-300 py-2 px-4 rounded-sm">
                            <p>Hello</p>
                            <p>How Are you?</p>
                        </div>
                    </div>

                    <div className="flex justify-end mb-2 h-auto">
                        <div className="bg-gray-300 py-2 px-4 rounded-sm">
                            <p>Hello</p>
                            <p>How Are you?</p>
                        </div>

                        <div className="ml-5 mt-7 rounded-full h-8 px-1.5 border border-black text-lg">
                            {/* <img src="" alt="" /> */}
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChatBoard;