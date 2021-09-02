import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const PreLoader = () => {
    return (
        <div className="text-center items-center bg-white flex justify-center w-full h-screen">
            <HashLoader color={"#4A90E2"} size={100}/>
        </div>
    )
}

export default PreLoader
