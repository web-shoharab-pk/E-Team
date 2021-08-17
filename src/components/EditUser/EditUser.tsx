import React, { useContext } from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";

const EditUser = () => {

    const {userData} = useContext(UserDataContext);
    
    console.log(userData);

  return (
    <div className="shadow-lg lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded">
    <h2 className="text-center text-2xl pb-4 lg:text-3xl font-bold text-blue-400">
      Update Profile
    </h2>

    <form action="" className="form mt-4">
      <div className="lg:flex w-full mb-5 lg:space-x-16">
      <div className="lg:w-5/6">
          <label className="text-base lg:font-semibold" htmlFor="">
           Name
          </label>
          <br />
          <input
            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id=""
            type="text"
            required
            placeholder="name"
          />
        </div>
        <div className="lg:w-5/6">
          <label className="text-base lg:font-semibold" htmlFor="">
            Email
          </label>
          <br />
          <input
            className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id=""
            type="email"
         
            required
            placeholder="email"
          />
        </div>
      </div>

      <div className="lg:flex w-full mb-5 lg:space-x-16">
        <div className="lg:w-5/6">
          <label className="text-base lg:font-semibold" htmlFor="">
           Phone
          </label>
          <br />
          <input
            className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id=""
            type="number"
            required
            placeholder="number"
          />
        </div>
        <div className="lg:w-5/6">
          <label className="text-base lg:font-semibold" htmlFor="">
           Address
          </label>
          <br />
          <input
            className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="" 
            name="address"
            required
            placeholder="Address"
          />
        </div>
 
      </div>


      <div className="text-center ">
        {" "}
        <input
          type="submit"
          value="Update"
          className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
          onClick={(e) => { e.preventDefault();  alert('function not implement!')}}
        />
      </div>
    </form>
  </div>
  );
};

export default EditUser;
