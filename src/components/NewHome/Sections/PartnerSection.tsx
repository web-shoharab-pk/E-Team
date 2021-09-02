import React from 'react';
import img1 from './../../../Assets/images/coka.png';
import img2 from './../../../Assets/images/google.png';
import img3 from './../../../Assets/images/microsoftr.png';
import img5 from './../../../Assets/images/phero.png';
import img4 from './../../../Assets/images/tesla.png';

const PartnerSection = () => {
    return (
        <div className="shadow-lg border border-gray-100 container text-center mx-auto mt-5">
            <div>
                <h1 className="title-font p-3 sm:text-4xl text-center text-3xl  mt-8 mb-4 font-bold border-b-4 border-indigo-600 inline-block text-blue-500">Our Web partner</h1>
                <div className="flex justify-around items-center mb-6">
                    <div><img className="w-36" src={img1} alt="" /></div>
                    <div><img className="w-36" src={img2} alt="" /></div>
                    <div><img className="w-36" src={img3} alt="" /></div>
                    <div><img className="w-36" src={img4} alt="" /></div>
                    <div><img className="w-36" src={img5} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;