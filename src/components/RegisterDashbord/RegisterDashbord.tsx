import React from 'react';

const RegisterDashbord = () => {
    const Rignticon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>;
    const primium = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline" viewBox="0 0 20 20" fill="currentColor">
    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
  </svg>;
  const custom = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
</svg>;
const free = <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>;
    return (
        <div className=''>
                <div className="  flex justify-center ">
                    <img className="inline w-1/3" src="https://scontent.fdac129-1.fna.fbcdn.net/v/t39.30808-6/216435324_1184610025339251_8213238886098074006_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=825194&_nc_ohc=ayzmTEiqevYAX8J44YI&_nc_ht=scontent.fdac129-1.fna&oh=d3029064e9aa5f58050808e837f34c1a&oe=61101B05" alt="..."/>
                    <div className='w-1/3 pl-10'>
                        <h1 className='text-center'>Manage Your Team <br /> In Flexiable Way</h1>
                        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, optio ut ex eum temporibus, rerum impedit sapiente perferendis maxime quae amet autem? Dolor illum quidem similique voluptate sit, facilis ipsam!</p>
                        <div className='flex justify-center pt-8'>
                            <button className='ring-4 ring-indigo-300 p-2 '>Regester Your Company</button>
                            <button className='ring-4 ring-indigo-300 p-2'>LogIn As A Company</button>
                        </div>
                    </div>
                </div>
                <hr /><hr />
                 <div className="pt-10">
                    <div className=" flex justify-center">
                        <div className='w-1/4 bg-gray-300 p-9'>
                            <h1 className='font-semibold pb-3 text-4xl text-center'>{free}Free</h1>
                            <p>Fron individuals and teams looing to be more productve</p>
                            <p className='text-center mt-24'>$<span>0</span>USD</p>
                            <button className='ring-2  ring-red-200 p-3 ml-24 mb-11 mt-20 rounded'>Get Started </button>
                            <hr />
                            <p className='pb-2 pt-9'>{Rignticon} Limited access</p>
                            <p className='pb-2 '>{Rignticon}Limited member</p>
                            <p className='pb-2 '>{Rignticon}All device responsive view</p>
                            <p className='pb-2 '>{Rignticon}Up to 3 course assing</p>
                            <p className='pb-2 '>{Rignticon}Jwt token authentication</p>

                        </div>
                        <div className='w-1/4 bg-blue-300 p-9'>
                        <h1 className='font-semibold pb-3 text-4xl text-center'>{primium}Premium</h1>
                            <p>For teams that need to track multiple projects and visualize work in a variety of way</p>
                            <p className='text-center mt-24'>$<span>50</span>USD</p>
                            <button className='ring-2  ring-red-200 p-3 ml-24 mb-11 mt-20 rounded'>Don't Be Late </button>
                            <hr />
                            <p className='pb-2 pt-9'>{Rignticon} Unlimited members</p>
                            <p className='pb-2 '>{Rignticon}Unlimited meeting schedule</p>
                            <p className='pb-2 '>{Rignticon}Company admin view</p>
                            <p className='pb-2 '>{Rignticon}Assign unlimited course</p>
                            <p className='pb-2 '>{Rignticon}Employee work progress</p>

                        </div> 
                        <div className='w-1/4 bg-indigo-500 p-9'>
                        <h1 className='font-semibold pb-3 text-4xl text-center'>{custom}Custom</h1>
                            <p>For companies that need enhanced control , security and support</p>
                            <p className='text-center mt-24'>$<span>100</span>USD</p>
                            <button className='ring-2  ring-red-200 p-3 ml-24 mb-11 mt-20 rounded'>Act Fast </button>
                            <hr />
                            <p className='pb-2 pt-9'>{Rignticon}Organization wide permission</p>
                            <p className='pb-2 '>{Rignticon}Unlimited department</p>
                            <p className='pb-2 '>{Rignticon}App manage traning</p>
                            <p className='pb-2 '>{Rignticon}Attachhment permisson</p>
                            <p className='pb-2 '>{Rignticon}Power up administation</p>

                        </div>  
                    </div>
                 </div>
               
        </div>
    );
};

export default RegisterDashbord;